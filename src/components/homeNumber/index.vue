<template>
  <div class="number-container">
    <div class="no-hd">
      <ul>
        <li>{{numberData.warningData}}</li>
        <li>{{numberData.dealData}}</li>
      </ul>
    </div>
    <div class="no-bd">
      <ul>
        <li>污染预警次数</li>
        <li>未处理预警剩余</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homeNumber',
  data () {
    return {

    }
  },
  props: {
    numberData: Object
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/fonts/digit.css";

.number-container {
  width: 100%;
  height: 100%;
  .no-hd {
    position: relative;
    border: 1px solid rgba(25, 186, 139, 0.17);
    &::before {
      position: absolute;
      top: 0;
      left: 0;
      content: '';
      width: 30px;
      height: 10px;
      border-top: 2px solid #02a6b5;
      border-left: 2px solid #02a6b5;
    }
    &::after {
      position: absolute;
      bottom: 0;
      right: 0;
      content: '';
      width: 30px;
      height: 10px;
      border-right: 2px solid #02a6b5;
      border-bottom: 2px solid #02a6b5;
    }
    ul {
      display: flex;
      li {
        position: relative;
        flex: 1;
        line-height: 1rem;
        font-size: 0.875rem;
        color: #ffeb7b;
        text-align: center;
        font-family: 'electronicFont';
        &::after {
          content: '';
          position: absolute;
          top: 20%;
          right: 0;
          height: 50%;
          width: 1px;
          background: rgba(255, 255, 255, 0.2);
        }
      }
    }
  }
  .no-bd {
    ul {
      display: flex;
      li {
        flex: 1;
        text-align: center;
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.225rem;
        height: 0.5rem;
        line-height: 0.5rem;
        padding-top: 0.125rem;
      }
    }
  }
}
</style>
