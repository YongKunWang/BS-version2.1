<template>
  <div class="history-container">
    <monitor-header></monitor-header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'History'
}
</script>

<style lang="less" scoped>
.history-container {
  width: 100%;
  height: 100%;
  background: url('../assets/imgs/home/bg.jpg');
  background-size: 100% 100%;
}
</style>
