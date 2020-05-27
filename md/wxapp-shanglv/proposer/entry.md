### 检查差标
```javascript
onLoad() {
  //清理差标数据
  this.$store.commit('corporate/CLEAR_PROPOSER_EXCESS');

  //接受页面参数
  this.travelBookingId = R.path(['params', 'travelBookingId'], this.$route);
  this.serviceId = R.path(['params', 'serviceId'], this.$route);
  this.path = R.path(['params', 'path'], this.$route);
  this.directDeliveryParam = R.path(['params', 'param'], this.$route);

  this.init();
}

//清理差标数据
CLEAR_PROPOSER_EXCESS(state) {
  const { excessData, busInfo } = getDefaultState();
  state.excessData = excessData;
  state.busInfo = busInfo;
}

//异步方法
async init() {
  //浪潮显示通用提示
  if (this.travelBookingId === -1) {
    this.moduleStatus = 'hinter';
    this.hinterInfoType = 'inspur';

    uni.setNavigationBarTitle({title: '提示'});
    
    return;
  }

  //等异步方法执行完再执行后续代码
  //232003获取差旅信息，提取processingCode，travelRequestId
  await this.$store.dispatch('corporate/getTravelBookingInfo', R.pick(['travelBookingId', 'serviceId'], this))
    .then(res => {
      //差标状态码
      this.processingCode = R.path(['processingCode'], res);
      //行程id
      this.travelRequestId = R.path(['travelRequestId'], res);
    });

  //processingCode为相同行程，显示异常
  if (this.processingCode === 'same-trip') {
    this.moduleStatus = 'status';
    this.statusInfo = {
      title: '相同行程舱位，请勿重复提交审批申请',
      desc: '',
      btnArr: [
        {title: '查看原申请单', action: 'goToDetail', outline: false},
        {title: '返回', action: 'goBack', outline: true},
      ],
      bottomDesc: '',
      ...R.pick(['travelRequestId', 'serviceId'], this)
    };
    
    return;
  }

  //processingCode不存在，未开通业务，订单不存在，显示通用提示
  if (['none', 'not-opened-biz', 'booking-not-exist'].indexOf(this.processingCode) > -1) {
    this.moduleStatus = 'hinter';
    this.hinterInfoType = this.processingCode
    
    uni.setNavigationBarTitle({title: '提示'});
    
    return;
  }

  //pid = (serviceId == '0') ? 232005 : 231032;
  //232005国内机票获取差标详情
  //231032获取差标详情(酒店 + 专车 + 高铁)
  //差标详情数据存入state.excessData
  await this.$store.dispatch('corporate/getExcessData', R.pick(['travelBookingId', 'serviceId', 'processingCode'], this));
  
  //超过差标详情
  if ([
    'propose-violation',
    'mandatory-violation',
    'propose-violation-and-submit-for-approval',
    'private-payment-propose-violation-and-submit-for-approval',
    'private-payment-mandatory-violation'
  ].indexOf(this.processingCode) > -1) {
    this.moduleStatus = 'excess';
    //提取path，directDeliveryParam存入state.busInfo
    this.$store.commit('corporate/UPDATE_BUS_INFO', {path: this.path, data: this.directDeliveryParam});
      
    uni.setNavigationBarTitle({title: '已超过差旅标准'});
      
    return;
  }
  
  if (this.processingCode === 'submit-for-approval') {
    //提交差标申请
    this.moduleStatus = 'apply';
    uni.setNavigationBarTitle({title: '提交申请'});
  } else {
    //显示通用提示
    this.moduleStatus = 'hinter';
    this.hinterInfoType = 'error'
    
    uni.setNavigationBarTitle({title: '提示'});
    return;
  }
}

//moduleStatus:excess(差标超标), apply(差标申请), status(存在相同行程), hinter(浪潮/其他通用错误)
//hinterInfoType错误信息类型:
/*{
    error: {
      desc: '抱歉，系统出了一点问题，请反馈企业管理员处理。',
      btnText: '返回',
      imageUrl: iconError
    },
    not-opened-biz: {
      desc: '贵司未开启此业务企业支付预订权限，请联系企业管理员处理。',
      btnText: '返回',
      imageUrl: iconError
    },
    booking-not-exist: {
      desc: '此行程没有审批通过的申请单，请到差旅云提交出差申请',
      btnText: '重新预订',
      imageUrl: iconNotrip
    },
    inspur: {
      desc: '浪潮平台合作企业请于云加app中进行预订操作',
      btnText: '返回',
      imageUrl: iconError
    }
  }
*/
```

### 差标超标信息proExcess, state.excessData
```javascript
...mapState('corporate', {
  statement: state => state.excessData.statement,
  //下拉选超标原因:["出行计划刚确定","原定出行计划变更","临时安排的紧急计划"]
  reasons: state => state.excessData.travelStandardViolationReasons,
  //违规行程详情
  travelTripDetails: state => R.path(['travelTripInfo', 'travelTripDetails'], state.excessData) || [],
  //bus数据(来自其他页面传入参数path和directDeliveryParam)
  busPath: state => R.path(['path'], state.busInfo),
  busParam: state => R.path(['data'], state.busInfo),
  //违规行程选择理由
  pickCauses(state) {
    const travelTripDetails = R.path(['travelTripInfo', 'travelTripDetails'], state.excessData) || [];
    // 两个接口的兼容处理
    const causes = travelTripDetails
      //保留含有travelStandardViolationMsgs
      .filter(v => v.travelStandardViolationMsgs && v.travelStandardViolationMsgs.length)
      .map((o) => {
        const travelTripDetailId = o.id;
        
        return {
          id: travelTripDetailId,
          //this.pickIndexs应该是违规各条目中选择的超标原因index记录(reasons的index)，没有记录则代表未选择原因-1
          pIndex: this.pickIndexs[travelTripDetailId] || -1
        }
      });
          
    return causes;
  },
  //要显示下拉选择超标原因
  showReasonSelector() {
    return [
      'propose-violation',
      'propose-violation-and-submit-for-approval',
      'private-payment-propose-violation-and-submit-for-approval'
      ].indexOf(this.processingCode) > -1 ? true : false;
  }
})

//根据processingCode确定按钮状态
drawBtn() {
  switch (this.processingCode) {
    case 'propose-violation':
      return [{name: '继续预订', action: 'cobook'}];
    case 'propose-violation-and-submit-for-approval':
      return [
        {name: '申请审批', action: 'approve'},
        {name: '个人支付', action: 'pay'},
      ];
    case 'mandatory-violation':
      return [
        {name: '重新预订', action: 'rebook'},
        {name: '个人支付', action: 'pay'}
      ];
    case 'private-payment-propose-violation-and-submit-for-approval':
      return [{name: '申请审批', action: 'approve'}];
    case 'private-payment-mandatory-violation':
      return [{name: '重新预订', action: 'rebook'}];
    default:
      return [];
  }
}

//选择超标原因
onSelectReason(e, travelTripDetail) {
  let pickIndex = e.detail.value;   // index
  let travelTripDetailId = travelTripDetail.id;
 
  //this.pickIndexs = {'2': 0, '1': 2}
  this.pickIndexs = Object.assign({}, this.pickIndexs, {
    [travelTripDetailId]: pickIndex
  })
}

onHandleFooterBtn(action) {
  switch (action) {
    //继续预订
    case 'cobook':
      //提交违规差标原因
      this.handleSubmitViolate().then(() => {
        //国内机票
        if (this.serviceId == '0') {
          this.$router.replace({path: this.busPath, 
            query: {
              param: this.busParam, 
              //违背超标 无需审批 = propose-violation	建议性违规选择原因	开启差标且未开启审批
              tmc: 1
            }
          });
        } else {
          this.$router.replace({path: this.busPath, params: {...this.busParam,tmc: 1}});
        }
      }).catch(error => console.log(error))
      
      break;
    //申请审批
    case 'approve':
      //提交违规差标原因
      this.handleSubmitViolate().then(() => {
        //跳转到差标申请详情页
        this.$router.replace({
          path: '/projects/corporate/pages/proposer/apply',
          query: {
            travelBookingId: this.travelBookingId,
            serviceId: this.serviceId
          }
        });
      }).catch(error => console.log(error))
      
      break;
    //重新预订
    case 'rebook':
      //回退到预订页
      this.$router.back();
      break;
    //个人支付
    case 'pay':
      this.$popup({
        title: '管家提示',
        content: '选择个人支付预定后将不可使用企业账户支付订单，需自行支付后申请报销。',
        showCancelButton: true,
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        confirm: () => {
          //国内机票
          if (this.serviceId == '0') {
            this.$router.replace({
              path: this.busPath,
              query: {param: this.busParam, tmc: 2}
            });
          } else {
            this.$router.replace({
              path: this.busPath,
              params: {
                ...this.busParam,
                //未违规 需审批 = propose-violation-and-submit-for-approval建议性违规并且需提交审批 开启差标、开启审批
                tmc: 2
              }
            })
          }
         }
      });
      
    break;
  }
}

handleSubmitViolate() {
  let allPick = this.pickCauses.every(pickCause => pickCause.pIndex != -1);   // '-1' -1
  
  //检查所有超标项是否都选择了原因
  if (allPick) {
    const pickCauseArr = this.pickCauses.map(pickCause => {
      return {
        travelTripDetailId: pickCause.id,
        content: this.reasons[pickCause.pIndex]
      }
    })

    //232004提交违规差标原因
    return this.submitViolateCbReason({
            serviceId: this.serviceId,
            travelBookingId: this.travelBookingId,
            travelStandardViolationReasons: JSON.stringify(pickCauseArr)      // strange
          });
  } else {
    uni.showToast({title: '请选择超标原因',icon: 'none',duration: 2000,position: 'top'});
 
    return Promise.reject('');
  }
}
```

### 申请审核proApply, state.excessData
根据贵司的差旅规定，您的预订行程需要通过审批才能使用企业支付哦
```javascript
...mapState('corporate', {
  applyStatement: state => state.excessData.applyStatement,
  tripTitle: state => {
    const { excessData } = state;
    const { serviceId } = excessData;

    //国内机票
    if (serviceId === '0') {
      return R.path(['travelTripInfo', 'airLine'], excessData) + ' ' + R.path(['travelTripInfo', 'tripType'], excessData);
    } else {
      //其他业务
      const travelTripDetails =  R.path(['travelTripInfo', 'travelTripDetails'], excessData) || []; 
      
      return R.path(['tripInfo'] ,travelTripDetails[0]);
    }
  },
  trips: state => R.path(['travelTripInfo', 'travelTripDetails'], state.excessData),
})

//提交申请
handleSubmit() {
  //填写申请
  if (!this.textareaVal) {
    this.$notify({
      message: '请填写申请事项',
      // type: 'error',
      duration: 1500
    });
    
    return;
  }

  //(serviceId === '0') ? 232009 : 231031
  //232009违规差标申请去审批(国内机票/国际机票)
  //231031违规差标申请去审批(酒店 + 专车 + 高铁)
  this.submitViolateCbApply({
    serviceId: this.serviceId, 
    travelBookingId: this.travelBookingId, 
    //申请内容
    memo: this.textareaVal
  }).then((data) => {
    console.log(data)
    //跳转到申请提交结果
    this.$router.replace({
      path: '/projects/corporate/pages/proposer/result',
      query: {
        serviceId: this.serviceId,
        travelRequestId: data.travelRequestId
      }
    });
  })
}
```

#### 存在相同行程proStatus
```javascript
//按钮事件处理
resultAction(type) {
  switch (type) {
    //查看原申请单
    case 'goToDetail':
      //跳转到申请人-审批详情
      this.$router.push({
        name: 'proposerDetail',
        query: R.pick(['travelRequestId', 'serviceId'], this.info)
      });
      break;
    //返回
    case 'goBack':
      this.$router.back();
      break;
    //继续申请
    case 'goToSearch':
      this.$router.go(-2)
      break;
  }
}
```

### 浪潮/其他信息提示
```javascript
//hinterInfoType错误信息类型:
{
  error: {
    desc: '抱歉，系统出了一点问题，请反馈企业管理员处理。',
    btnText: '返回',
    imageUrl: iconError
  },
  not-opened-biz: {
    desc: '贵司未开启此业务企业支付预订权限，请联系企业管理员处理。',
    btnText: '返回',
    imageUrl: iconError
  },
  booking-not-exist: {
    desc: '此行程没有审批通过的申请单，请到差旅云提交出差申请',
    btnText: '重新预订',
    imageUrl: iconNotrip
  },
  inspur: {
    desc: '浪潮平台合作企业请于云加app中进行预订操作',
    btnText: '返回',
    imageUrl: iconError
  }
}

handleAction() {
  this.$router.back();
}
```