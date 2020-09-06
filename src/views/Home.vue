<template>
  <!-- 大屏幕 -->
  <div class="home-container">
    <!-- 头部 -->
    <home-header></home-header>
    <!-- 监控大屏 -->
    <div class="monitor-container">
      <!-- 左边位置 -->
      <div class="colum">
        <home-panel
          v-for="monitorData in monitorDataLeft"
          :key="monitorData.id"
          :monitorData="monitorData"
        ></home-panel>
      </div>
      <!-- 中间位置 -->
      <div class="colum">
        <div class="box">
          <div class="box-hd">
            <home-number :numberData="numberData"></home-number>
          </div>
          <div class="box-md">
            <home-panel-title :panelTitleData="panelTitleData"></home-panel-title>
          </div>
          <div class="box-bd">
            <div class="box-bd-left">
              <home-bar></home-bar>
            </div>
            <div class="box-bd-right">
              <home-push :myroute="myroute"></home-push>
            </div>
          </div>
        </div>
      </div>
      <!-- 右边位置 -->
      <div class="colum">
        <home-panel
          v-for="monitorData in monitorDataRight"
          :key="monitorData.id"
          :monitorData="monitorData"
        ></home-panel>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      monitorDataLeft: [
        {
          id: 10,
          title: '西门 - 10号口监控详情',
          // 要注意：asset的文件需要require
          preurl: require('../assets/imgs/home/4851.jpg'),
          status: true
        },
        {
          id: 11,
          title: '西门 - 11号口监控详情',
          // 要注意：asset的文件需要require
          preurl: require('../assets/imgs/home/4851.jpg'),
          status: true
        },
        {
          id: 12,
          title: '西门 - 12号口监控详情',
          // 要注意：asset的文件需要require
          preurl: require('../assets/imgs/home/4851.jpg'),
          status: false
        }
      ],
      monitorDataRight: [
        {
          id: 10,
          title: '西门 - 10号口监控详情',
          // 要注意：asset的文件需要require
          preurl: require('../assets/imgs/home/4851.jpg'),
          status: true
        },
        {
          id: 11,
          title: '西门 - 11号口监控详情',
          // 要注意：asset的文件需要require
          preurl: require('../assets/imgs/home/4851.jpg'),
          status: true
        },
        {
          id: 12,
          title: '西门 - 12号口监控详情',
          // 要注意：asset的文件需要require
          preurl: require('../assets/imgs/home/4851.jpg'),
          status: false
        }
      ],
      numberData: {
        warningData: '000012',
        dealData: '000010'
      },
      panelTitleData: {
        title: '大屏监控111',
        afterurl: require('../assets/imgs/home/4851.jpg')
      },
      myroute: './monitor'
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  width: 100%;
  height: 100%;
  background: url('../assets/imgs/home/bg.jpg');
  background-size: 100% 100%;
}
.monitor-container {
  position: relative;
  width: 100%;
  height: 90%;
  padding: 0 0.166667rem 0;

  display: flex;
  .colum {
    flex: 3;
    &:nth-child(2) {
      flex: 5;
      margin: 0 0.083333rem;
    }
  }

  .box {
    width: 100%;
    height: 100%;
    .box-hd {
      width: 100%;
      height: auto;
      background: rgba(101, 132, 226, 0.1);
      padding: 0.2rem;
    }
    .box-md {
      margin-top: 0.5rem;
      width: 100%;
      height: 6.4rem;
    }
    .box-bd {
      position: relative;
      width: 100%;
      height: 3.1rem;
      text-align: center;
      padding: 0;
      margin: 5px 0 0;
      display: flex;
      .box-bd-left {
        flex: 2;
        margin-right: 5px;
      }
      .box-bd-right {
        flex: 1;
        position: relative;
      }
    }
  }
}
</style>
