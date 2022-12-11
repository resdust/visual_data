# visual-data DEMO
大屏动态数据可视化展示代码备份

## 场景
某市已登记的老年人口数据分析与展示
- 数字：总人数、男性、女性
- 年龄-性别分布
- 婚姻情况
- 户籍地分布

## 技术栈
- Echarts
- VueJS 2
- axios

## 控制流程
1. 通过main.js挂载app.vue，在挂起后向**vuex**发起initData的action
  ```javascript
  mounted() {
    this.$store.dispatch('initData')
  }
  ```
1. vuex调用utils/api中的getData，通过**axios**的get请求创建Promise，成功则解析数据包，初始化Vuex的state
2. 初始化方法通过vuex的mutations改变store中的值
3. app.vue中mount MainBox 和 TitleHeader，mainbox先通过flex控制布局，再在每个组件中挂载echarts图表
4. 每个组件绑定从vuex的state获取的数据options来初始化echarts，在初始化成功前显示echarts的loading页面，之后调用`this.myChart.resize()`, 同时对window绑定事件监听器resize，监听到时重新渲染。

## 部署地址
http://xxxx/lyq-visual/

## API
http://xxxx/getAreaData

> {
> "msg":"操作成功",
> "code":200,
> "data":{
  > "area":{"A区":49007,"B区":164,"C区":104,"D区":50,"E区":753,"F区":72,"H区":7,"I区":160},
  > "woman":26137,
  > "mMarry":[{"marry":"丧偶","count":7435},{"marry":"其它","count":224},{"marry":"再婚","count":496},{"marry":"初婚","count":16017},{"marry":"复婚","count":183},{"marry":"已婚","count":1},{"marry":"未婚","count":721},{"marry":"离婚","count":1060}],
  > "wMarry":[{"marry":"丧偶","count":2586},{"marry":"其它","count":251},{"marry":"再婚","count":900},{"marry":"初婚","count":18868},{"marry":"复婚","count":238},{"marry":"未婚","count":860},{"marry":"离婚","count":1138}],
  > "count":50978,
  > "wGender":[13446,7829,3888,970],
  > "man":24841,
  > "mGender":[13395,7388,3274,0]
  > }
> }
> 
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
