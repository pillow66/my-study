import vueRouter from 'vue-router'

const demo = () => import('../Component/Demo/index')

const routerConfig = {
  routes: [
    {
      path: '/demo',
      component: demo
    }
  ]
}

const router = new vueRouter(routerConfig)

export default router
