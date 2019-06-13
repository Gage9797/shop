import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import "./assets/lib/mui/css/mui.min.css"
import "./assets/lib/mui/css/icons-extra.css"
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.prototype.$axios = axios
Vue.use(MintUI)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  //获取用户登录成功后储存的登录标志
  let getFlag = localStorage.getItem("Flag");

  //如果登录标志存在且为isLogin，即用户已登录
  if(getFlag === "isLogin"){

    //设置vuex登录状态为已登录
    store.commit('userStatus',true)
    next()
  
  //如果登录标志不存在，即未登录
  }else{

    //用户想进入需要登录的页面，则定向回登录界面
    if(to.meta.isLogin){
      next({
        path: '/person/login',
      })
    //用户进入无需登录的界面，则跳转继续
    }else{
      next()
    }

  }

});

router.afterEach(route => {
  window.scroll(0, 0);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
