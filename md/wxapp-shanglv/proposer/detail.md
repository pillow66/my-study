### 申请人审核详情
```javascript
onLoad() {
  //接受页面参数
  this.travelRequestId = this.$route.query && this.$route.query.travelRequestId;
  this.serviceId = this.$route.query && this.$route.query.serviceId || '0';

  this.getProposerDetail({
    travelRequestId: this.travelRequestId,
    serviceId: this.serviceId
  }).then(() => this.showPage = true);
}

//TODO:和getApproveDetail一样，考虑合并
getProposerDetail({ commit }, params) {
  let serviceId = R.path(['serviceId'], params);
  let pid = (serviceId === '0') ? 232010 : (serviceId === '68') ? 232012 : 231026;

  //数据存入state.proposerDetail
  return Api[pid](params).then(res => commit('PROPOSER_DETAIL', res));
}

//结合statusInfo，生成动态按钮
drawBtn() {
  const {status, approveManner} = this.statusInfo;

  switch (status) {
    //待审核状态
    case 'apply':
      return [
        {name: '催审批', action: 'urgent'},
        {name: '撤销申请', action: 'repeal'},
      ];
    //以过审状态
    case 'approved':
      if (approveManner === 'approve-after-booking') {
        return [{name: '去预订', action: 'book'}];
      } else {
        return [];
      }
    default:
      return [];
  }
}

//按钮事件处理
handleBtn(action) {
  switch (action) {
    //催审批
    case 'urgent':
      break;
    //撤销申请
    case 'repeal':
      this.$popup({
        title: '管家提示',
        content: '确认要撤销审批申请？',
        showCancelButton: true,
        confirmButtonText: '撤销申请',
        cancelButtonText: '我再想想',
        confirm: () => {
          //232011申请人撤销审核
          this.repealApprove({
            serviceId: this.serviceId,
            travelRequestId: this.travelRequestId
          }).then(res => this.$popup({
            title: '管家提示',
            content: R.path(['bd', 'data'], res),
            //刷新页面
            confirm: () => this.getProposerDetail({
              travelRequestId: this.travelRequestId,
              serviceId: this.serviceId
            })
          }))
        },
       })
      break;
    //去预订
    case 'book':
      break;
  }
}
```
