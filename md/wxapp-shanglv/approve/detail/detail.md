### 审批人-审批详情
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

### travelTripInfo信息格式化生成行程卡片
```javascript
//针对航班的行程信息，不是航班的此computed属性为
journeyInfoF() {
  return transjourneyInfo({
    journeyInfo: this.journeyInfo,
    //journeyTempType：1使用JourneyFlight1(航班)，2使用JourneyFlight2(航班)，其他使用JourneyGeneral(其他业务通用)
    journeyTempType: this.journeyTempType
  });
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
        //更复杂的行程信息展示
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
