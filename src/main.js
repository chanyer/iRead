// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import MintUI from 'mint-ui'
import util from 'assets/js/util'
import filters from './filters'

import '../static/css/reset.css'
import 'mint-ui/lib/style.css'
import '../static/fonts/iconfont.css'

Vue.config.productionTip = false

// 引入自定义插件
Vue.use(util)
// 引入mint-ui
Vue.use(MintUI)
// 引入全局过滤器
filters(Vue)

// 封装ajax请求
const ERR_OK = 0
Vue.prototype.$ajax = function(obj) {
  let that = this
  axios({
    method: obj.method || 'get',
    url: obj.url
  }).then((res) => {
    if (res.data.errno === ERR_OK) {
      let thatSuccess = obj.success.bind(that)
      thatSuccess(res)
    }  
  })
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
