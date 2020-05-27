### 审批申请提交成功
```javascript
data() {
  return {
    statusInfo: {
      travelRequestId: null,
      serviceId: null,
      title: '审批申请提交成功！',
      desc: '本次购票需要公司管理员审批，通过后即可预订出行日期内符合申请单的产品',
      btnArr: [
        {title: '查看详情', action: 'goToDetail', outline: false},
        {title: '继续申请', action: 'goToSearch', outline: true},
      ],
      bottomDesc: '企业服务-我的申请中可查看审批单进度'
    }
  }
}

onShow() {
  //页面参数可以不带，此处是为了使用pro-status控件强行统一格式化数据
  this.statusInfo.serviceId = R.path(['query', 'serviceId'], this.$route);
  this.statusInfo.travelRequestId = R.path(['query', 'travelRequestId'], this.$route);
}
```