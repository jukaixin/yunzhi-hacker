// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//  配置路由
import router from '@/router/index.js'
import axios from 'axios'

// 引入elementUi组件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入自己的css
import '@/assets/css/index.css'
Vue.use(ElementUI)

// 配置公共axios
Vue.prototype.$http=axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
