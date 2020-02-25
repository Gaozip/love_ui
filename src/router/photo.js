/**
 * 相册
 */
export default[
  {
    path:'/home/photo',
    name:'Photo',
    component:(resolve) => require(['@/views/modules/photo/index'],resolve),
    meta: { needLogin:true,},
  }
]
