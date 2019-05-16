import Vue from 'vue'
import Router from 'vue-router'
import index from "./views/index"
import Login_1 from "./views/login_1"
import Login_2 from "./views/login_2"
import xq2 from "./views/xq2"
import xq3 from "./views/xq3"
import xq4 from "./views/xq4"
import xq5 from "./views/xq5"
import details from "./views/details"
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/details/:pid',component:details, props:true},
    {path:'/xq5',component:xq5},
    {path:'/xq4',component:xq4},
    {path:'/xq3',component:xq3},
    {path:'/xq2',component:xq2},
    {path:'/login_2',component:Login_2},
    {path:'/login_1',component:Login_1},
    {path:'/index',component:index},
    {path:'/',component:index},
  ]
})