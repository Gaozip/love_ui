// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
import './assets/iconFont/iconfont.css'

Vue.use(Vant);
Vue.use(Vuex);
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  if (to.meta.needLogin) {
    //这里判断用户是否登录，验证本地存储是否有token
    if (!!window.sessionStorage.getItem("token")) { // 判断当前的token是否存在
      next()
    } else {
      alert('无session，请登录先!')
      next('/')
    }
  } else {
    next() // 确保一定要调用 next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
