export default[
  {
    path:'/home/video',
    name:'Video',
    component:(resolve) => require(['@/views/modules/video/index'],resolve),
    meta: { needLogin:true,},
  }
]
