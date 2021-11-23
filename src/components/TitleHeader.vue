<template>
  <!-- header -->
  <header class="titleheader">
      <h1>{{title}}</h1>
      <div ref="showTime" id="showTime" v-html="nowTime">xxx</div>
  </header> 
</template>

<script>
export default {
  name:"TitleHeader",
  props:['title'],
  data(){
    return {
      nowTime:''
    }
  },
  mounted(){
    setInterval(()=>{
      this.nowTime = this.time()
    },1000)
  },
  methods:{
    padding(num){
      return num < 10 ? '0'+num : num;
    },
    time(){
      var myDate = new Date();
      var myYear = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
      var myMonth = myDate.getMonth()+1; //获取当前月份(0-11,0代表1月)
      var myToday = myDate.getDate(); //获取当前日(1-31)
      var myDay = myDate.getDay(); //获取当前星期X(0-6,0代表星期天)
      var myHour = myDate.getHours(); //获取当前小时数(0-23)
      var myMinute = myDate.getMinutes(); //获取当前分钟数(0-59)
      var mySecond = myDate.getSeconds(); //获取当前秒数(0-59)
      var week = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
      
      var nowTime = myYear+'-'+this.padding(myMonth)+'-'+this.padding(myToday)+'&nbsp;&nbsp;'
      +week[myDay]+'&nbsp;&nbsp;'+this.padding(myHour)+':'+this.padding(myMinute)+':'+this.padding(mySecond);
      
      return nowTime
    }
  }
}
</script>

<style lang="less" scoped>
  header{
    padding: .5rem;
    vertical-align: middle;
    box-shadow: 0 7px 5px -5px cadetblue;
    h1 {
        font-size: 1.5rem;
        line-height: 100%;
        color: #fff;
        text-align: center;
        margin: 0;
    }

    #showTime {
      position: absolute;
      right: 1rem;
      bottom: .5rem;
      line-height: 1rem;
      color: rgba(255, 255, 255, 0.705);
      font-size: .5rem;
    }
  }
</style>