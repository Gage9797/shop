import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home.vue'
import shopCar from './views/shopCar.vue'
import orderList from './views/orderList.vue'
import person from './views/person.vue'
import index from './components/home/index.vue'
import food from './components/home/food.vue'
import baihuo from './components/home/baihuo.vue'
import clean from './components/home/clean.vue'
import fresh from './components/home/fresh.vue'
import dress from './components/home/dress.vue'
import shopDetail from './views/shopDetail.vue'
import allList from './components/orderList/allList.vue'
import waitToComment from './components/orderList/waitToComment.vue'
import waitToDeliver from './components/orderList/waitToDeliver.vue'
import waitToPay from './components/orderList/waitToPay.vue'
import waitToSign from './components/orderList/waitToSign.vue'
import login from './components/service/login.vue'
import register from './components/service/register.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      redirect: '/home/index',
      children: [
        { path: '/home/index', component: index },
        { path: '/home/food', component: food },
        { path: '/home/baihuo', component: baihuo },
        { path: '/home/clean', component: clean },
        { path: '/home/fresh', component: fresh },
        { path: '/home/dress', component: dress },
      ]
    },
    {
      path: '/shopCar',
      name: 'shopCar',
      component: shopCar
    },
    {
      path: '/orderList',
      name: 'orderList',
      component: orderList,
      redirect: '/orderList/allList',
      children: [
        { path: '/orderList/allList', component: allList },
        { path: '/orderList/waitToComment', component: waitToComment },
        { path: '/orderList/waitToDeliver', component: waitToDeliver },
        { path: '/orderList/waitToPay', component:  waitToPay },
        { path: '/orderList/waitToSign', component: waitToSign },
      ]
    },
    {
      path: '/home/shopDetail/:id',
      name: 'shopDetail',
      component: shopDetail,
    }, 
    {
      path: '/person',
      name: 'person',
      component: person,
      meta: {isLogin: true},
    },
    {
      path: '/person/login',
      name: 'login',
      component: login
    },
    {
      path: '/person/register',
      name: 'register',
      component: register
    },

  ],
  linkActiveClass: 'mui-active'
})
