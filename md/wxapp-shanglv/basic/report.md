### 各种统计图表
```javascript
onShow() {
  //根据选择日期获取统计数据画图(折线图，柱状图， 列表图)
  //Promise.all[]
  this.$store.dispatch('corporate/getReportData', { monthToQuery: this.pickerValue });
}

getReportData({ commit, state }, params) {
  //BASIC_CORPID前置业务存在storage中的审批人id
  let corpId = state.corpId || uni.getStorageSync('BASIC_CORPID') || '';

  //企业每天消费报表
  let p231008 = Api[231008](R.mergeAll([{ corpId }, params]));
  //企业部门月消费报表
  let p231009 = Api[231009](R.mergeAll([{ corpId }, params]));
  //企业业务月消费报表
  let p231010 = Api[231010](R.mergeAll([{ corpId }, params]));

  return Promise.all([p231008, p231009, p231010]).then(res => {
    let reportDaily = R.path(['bd', 'data', 'dailyTravelCostDetails'], res[0]);
    let reportDep = R.path(['bd', 'data', 'departTravelCostDetails'], res[1]);
    let reportBiz = R.path(['bd', 'data', 'basedOnBizTravelCostDetails'], res[2]);

    commit('REPORT_DAILY', reportDaily);
    commit('REPORT_DEP', reportDep);
    commit('REPORT_BIZ', reportBiz);

    return true;
  })
}
```
