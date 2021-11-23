import axios from 'axios'
import store from '../../store'

const dataApi = "/getAreaData"

function initData(newData){
  store.commit('CHANGE_TOTAL',newData["count"])
    store.commit('CHANGE_MALE',newData["man"])
    store.commit('CHANGE_FEMALE',newData["woman"])
    
    // 年龄与性别
    let ageDist = {
      'mGender':newData["mGender"],
      'wGender':newData["wGender"],
    }
    store.commit('CHANGE_AGE',ageDist)

    // 婚姻状况
    let marriageObj = {}
    let mMarr = eval(newData["mMarry"])
    let fMarr = eval(newData["wMarry"])
    mMarr.forEach(item => {
      if (item.marry in marriageObj) {
        marriageObj[item.marry] += item.count
      } else {
        marriageObj[item.marry] = item.count
      }
    });
    fMarr.forEach(item => {
      if (item.marry in marriageObj) {
        marriageObj[item.marry] += item.count
      } else {
        marriageObj[item.marry] = item.count
      }
    });

    let marriageDist = []
    for (let key in marriageObj){
      let item={name:key,value:marriageObj[key]}
      marriageDist.unshift(item)
    }

    store.commit('CHANGE_MARRIAGE',marriageDist)
    
    // 户籍地
    let resiDist = []
    for (let key in newData["area"]) {
      resiDist.push({
        name:key,
        value:newData["area"][key]
      })
    }
    store.commit('CHANGE_RESI',resiDist)
}
function getData(){
  axios.get(dataApi).then(
    res => {
      if (res.data.code==200) {
        var newData = res.data.data
        // console.log('res.data.data',newData);
        initData(newData)
      } else {
        console.log('请求出错,错误代码 ',res.msg)
      }
    },

    error => {
      console.log('请求出错',error)
    }
  )
}

export default getData