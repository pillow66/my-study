### 我的差旅标准
```javascript
onLoad() {
  //页面传入参数
  let serviceId = this.serviceId = R.path(['query', 'serviceId'], this.$route);
  let cityCodeOfBooked = R.path(['query', 'cityCodeOfBooked'], this.$route);
  let params = {};

  if (serviceId) params.serviceId = serviceId;
  if(cityCodeOfBooked) params.cityCodeOfBooked = cityCodeOfBooked;

  //获取差标信息
  //232006
  Api[232006](params).then(res => {
    let standards = R.path(['bd', 'data', 'travelStandards'], res);

    //standards是数组 && standards[0]有travelStandardGroups属性，则为true是新展示类型？？？
    this.isNewType = (Object.prototype.toString.call(standards).slice(8, -1) === 'Array' && 
    R.path(['travelStandardGroups'], standards[0])) ? true : false;
    this.standards = standards;
  });
}
```
```html
<template v-if="isNewType">
  <div class="pbc-card" v-for="(itemForRoot, indexForRoot) in standards" :key="indexForRoot">
    <div v-for="(itemForGroup, indexForGroup) in itemForRoot.travelStandardGroups" :key="indexForGroup">
      <div class="pbc-card-item" v-for="(rule, ruleIndex) in itemForGroup.rules" :key="ruleIndex"></div>
    </div>
  </div>
</template>

<template v-else>
  <div class="pbc-card" v-for="(standard, index) in standards" :key="index">
    <div class="pbc-card-item" v-for="(rule, ruleIndex) in standard.rules" :key="ruleIndex">
      <div class="pbc-card-right" v-html="nl2br(rule.content)"></div>
    </div>
  </div>
</template>
```
```javascript
nl2br(str) {
  return str.replace(/(\r\n|\n\r|\r|\n)/g, '<br>');
}
```