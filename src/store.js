import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    shopList: "",
    orderList: "",
    shopCar: [
      {
        id: 1,
        img: "/images/shops/1.jpg",
        title: "高雅3D水漾修护保湿面膜",
        describe: "全面呵护滋养皮肤，软化和补充水分",
        price: 298,
        num: 1
      }
    ]
  },

  // 获取属性的状态
  getters: {
    //获取登录状态
    isLogin: state => state.isLogin,
  },

  // 设置属性状态
  mutations: {
    //保存登录状态
    userStatus(state, flag) {
      state.isLogin = flag
    },
    //修改shopList的值
    updateShopList(state, obj) {
      state.shopList = obj
    },
    updateOrderList(state, obj) {
      state.orderList = obj
    },
    updateShopCar(state, obj) {
      state.shopCar = obj
    }
  },

  // 应用mutations
  actions: {
    //获取登录状态
    setUser({commit}, flag) {
      commit("userStatus", flag)
    },
  }
})
