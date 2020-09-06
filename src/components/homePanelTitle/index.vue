<template>
  <div class="panelTitle-container">
    <div class="show-title">{{panelTitleData.title}}</div>
    <div class="show-img">
      <img class="clip" :src="panelTitleData.afterurl" alt />
    </div>
    <div class="panelTitle-footer"></div>
  </div>
</template>

<script>
export default {
  name: 'homePanelTitle',
  data () {
    return {}
  },
  props: {
    panelTitleData: Object
  }
}
</script>

<style lang="less" scoped>
.panelTitle-container {
  position: relative;
  height: 6.4rem;
  border: 1px solid rgba(25, 186, 139, 0.17);
  background: url('../../assets/imgs/home/line.png');
  padding: 0.42rem 0.2rem 0;
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
  .panelTitle-footer {
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
  .show-title {
    background-color: #122443;
    border-radius: 18px;
    position: absolute;
    height: 35px;
    width: 60%;
    top: -15px;
    color: #ffffff;
    font-weight: bold;
    font-size: 16px;
    left: 20%;
    line-height: 35px;
    text-align: center;
    opacity: 0.7;
  }
  .show-img {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    img {
      width: 100%;
      height: auto;
    }
    .clip {
      position: absolute;
      top: -134px;
      left: 0px;
      clip: rect(134px 620px 476px 0px);
    }
  }
}
</style>
