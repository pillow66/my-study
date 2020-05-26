### 审批人-审批详情 statusInfo，journeyInfo， person， rules，travelTripOrder，approveInfo
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
  
  //获取详情后，根据详情中的statusInfo，journeyInfo， person， rules，travelTripOrder，approveInfo数据展示页面
  //详情内容展示控件module/comDetail.vue
}
  
// 审批人 获取审批订单详情
getApproveDetail({ commit }, params) {
  let serviceId = R.path(['serviceId'], params);
  let pid = (serviceId === '0') ? 232010 : (serviceId === '68') ? 232012 : 231026;
  
  //232010国内机票申请审批详情
  //232012国际机票申请审批详情
  //申请审批详情 (酒店 + 专车 + 高铁)
  return Api[pid](params).then(res => commit('APPROVE_DETAIL', res));
  
  //申请审批详情，数据存入state.approveDetail
}
```

### 行程信息卡片 statusInfo,journeyInfo
```javascript
//判定当前行程的类型(1,2都是机票)
journeyTempType() {
  let status = 0;
  //this.statusInfo包含行程订单状态等
  let approveManner = R.path(["statusInfo", "approveManner"], this);
  let serviceId = R.path(["statusInfo", "serviceId"], this);
  
  switch (true) {
    //航班国内+国际机票，状态approve-after-booking(下单未支付)
    case approveManner === "approve-after-booking" && (serviceId === "0" || serviceId === "68"):
      status = 1;
      break;
    //航班国内+国际机票，状态approve-after-pay(下单已支付)
    case (approveManner === "approve-after-pay" || approveManner === "approve-before-pay") &&
          (serviceId === "0" || serviceId === "68"):
      status = 2;
      break;
  }
  
  return status;
}

//针对航班的行程信息格式化机票数据，其他业务数据原样返回
journeyInfoF() {
  return transjourneyInfo({
    journeyInfo: this.journeyInfo,
    //journeyTempType：1使用JourneyFlight1(航班)，2使用JourneyFlight2(航班)，其他使用JourneyGeneral(其他业务通用)
    journeyTempType: this.journeyTempType
  });
}

//行程是否有变更(感觉已废弃)
isChangeOrder() {
  return !R.isNil(this.preJourneyInfo) && !R.isEmpty(this.preJourneyInfo);
}

//原行程信息，preJourneyInfo属性视乎去掉了(感觉已废弃)???
preJourneyInfoF() {
  return this.isChangeOrder? transjourneyInfo({
            journeyInfo: this.preJourneyInfo,
            journeyTempType: this.journeyTempType
          }) : null;
}

function transjourneyInfo(opts) {
    let journeyInfo = R.clone(opts.journeyInfo);
    //取行程详细数组
    let travelTripDetails = R.path(["journeyInfo", "travelTripDetails"], opts);
  
    //journeyTempType用于指定行程卡片样式类型
    switch (opts.journeyTempType) {
      case 1:
        //筛选取tripContent字段出来（"tripContent": "6月26日 周三 出发 商务舱"）
        journeyInfo.detailsType1 = travelTripDetails ? travelTripDetails.map(v => ({tripContent: v.tripContent})) : [];
        break;
      case 2:
        //更复杂的行程信息展示(连续换程)
        journeyInfo.detailsType2 = travelTripDetails
          ? travelTripDetails.map((v, k) => {
            let arrTimestamp = v.arrDate + " " + v.arrTime;
            let depTimestamp = v.depDate + " " + v.depTime;
            let isGapJourney = !(k > 0 && v.tripNum === travelTripDetails[k - 1].tripNum) || R.isNil(v.tripNum);
            return {
              tripTag: v.tripTag,
              title: v.tripLine,
              subtitle: `${dt.formatLocalDate(depTimestamp, true)} ${dt.formatWeek(depTimestamp, "周")}`,
              arrTime: [dt.formatLocalDate(arrTimestamp, true), v.arrTime],
              depTime: [dt.formatLocalDate(depTimestamp, true), v.depTime],
              airCorpName: v.airCorpName,
              arrAirport: v.arrAirport,
              depAirport: v.depAirport,
              classLevel: v.classLevel,
              flightNo: v.flightNo,
              stopCity: v.stopCity,
              stoppingTime: v.stoppingTime,
              isGapJourney: isGapJourney,
              duration: dt.caculateDuration(depTimestamp, arrTimestamp, true),
              airwaysIcon: `https://cdn1.133.cn/ticket/airline/image${v.airCorpCode && v.airCorpCode.toLowerCase()}.png`
            };
          })
          : [];
        break;
    }

    return journeyInfo;
  }
```

### 人员信息 person
```html
<div class="mcd-person-item">
  <text class="mcd-person-text">预订人：</text>
  <text class="mcd-person-text">{{ person.bookedBy || '' }}</text>
</div>
<div class="mcd-person-item" v-if="person.approvers">
  <text class="mcd-person-text">审批人：</text>
  <text class="mcd-person-text">{{ person.approvers }}</text>
</div>
<div class="mcd-person-item" v-if="travelTripOrder && travelTripOrder.passengers">
  <text class="mcd-person-text">出行人：</text>
  <text class="mcd-person-text">{{ travelTripOrder.passengers }}</text>
</div>
```

### 违规信息卡片 rules
```javascript
//存在违规数据
showRules() {
  return this.rules.length === 0 ? false : true;
}
```
```html
<div v-for="(item, i) in rules" :key="i">
  <!-- 国内机票显示 -->
  <template v-if="statusInfo.serviceId === '0'">
    <div class="mcd-rule-city">
      <text class="mcd-rule-city-text">{{item.tripLine}}</text>
      <text class="mcd-rule-city-text">{{item.tripTag}}</text>
    </div>
  </template>
          
  <div class="mcd-rule-content">
    <div class="mcd-rule-content-item">
      <text class="mcd-rule-content-text">超标条例：</text>
      <text class="mcd-rule-content-text">{{item.content}}</text>
    </div>
    <div class="mcd-rule-content-item">
       <text class="mcd-rule-content-text">超标原因：</text>
       <text class="mcd-rule-content-text mcd-rule-reason">{{item.reason}}</text>
    </div>
  </div>

  <div class="mcd-rule-divide-line" v-if="i < normalizedRules.length - 1"></div>
</div>
```

### 审批结果卡片 statusInfo,approveInfo
```javascript
//true已经审核，存在审核结果
//待审核: this.statusInfo.status == 'apply'
showApproveResult() {
  return this.statusInfo.status !== "apply";
}
```
```html
<div class="mcd-card-header">
  <text class="mcd-card-header-text">审批结果</text>
  <text class="mcd-card-header-text">{{approveInfo.time}}</text>
</div>
<div class="mcd-approve">
  <text class="mcd-approve-text" v-if="approveInfo.approver">操作者：{{ approveInfo.approver }}</text>
  <text class="mcd-approve-text">{{approveInfo.remark}}</text>
</div>
```

### 订单信息卡片 travelTripOrder
```html
<div class="mcd-card-header">订单信息</div>
<div class="mcd-order">
  <text class="mcd-order-text">{{travelTripOrder.orderId}}</text>
  <text class="mcd-order-text">{{travelTripOrder.orderPrice}}</text>
</div>
```

### 待审批/待支付剩余时间 statusInfo
```javascript
showTimeText() {
  let {status, deadline, approveManner, payDeadline} = this.statusInfo || {};
  let text = "";
  if (status === "apply") text = `审批剩余时间：${deadline}`;
  if (status === "approved" && approveManner === "approve-after-booking") text = `支付剩余时间：${payDeadline}`;
  
  return text;
}
```

### 审核按钮 statusInfo.status==='apply'显示
```javascript
//type:refuse(拒绝),approved(通过)
openSlPopoup(type) {
  //弹窗填理由
  this.showSlPopup = true;
  this.apporveType = type;
}

//审核
submitApproval(opts) {
  let travelRequestId = this.travelRequestId;
  let apporveType = this.apporveType;
  this.apporveType = null;
  this.showSlPopup = false;
  
  let params = {
    travelRequestId,
    serviceId: this.serviceId,
    //审核类型：refuse,approved
    status: apporveType,
    //理由
    remark: opts.remark
  };
  
  //231005
  this.submitApproveOrder(params).catch(() => {}).then(()=>{
    //审核完刷新页面信息
    return this.getApproveDetail({travelRequestId: this.travelRequestId, serviceId: this.serviceId});
  })
}
```

