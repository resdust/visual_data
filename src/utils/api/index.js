import axios from 'axios'
import store from '../../store'

const dataApi = "/getAreaData"

function initData(){
  axios.get(dataApi).then(
    res => {
      if (res.data.code==200) {
        let resData = res.data.data

        store.commit('changeTotal',resData["count"])
        store.commit('changeMale',resData["man"])
        store.commit('changeFemal',resData["woman"])
        
        // 年龄与性别
        let ageDist = {
          'mGender':resData["mGender"],
          'wGender':resData["wGender"],
        }
        store.commit('changeAge',ageDist)

        // 婚姻状况
        let marriageDist = {}
        let mMarr = eval(resData["mMarry"])
        let fMarr = eval(resData["wMarry"])
        mMarr.forEach(item => {
          if (item in marriageDist) {
            marriageDist[item] += mMarr[item]
          } else {
            marriageDist[item] = mMarr[item]
          }
        });
        fMarr.forEach(item => {
          if (item in marriageDist) {
            marriageDist[item] += fMarr[item]
          } else {
            marriageDist[item] = fMarr[item]
          }
        });
        store.commit('changeMarriage',marriageDist)
        
        // 户籍地
        let resiDist = []
        for (let key in resData["area"]) {
          resiDist.push({
            name:key,
            value:resData["area"][key]
          })
        }
        store.commit('changeResi',resiDist)

      } else {
        console.log('请求出错,错误代码 ',res.msg)
      }
    },

    error => {
      console.log('请求出错',error)
    })
}

export default initData