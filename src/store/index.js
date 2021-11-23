// 创建Vuex种的store
import Vue from 'vue'
import Vuex from 'vuex'
import getData from '../utils/api'

Vue.use(Vuex)

// 准备actions，用于相应组件中的动作
const actions = {
  initData(){
    getData()
  }
}
// 准备mutations，用于操作数据（state）
const mutations = {
  CHANGE_TOTAL (state, data) {
    state.totalNum = data
  },
  CHANGE_MALE (state, data) {
    state.maleNum = data
  },
  CHANGE_FEMALE (state, data) {
    state.femaleNum = data
  },
  CHANGE_RESI (state, data) {
    state.resiCount = data
  },
  CHANGE_MARRIAGE (state, data) {
    state.marriageCount = data
  },
  CHANGE_AGE (state, data) {
    state.ageCount = data
  },
}
// 准备state，用于存储数据
const state = {
  totalNum : 50978,
  maleNum: 24841,
  femaleNum: 26137,
  resiCount: [
    { value: 49007, name: '琅琊区' },
    { value: 164, name: '来安县' },
    { value: 104, name: '定远县' },
    { value: 50, name: '凤阳县' },
    { value: 753, name: '南谯区' },
    { value: 72, name: '全椒县' },
    { value: 7, name: '天长市' },
    { value: 160, name: '明光市' },
  ],
  marriageCount: [
    { value: 10021, name: '丧偶' },
    { value: 475, name: '其它' },
    { value: 1396, name: '再婚' },
    { value: 1, name: '已婚' },
    { value: 1581, name: '未婚' },
    { value: 2198, name: '离婚' },
    { value: 34885, name: '初婚' },
    { value: 421, name: '复婚' },
  ],
  ageCount:{
    'mGender':[13395,7388,3274,0],
    'wGender':[13446,7829,3888,970]
  }
}

// 创建并导出store
const store = new Vuex.Store({
  actions,
  mutations,
  state
})

export default store