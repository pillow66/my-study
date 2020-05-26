### 申请人列表
```javascript
onShow() {
  this.queryOrderData();
}

//下拉刷新
onPullDownRefresh() {
  uni.stopPullDownRefresh();
  this.queryOrderData();
}

//依据当前tab拉取页面数据
queryOrderData() {
  this.finishLoad = false;
  const curTabId = this.curTab.id;
  //proposer-wait:-1, proposer-agree:0, proposer-other:0
  const serviceId = this.serviceIds[curTabId];
      
  switch (curTabId) {
    //待审核
    case "proposer-wait":
      this.getProposerWait()
      break;
    //已过审
    case "proposer-agree":
      this.getProposerAgree({ serviceId })
      break;
    //已失效(过期/未通过等)
    case "proposer-other":
      this.getProposerOther({ serviceId })
      break;
    default:
      break;
  }
}

handleCardAction(approve) {
  const { travelRequestId, serviceId = "0" } = approve;
  const curTabId = this.curTab.id;
  
  //当前tab为proposer-wait响应列表卡片点击处理为催审批处理
  if (curTabId === "proposer-wait") {
    //催审批
    //232001申请人催审批请求
    this.urgentApprove({ travelRequestId, serviceId }).then(res =>
      this.$popup({
        title: "管家提示",
        //催审批回复
        content: R.path(["bd", "data"], res),
        confirm: () => console.log("确认")
      })
    );
  } else if (curTabId === "proposer-agree") {
    //去预订
    //231035获取去预定跳转链接接口
    this.requireOrderURI({ travelRequestId, serviceId })
      //页面跳转
      .then(path => (path ? this.$router.push({ path }) : null));
  }
}
```

#### 待审核列表
```javascript
// 申请人 获取待审批订单列表    
getProposerWait({ commit }) {
  let p231034 = Api[231034]();
  let p231038 = Api[231038]();

  //231034申请人待审批订单(国内机票+all)
  //231038申请人待审核订单(国际机票)
  return Promise.all([p231034, p231038]).then(res => {
    //待审核订单会通过approvedListSort方法筛选排序(同审核人待审核列表)，赋值给state.proposerWait
    commit('PROPOSER_WAIT', R.mergeAll([res[0], { internationalTicketReqList: res[1] }]))
  });
}
```

#### 已过审列表
```javascript
// 申请人 获取已同意订单列表    
getProposerAgree({ commit }, params) {
  let serviceId = R.path(['serviceId'], params);
  let pid = (serviceId === '0') ? 231022 : (serviceId === '68') ? 231039 : 231025;

  //231022申请人国内机票已通过
  //231039申请人国际机票已通过
  //231025申请人已通过订单(酒店 + 专车 + 高铁)
  //数据经过agreedListSort筛选排序，赋值给state.proposerAgree
  return Api[pid](params).then(data => commit('PROPOSER_AGREE', data || []));
}

function agreedListSort(data) {
  let warningPartList = [],
    restPartList = []

  data.forEach((approve) => {
    if ((approve.payDeadline - Date.now()) > 15 * 60 * 1000) {
      restPartList.push(approve);
    } else {
      approve.timeWarning = true;
      warningPartList.push(approve);
    }
  });

  warningPartList.sort((a, b) => a.payDeadline - b.payDeadline);
  restPartList.sort((a, b) => b.requestedTime - a.requestedTime);

  return [...warningPartList, ...restPartList];
}
```

#### 已失效
```javascript
// 申请人 获取已失效订单列表    
getProposerOther({ commit }, params) {
  let serviceId = R.path(['serviceId'], params);
  let pid = (serviceId === '0') ? 231023 : (serviceId === '68') ? 231040 : 231027;
      
  //231023申请人国内机票已失效
  //231040申请人国际机票已失效
  //231027申请人已失效订单(酒店 + 专车 + 高铁)
  //赋值给state.proposerOther
  return Api[pid](params).then(data => commit('PROPOSER_OTHER', data || []));
}
```