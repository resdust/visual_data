<template>
  <div class="chart" ref="cultureInfo">{{msg}}</div>
</template>

<script>
  import * as echarts from 'echarts';
  import styles from '../styles'
  import store from '../store'

  var thisData = store.state.resiCount;
  console.log('resiCount',thisData);

  export default {
    name:"ResidentChart",
    props:['msg'],
    data(){
      return{
        resiData:this.$store.state.resiCount,
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
            formatter: function(name){
              console.log('resi',name);
              console.log('func',thisData);
              //通过name获取到数组对象中的单个对象
              let singleData = thisData.filter(function(item){
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
              name: '户籍所在地分布',
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
                { value: 49007, name: '琅琊区' },
                { value: 164, name: '来安县' },
                { value: 104, name: '定远县' },
                { value: 50, name: '凤阳县' },
                { value: 753, name: '南谯区' },
                { value: 72, name: '全椒县' },
                { value: 7, name: '天长市' },
                { value: 160, name: '明光市' },
              ],
            },
          ],
        }
      }
    },
    mounted(){
      // 刷新数据
      thisData = store.state.distCount;
      console.log('mounted',thisData);

      const myChart = echarts.init(this.$refs.cultureInfo)
      myChart.setOption(this.option)

      // myChart.showLoading()

      window.addEventListener('resize', function () {
        myChart.resize()
      })
    }
}
</script>