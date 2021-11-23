<template>
  <!-- body box -->
  <section class = "mainbox">
      <!-- 第一栏列 -->
      <div id="total1" class="column">
          <DataNumber class='element' id="datanumber"/>
          <div class="element panel" id="infochart">
            <AgeChart msg="年龄性别分布情况"/>
            <div class="panel-footer"></div>
          </div>
      </div>
      <!-- 第二列 -->
      <div id="total2" class="column">
          <div class="element panel">
              <ResidentChart msg="户籍地所在地分布"/>
              <div class="panel-footer"></div>
          </div>
          <div class="element panel">
              <MarriageChart msg="婚姻状况" />
              <div class="panel-footer"></div>
          </div>
      </div>
  </section>
</template>

<script>
  import DataNumber from './DataNumber.vue'
  import AgeChart from './AgeChart.vue'
  import ResidentChart from './ResidentChart.vue'
  import MarriageChart from './MarriageChart.vue'

  export default {
    name:"MainBox",
    components : {
      DataNumber,
      AgeChart,
      ResidentChart,
      MarriageChart
    }
  }
</script>

<style lang="less" scoped>
  //body box
  .mainbox {
    display: flex;
    justify-content: space-around;
    min-width: 1024px;
    max-width: 4096px;

    /* margin: 0 1rem 0 1rem; */
    padding: 0.125rem 0.6rem 0.125rem 0.6rem;
    .column {
        text-align: center;
        flex: 1 1 0;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        padding: 0 10px;
    }

    #datanumber{
      flex: 2;
    }
    #infochart{
      flex: 8;
    }
  }

    //所有带边框区块，包含边框
  .panel {
      position: relative;
      padding: 0 0.1875rem 0.2rem;
      border: 1px solid rgba(25, 186, 139, 0.17);
      margin-bottom: 0.1875rem;
      background: rgba(255, 255, 255, 0.03);
      &::before {
          position: absolute;
          top: 0;
          left: 0;
          width: 10px;
          height: 10px;
          border-left: 2px solid #02a6b5;
          border-top: 2px solid #02a6b5;
          content: '';
      }
      &::after {
          position: absolute;
          top: 0;
          right: 0;
          width: 10px;
          height: 10px;
          border-right: 2px solid #02a6b5;
          border-top: 2px solid #02a6b5;
          content: '';
      }
      .panel-footer {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          &::before {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 10px;
              height: 10px;
              border-left: 2px solid #02a6b5;
              border-bottom: 2px solid #02a6b5;
              content: '';
          }
          &::after {
              position: absolute;
              bottom: 0;
              right: 0;
              width: 10px;
              height: 10px;
              border-right: 2px solid #02a6b5;
              border-bottom: 2px solid #02a6b5;
              content: '';
          }
      }
      h2 {
          height: .6rem;
          color: #fff;
          line-height: .6rem;
          text-align: center;
          font-size: 0.25rem;
          font-weight: 400;
      }
      .chart{
          min-height: 2rem;
          height: 100%;
      }
  }

  // 所有组件
  .element {
    width: 100%; 
    flex: 1 1 0;
  }

</style>