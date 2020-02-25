import Vue from 'vue'
import Router from 'vue-router'
import Photo from './photo'
import Anniversary from './anniversary'
import Note from './note'
import  Video from './video'

Vue.use(Router)

// 需要左方向动画的路由用this.$router.to('****')
Router.prototype.togo = function (path) {
  this.isleft = true
  this.isright = false
  this.push(path)
}
// 需要右方向动画的路由用this.$router.goRight('****')
Router.prototype.goRight = function (path) {
  this.isright = true
  this.isleft = false
  this.push(path)
}
// 需要返回按钮动画的路由用this.$router.goBack()，返回上一个路由
Router.prototype.goBack = function () {
  this.isright = true
  this.isleft = false
  this.go(-1)
}
// 点击浏览器返回按钮执行，此时不需要路由回退
Router.prototype.togoback = function () {
  this.isright = true
  this.isleft = false
}
// 点击浏览器前进按钮执行
Router.prototype.togoin = function () {
  this.isright = false
  this.isleft = true
}

export default new Router({
  routes: [
    ...Photo,
    ...Anniversary,
    ...Note,
    ...Video,
    {
      path: '/',
      name:'Login',
      component: (resolve) => require(['@/views/login'],resolve),
      meta: { needLogin:false, },
    },
    {
      path:'/home',
      name:'Home',
      component:(resolve) => require(['@/views/home'],resolve),
      meta: { needLogin:true,},
    },
    {
      path:'/add',
      name:'Add',
      component:(resolve) => require(['@/views/modules/add'],resolve),
      meta: { needLogin:true,},
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})



