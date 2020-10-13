// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
//创建了一个插件
import myHttpServer from "./plugins/http";

import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import  './assets/css/reset.css'

//适用vue插件
Vue.use(ElementUI);
Vue.use(myHttpServer)

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  components: {
    App
  },
  template: '<App/>'
})
