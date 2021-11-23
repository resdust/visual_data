<template>
  <!-- 老人大数字 -->
  <div class="no">
      <div class="no-hd">
          <ul>
              <li v-cloak>{{this.$store.state.totalNum}}</li>
              <li v-cloak>{{this.$store.state.maleNum}}</li>
              <li v-cloak>{{this.$store.state.femaleNum}}</li>
          </ul>
      </div>
      <div class="no-bd">
          <ul>
              <li>琅琊区老年人口总数</li>
              <li>琅琊区男性老人数</li>
              <li>琅琊区女性老人数</li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
  name:"DataNumber",
}
</script>

<style lang="less" scoped>

@font-face {
    font-family: electronicFont;
    src: url('../assets/fonts/DS-DIGIT.TTF');
}

//中央大数字模块
.no ul {
  list-style: none;
}

.v-clock {
  display: none;
}

.no {
    background-color: rgba(101, 132, 226, 0.1);
    padding: .2rem;
    margin-bottom: .5rem;

    .no-hd {
        position: relative;
        border: 1px solid rgba(25, 186, 139, 0.17);
        ul {
            display: flex;
            li {
                position: relative;
                flex: 1;
                line-height: 2.5rem;
                font-size: 2.5rem;
                color: #ffeb7b;
                text-align: center;
                font-family: electronicFont;
                &:first-child::after {
                    content: '';
                    position: absolute;
                    top: 25%;
                    right: 0;
                    height: 50%;
                    width: 1px;
                    background-color: rgba(255, 255, 255, 0.3);
                }
                &:nth-child(2)::after {
                    content: '';
                    position: absolute;
                    top: 25%;
                    right: 0;
                    height: 50%;
                    width: 1px;
                    background-color: rgba(255, 255, 255, 0.3);
                }

            }
        }

        &::before {
            position: absolute;
            top: 0;
            left: 0;
            width: .375rem;
            height: .125rem;
            border-top: 2px solid #02a6b5;
            border-left: 2px solid #02a6b5;
            content: '';
          }
      
          &::after {
            position: absolute;
            bottom: 0;
            right: 0;
            width: .375rem;
            height: .125rem;
            border-bottom: 2px solid #02a6b5;
            border-right: 2px solid #02a6b5;
            content: '';
          }
    }

    .no-bd {
        ul {
            display: flex;
            li {
            flex: 1;
            text-align: center;
            color: rgba(255, 255, 255, 0.7);
            font-size: 100%;
            height: 1rem;
            line-height: 100%;
            padding-top: .125rem;
            }
        }
    }
}
</style>