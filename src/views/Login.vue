<!--
  登录界面的实现
  实现时间：2020年09月22日10:21:21
  修改时间以及内容：
-->
<template>
  <!-- 最外面的容器命名规则：组件名称-container -->
  <div class="login-container">
    <!-- 登录表单 -->
    <login-form></login-form>
    <!--粒子效果-->
    <div id="show-particles">
      <vue-particles
        color="#6495ED"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#6495ED"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.6"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      ></vue-particles>
    </div>
    <!-- 背景 -->
    <bg-login></bg-login>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style lang="less" scoped>
.login-container {
  width: 100%;
  height: 100%;
  position: relative;
  // 粒子效果，这个也是整个屏幕
  #show-particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
  }
}
</style>
