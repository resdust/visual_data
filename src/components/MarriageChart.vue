<template>
  <div class="chart" ref="marriageInfo">{{msg}}</div>
</template>

<script>
  import * as echarts from 'echarts';
  import styles from '../utils/styles'

  export default {
    name:"MarriageChart",
    props:['msg'],
    data(){
      return{
        option: {
          title: {
            text: this.msg,
            bottom: '5%',
            left: '40%',
            textStyle: styles.titleStyle.textStyle,
          },
          color: styles.themeColor,
                    tooltip: {
            trigger: 'item',
            show: true,
            formatter: '{b}:{c}人({d}%)'
          },
          legend: {
            show: true,
            formatter: (name)=>{
              //通过name获取到数组对象中的单个对象
              let singleData = this.newOption.filter(function(item){
                return item.name == name
              })
              return  name + ' | ' + singleData[0].value + '人';
            },
            icon: 'circle',
            orient: 'vertical',
            align: 'left',
            left: '10%',
            top: '10%',
            itemGap: 1,
            itemStyle: styles.myItemStyle.itemStyle,

            textStyle: styles.labelStyle.textStyle,
          },
          series: [
            {
              name: '户籍地分布',
              type: 'pie',
              top: '-5%',
              left: '30%',
              radius: ['25%', '65%'],
              avoidLabelOverlap: false,
              itemStyle: styles.myItemStyle.itemStyle,

              // roseType: 'radius',
              label: {
                show: false,
                position: 'outside',
                alignTo: 'edge',
                edgeDistance: '2%',
                fontSize: '0.17rem',
                color: 'rgba(255,255,255,0.8)',
                // color: 'inherit',
                formatter: '{b}\n{d}%',
              },
              emphasis: {
                label: {
                  show: false,
                  fontWeight: 'bold',
                },
              },
              labelLine: {
                show: true,
                length2: '0',
              },
              data: [
                { value: 7435, name: '丧偶' },
                { value: 224, name: '其它' },
                { value: 496, name: '再婚' },
                { value: 1, name: '已婚' },
                { value: 721, name: '未婚' },
                { value: 1060, name: '离婚' },
              ],
            },
          ],
        },
        myChart:{}
      }
    },
    computed:{
      newOption(){
        return this.$store.state.marriageCount
      }
    },
    watch:{
      newOption:{
        handler(){
          this.reRender()
        },
        deep: true
      }
    },
    methods:{
      reRender(){
        this.myChart.hideLoading()
        this.myChart.setOption({series:
          [{data:this.newOption}]
          })
      }
    },
    mounted(){
      this.myChart = echarts.init(this.$refs.marriageInfo)
      this.myChart.setOption(this.option)

      this.myChart.showLoading()

      this.myChart.resize()
      window.addEventListener('resize', function () {
        this.myChart.resize()
      })
    }
}
</script>