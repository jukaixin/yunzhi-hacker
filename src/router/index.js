import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/home/Home'
import Model from '@/components/model/Model'
//  创建router实例，配置路由
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    // 默认路由，重定向到 /home
    { path: '/', redirect: '/home' },
    {
      path: '/home',
      component: Home,
      // 配置该路由的子路由：
      children: [
        { path: '/model', component: Model }
      ]
    }
  ]
})
export default router
