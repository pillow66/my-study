### uni-app项目
```javascript
{
    "gen:alipayapp-gtgj": "cross-env APP_NAME=alipayapp-gtgj node gen-config.js",
    "dev:alipayapp-gtgj": "npm run gen:alipayapp-gtgj && cross-env NODE_ENV=development UNI_PLATFORM=mp-alipay APP_NAME=alipayapp-gtgj vue-cli-service uni-build --watch",
    "build:alipayapp-gtgj": "npm run gen:alipayapp-gtgj && cross-env NODE_ENV=production UNI_PLATFORM=mp-alipay APP_NAME=alipayapp-gtgj vue-cli-service uni-build"
}
```
1.dev:alipayapp-gtgj,build:alipayapp-gtgj都预先执行gen:alipayapp-gtgj用来替换环境变量
2.cross-env它是运行跨平台设置和使用环境变量(Node中的环境变量)的脚本
3.cross-env APP_NAME=alipayapp-gtgj设置环境变量APP_NAME的值后执行node gen-config.js

### gen-config.js
根据process.env.APP_NAME生成指定项目的manifest.json, pages.json, routes.js
- 生成src/manifest.json
```javascript
//读取src/config/manifest/alipayapp-gtgj.json内容到src/manifest.json
function genManifest() {
  let data = fs.readFileSync(`src/config/manifest/${appName}.json`).toString();
  fs.writeFileSync('src/manifest.json', data);
  console.log(`读取manifest配置文件 src/config/manifest/${appName}.json`);
}
```
- 生成首页
```javascript
function genHomepage() {
  // 拷贝各自小程序的home页面至 src/projects/home
  return new Promise((resolve, reject) => {
    rm(path.resolve(__dirname, './src/projects/home/*'), err => {
      if (err) reject();

      vfs.src([`./src/projects/home-${appName}/**/*.*`])
        .pipe(vfs.dest('./src/projects/home'))
        .on('end', function() {
          console.log(`生成首页文件, 来源 src/projects/home-${appName}`);
          resolve();
        });
    })
  })
}
```
- 生成pages.json
pages.json决定页面文件路径，窗口样式等，类似微信小程序app.json
```javascript
const matchedRouteFileName = 'route.json';
const matchedGtgjRouteFileName = 'route-gtgj.json';
const routeFilePath = 'src/pages.json';

//遍历src下所有route-gtgj.json文件，提取pages, subPackages, tabBar, globalStyle等字段合并保存至src/pages.json
genPages('src', routeFilePath)

function genPages(srcDir, targetPath) {
  let fileName = matchedRouteFileName
  if (process.env.APP_NAME.indexOf('-gtgj') > -1) {
    fileName = matchedGtgjRouteFileName
  }
  
  return Promise.all(getRoutePages(srcDir, fileName)).then(routes => {
      const r = merge(routes);
      r.pages = handleHomePage(r.pages)
      fs.writeFileSync(path.resolve(__dirname, targetPath), JSON.stringify(r, ' ', 2));
    })

  //...
}
```
- 生成routes.js
从pages.json提取path,meta等属性至src/routes.js  
主要用于给src/router.js文件做登录拦截  
src/router.js监听路由变化，通过meta.auth判断是否需要强制登录

- 生成tabBars.js
从pages.json提取tabBar属性至src/projects/payment/tabBars.js  
src/projects/payment是支付模块

### 审批业务逻辑
src/projects/corporate  

- approve审批人(审批列表/审批详情)
    1. list.vue
    ```javascript
    // state.approveWait审核人-待审批列表
    // 审批人-待审批订单列表
    getOrderWait({ commit, state }) {
      //BASIC_CORPID前置业务存在storage中的审批人id
      let corpId = state.corpId || uni.getStorageSync('BASIC_CORPID') || '';
      let p231033 = Api[231033]({ corpId });
      let p231036 = Api[231036]();
      
      //取231033国内机票待审批，231036国际机票待审批合并成待审批数据()
      //接口返回的数据是包含审批人/申请人需要筛选approvedListSort(data, 'approve')且需要按deadline，requestedTime排序
      return Promise.all([p231033, p231036]).then(res => {
          commit('APPROVE_WAITS', R.mergeAll([res[0], { internationalTicketReqList: res[1] }]));
      });
    }
  
    //approveHistory审核人-审批历史记录
    // 审批人 已审批订单列表
    getOrderHistory({ commit }, params) {
      let serviceId = R.path(['serviceId'], params);
      let pid = (serviceId === '0') ? 231014 : (serviceId === '68') ? 231037 : 231029;
  
      //params参数{serviceId: '0'/'68'/其他}
      //231014国内机票
      //231037国际机票
      //231029酒店+专车+高铁
      return Api[pid](params).then(data => commit('APPROVE_HISTORY', data || []));
    }
    ```
  
    ```javascript
    //components/appCards数据卡片控件
    //跳转到审批详情，带参数travelRequestId和serviceId过去
    goToDetail(opts) {
      let { travelRequestId, serviceId } = opts;
      
      //申请人-详情
      if (this.type === 'proposer') {
        this.$router.push({
           name: 'proposerDetail',
           query: { travelRequestId, serviceId }
        });
      } 
      //审批人-详情
      else if (this.type === 'approve') {
        this.$router.push({
           name:'approveDetail',
           query: { travelRequestId, serviceId }
        });
      }
    },
    //申请人待审批/申请人去预订/审批人审批按钮被点击
    cardFooterAction(approve) {
      this.$emit('action', approve);  
    }
  
  
    //处理申请人催审批/审批人审批按钮
    handleCardAction(approve) {
      let { travelRequestId, serviceId } = approve;
      let curTabId = this.curTab.id;
      if (curTabId === "approve-wait") {
        //弹出审批窗体-输入审批内容-选择拒绝/通过
        this.approveInfoTemp = { travelRequestId, serviceId };
        this.showSlPopup = true;
      }
    }
    ```
    
    2. details.vue
    ```javascript
    onLoad() {
      //接受页面参数
      this.travelRequestId = this.$route.query && this.$route.query.travelRequestId;
      this.serviceId = this.$route.query && this.$route.query.serviceId || '0';
        
      //审批人-获取审批详情
      this.getApproveDetail({
         travelRequestId: this.travelRequestId,
         serviceId: this.serviceId
      }).then(() => this.showPage = true);
    }
  
    // 审批人 获取审批订单详情
    getApproveDetail({ commit }, params) {
      let serviceId = R.path(['serviceId'], params);
      let pid = (serviceId === '0') ? 232010 : (serviceId === '68') ? 232012 : 231026;
  
      //232010国内机票申请审批详情
      //232012国际机票申请审批详情
      //申请审批详情 (酒店 + 专车 + 高铁)
      return Api[pid](params).then(res => commit('APPROVE_DETAIL', res));
  
      //申请审批详情
      //state.approveDetail = data;
    }
    ```

- basic我的差率标准/统计报表

- proposer申请人

#### serviceId 说明
- 0	国内机票
- 68 国际机票
- 2	保险
- 5	抢票
- 1	酒店
- 6	专车
- 29 火车票
- 3	其他

#### 差旅预定标识 flag 说明
- 0 申请人相同行程 = same-trip	相同行程 开启审批
- 1 违背超标 无需审批 = propose-violation	建议性违规选择原因	开启差标且未开启审批 
- 4 违背超标 需审批 = submit-for-approval	提交审批 开启审批
- 3 违背超标 企业后台配置为违规不准预订 = mandatory-violation	强制性违规页 开启差标
- 2 未违规 需审批 = propose-violation-and-submit-for-approval	建议性违规并且需提交审批 开启差标、开启审批
- 5 未违规 无需审批

#### tmc 标识
- 0：未知
- 1：企业
- 2：个人

#### approvedListSort
```javascript
//格式化待审核数据(包括审核人/申请人)
function approvedListSort(data, type) {
  //接口返回审核人列表属性集合
  const approveListMap = {
    //国内航班
    'needToApproveTrvlReqList': '0',
    //酒店
    'hotelNeedToApproveTrvlReqList': '1',
    //专车
    'carNeedToApproveTrvlReqList': '6',
    //火车
    'trainTicketNeedToApproveTrvlReqList': '29',
    //国际航班
    'internationalTicketReqList': '68'
  };

  //接口返回申请人列表属性集合
  const proposerListMap = {
    'needToBeApprovedTrvlReqList': '0',
    'hotelNeedToBeApprovedTrvlReqList': '1',
    'carNeedToBeApprovedTrvlReqList': '6',
    'trainTicketNeedToBeApprovedTrvlReqList': '29',
    'internationalTicketReqList': '68'
  };

  const busTypeDict = type === 'approve' ? approveListMap : proposerListMap;

  let wait = {};
  //过期待审核
  let resultWarningWait = [];
  //待审核
  let resultWait = [];

  for (let k in busTypeDict) {
    if (data.hasOwnProperty(k)) {
      //let transferKey = busTypeDict[k];
      //去各业务带审核列表数据
      let list = data[k];
      
      //过期待审核列表
      let warningPartList = [];
      //一般待审核列表
      let restPartList = [];

      list.forEach((approve) => {
        //判断是否过审核期
        if ((approve.deadline - Date.now()) > 15 * 60 * 1000) {
          restPartList.push(approve);
        } else {
          //添加自定义属性标识是否过期
          approve.timeWarning = true;
          warningPartList.push(approve);
        }
      });
      
      //按过期时间排序
      //warningPartList.sort((a, b) => a.deadline - b.deadline);
      //按请求时间排序
      //restPartList.sort((a, b) => b.requestedTime - a.requestedTime);
      //各业务线待审核
      //wait[transferKey] = [...warningPartList, ...restPartList];

      //将各业务线数据合并到总紧急待审核列表
      resultWarningWait = resultWarningWait.concat(warningPartList)
      //将各业务线数据合并到总紧急待审核列表
      resultWait = resultWait.concat(restPartList);
    }
  }

  //已过期待审批按过期时间排序(多业务混排)
  resultWarningWait.sort((a, b) => a.deadline - b.deadline);
  //待审批按请求审批时间排序(多业务混排)
  resultWait.sort((a, b) => b.requestedTime - a.requestedTime);

  // descend
  wait['-1'] = [...resultWarningWait, ...resultWait];

  return wait;
}
```