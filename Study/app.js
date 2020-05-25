import vue from 'vue'
import vueRouter from 'vue-router'
import router from './Router/router'
import app from './Component/app.vue'

vue.use(vueRouter)

new vue({
  el: '#app',
  router: router,
  components: {app},
  template: '<app />'
})
