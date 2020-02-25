export default[
  {
    path:'/home/anniversary',
    name:'Anniversary',
    component:(resolve) => require(['@/views/modules/anniversary/index'],resolve),
    meta: { needLogin:true,},
  }
]
