<template>
  <div class="panel-container">
    <h2>{{monitorData.title}}</h2>
    <i class="dotFlag iconfont bsdot" :class="[monitorData.status? 'normalIcon':'warnIcon']"></i>
    <div class="monitorShow">
      <img class="clip" :src="monitorData.preurl" alt />
    </div>
    <div class="panel-footer"></div>
  </div>
</template>

<script>
export default {
  name: 'homePanel',
  data () {
    return {
    }
  },
  props: {
    monitorData: Object
  }

}
</script>

<style lang="less" scoped>
.panel-container {
  position: relative;
  width: 100%;
  height: 3.9rem;
  border: 1px solid rgba(25, 186, 139, 0.17);
  background: url('../../assets/imgs/home/line.png');
  padding: 0 0.2rem;
  margin-bottom: 0.166667rem;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 10px;
    border-top: 2px solid #02a6b5;
    border-left: 2px solid #02a6b5;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 10px;
    height: 10px;
    border-top: 2px solid #02a6b5;
    border-right: 2px solid #02a6b5;
  }

  .panel-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 10px;
      height: 10px;
      border-bottom: 2px solid #02a6b5;
      border-left: 2px solid #02a6b5;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      right: 0;
      width: 10px;
      height: 10px;
      border-bottom: 2px solid #02a6b5;
      border-right: 2px solid #02a6b5;
    }
  }
  h2 {
    height: 0.333333rem;
    line-height: 0.333333rem;
    text-align: center;
    color: #fff;
    font-size: 0.25rem;
    font-weight: 400;
    // background-color: red;
  }
  .monitorShow {
    height: 3.3rem;
    position: relative;
    // background-color: pink;
    overflow: hidden;
    img {
      width: 100%;
      height: auto;
    }
    .clip {
      position: absolute;
      top: -1.333333rem;
      left: 0;
      clip: rect(80px 354px 280px 0px);
    }
  }
  .dotFlag {
    position: absolute;
    top: -3px;
    right: 5px;
    font-size: 25px;
  }
  .warnIcon {
    color: red;
  }
  .normalIcon {
    color: #89ff6d;
  }
  &:nth-child(3){
    margin-bottom: 0;
  }
}
</style>
