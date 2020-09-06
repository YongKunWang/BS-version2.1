<template>
  <div class="panel-container">
    <div class="panel-title">{{data.title}}</div>
    <div class="panel-img">
      <img class="clip" :src="data.url" alt />
    </div>
    <div class="panel-footer"></div>
  </div>
</template>

<script>
export default {
  name: 'monitorPanel',
  data () {
    return {}
  },
  mounted () {},
  methods: {},
  props: {
    data: Object
  }
}
</script>

<style lang="less" scoped>
.panel-container {
  position: relative;
  height: 7rem;
  border: 1px solid rgba(25, 186, 139, 0.17);
  background: url('../../assets/imgs/home/line.png');
  background-size: 100% 100%;
  padding: 0.5rem 0.1875rem 0.1875rem;
  margin-bottom: 10px;

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
  .panel-title {
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
    opacity: 0.8;
  }
  .panel-img {
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
      top: -2.5rem;
      left: 0;
      clip: rect(2.5rem 11.466667rem 8.75rem 0px);
    }
  }
}
</style>
