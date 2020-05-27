### 差标申请详情页
```javascript
onLoad() {
  //接受页面参数
  const { travelBookingId, serviceId } = this.$route.query || {};
  this.travelBookingId = travelBookingId;
  this.serviceId = serviceId;
}
```