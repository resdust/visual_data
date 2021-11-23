<template>
  <div id="app">
    <TitleHeader title="琅琊区老年人口数据统计"/>
    <MainBox />
  </div>
</template>

<script>
import MainBox from './components/MainBox.vue'
import TitleHeader from './components/TitleHeader.vue'

export default {
  name: 'App',
  components: {
    MainBox,
    TitleHeader
  },
  mounted(){
    this.$store.dispatch('initData')
  }
}
</script>

<style lang="less">
  body {
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #eee;

    height: 100%;
    width: 100%;
    position: absolute;
    background: url(./assets/bg1.png) no-repeat top center;
    line-height: 1.15;
    background-size: 100%;

    .titleheader {
      position: absolute;
      width:100%;
      right: 0;
      height: 2rem;
    }
    .mainbox {
      position: absolute;
      // width:100%;
      right: 0;
      left: 0;
      top:3.5rem;
      bottom:0;
    }
  }
</style>
