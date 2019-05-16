import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'mint-ui/lib/style.css'
Vue.config.productionTip = false
//5: 设置请求的根路径 
//Vue.http.options.root = "http://127.0.0.1/vue_ser/";
//6:全局设置post 时候表音的数据组织格式为 application/x-www-form-urlencoded
//Vue.http.options.emulateJSON = true;
// 导入 MUI 的样式表， 和 Bootstrap 用法没有差别
import './lib/mui/css/mui.css'
// 导入 MUI 的样式表，扩展图标样式，购物车图标
// 还需要加载图标字体文件
import './lib/mui/css/icons-extra.css'
import './assets/base.css'
import 'swiper/dist/css/swiper.css'
import 'swiper/dist/js/swiper.js'
/*
//按需加在mint-ui组件库中一个组件Header
//1.按需引入Header
import {Header,Button,Swipe,SwipeItem,Lazyload} from "mint-ui"
//2.注册Header
//希望Header组件可以像标签直接调用
//标签:Header.name="mt-header"
Vue.component(Header.name,Header);
Vue.component(Button.name,Button);
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);
Vue.use(Lazyload);*/
//完整引入mint-ui组件库
import MintUI from "mint-ui";
Vue.use(MintUI);
import axios from "axios"
axios.defaults.withCredentials=true
Vue.prototype.axios = axios
Vue.filter("datetimeFilter",function(val){
  var now=new Date(val);
  var y=now.getFullYear();
  var m=now.getMonth()+1;
  var d=now.getDate();
  var h=now.getHours();
  var mi=now.getMinutes();
  var s=now.getSeconds();
  m<10&&(m="0"+m);
  d<10&&(d="0"+d);
  return `${y}-${m}-${d} ${h}:${m}:${s}`;
})
new Vue({
  router,
  render: h => h(App),
  data: {
    eventHub: new Vue()
  }
}).$mount('#app')