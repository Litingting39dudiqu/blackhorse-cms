import Vue from 'vue'
import App from './App'
import router from './router'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)


import './assets/mui/css/mui.css'
import './assets/mui/css/icons-extra.css'

//引入store里面的vuex文件
import store from "./store"

import VuePreview from "vue-preview";

Vue.use(VuePreview)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  store
})
