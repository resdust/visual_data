<template>
  <div class="chart" ref="oldAgeGenderInfo">年龄性别</div>
</template>

<script>
  import * as echarts from 'echarts';
  import styles from '../utils/styles'
  
  export default{
    name:"AgeChart",
    props:['msg'],
    data(){
      return {
        option : {
          title: {
            text: this.msg,
            textStyle: styles.titleStyle.textStyle,
            bottom: '5%',
            left: 'center',
          },
          tooltip: {
            trigger: 'axis',
          },
          legend: {
            textStyle: styles.labelStyle.textStyle,
            right: '10%',
            top: '10%',
            orient: 'vertical',
            itemStyle: styles.myItemStyle.itemStyle,
          },
          color: styles.themeColor,
          grid: {
            top: '10%',
            left: '10%',
            right: '10%',
            bottom: '20%',
            containLabel: true,
            borderColor: '#012f4a',
          },
          xAxis: {
            type: 'category',
            boundaryGap: true,
            data: ['60-69', '70-79', '80-89', '90以上'],
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              color: '#fff',
              fontSize: '1rem',
            },
          },
          yAxis: {
            type: 'value',
            axisTick: {
              show: false,
            },
            axisLabel: {
              color: '#fff',
              fontSize: '1rem',
              showMinLabel: false,
              formatter: '{value} 人',
            },
            splitLine: styles.splitLineStyle,
          },
          series: [
            {
              name: '男',
              type: 'bar',
              // smooth: true,
              barWidth: '30%',
              stack: 'Total',
              data: this.$store.state.ageCount['mGender'],
              label:{
                show:true,
                formatter:'{c}',
                color: '#eee',
                fontWight: 'bold',
                position: 'right'
              },
              itemStyle: styles.myItemStyle.itemStyle,
            },
            {
              name: '女',
              type: 'bar',
              // smooth: true,
              barWidth: '30%',
              stack: 'Total',
              data: this.$store.state.ageCount['wGender'],
              label:{
                show:true,
                formatter:'{c}',
                color: '#eee',
                fontWight: 'bold',
                position: 'right',
                offset: [0, -8]
              },
              itemStyle: styles.myItemStyle.itemStyle,
            },
          ],
        },
        myChart: {}
      }
    },
    computed:{
      newOption(){
        return [
          {
            name: '男',
            data: this.$store.state.ageCount['mGender'],
          },
          {
            name: '女',
            data: this.$store.state.ageCount['wGender'],
          },
        ]
      }
    },
    mounted(){
      this.myChart = echarts.init(this.$refs.oldAgeGenderInfo)
      this.myChart.setOption(this.option)

      this.myChart.showLoading()

      this.myChart.resize()
      window.addEventListener('resize', function () {
        this.myChart.resize()
      })
    },
    watch: {
      newOption:{
        handler(){
          this.reRender()
        },
        deep:true
      }
    },
    methods:{
      reRender(){
        this.myChart.hideLoading()
        this.myChart.setOption({series:this.newOption})
      }
    }
  }

</script>

<style lang="less" scoped>
  .chart{
    height:100%;
    width:100%;
  }
</style>