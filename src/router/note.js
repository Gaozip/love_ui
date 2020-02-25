export default[
  {
    path:'/home/note',
    name:'Note',
    component:(resolve) => require(['@/views/modules/note/index'],resolve),
    meta: { needLogin:true,},
  }
]
