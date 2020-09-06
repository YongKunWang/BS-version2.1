<template>
  <header class="monitor-header">
    <div class="colum">
      <div class="sub-colum"></div>
      <div class="sub-colum">
        <el-menu
          mode="horizontal"
          background-color="#030928"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-menu-item index="/home">
            <span class="iconfont bsDots"></span>
            <span>&nbsp;&nbsp;数据概览</span>
          </el-menu-item>
          <el-submenu index="./10">
            <template slot="title">
              <span class="iconfont bsjiankong"></span>
              <span>&nbsp;&nbsp;监控详情</span>
            </template>
            <el-menu-item index="./10">
              <span class="iconfont bsjiankong"></span>
              <span>&nbsp;&nbsp;10号口监控</span>
            </el-menu-item>
            <el-menu-item index="./11">
              <span class="iconfont bsjiankong"></span>
              <span>&nbsp;&nbsp;11号口监控</span>
            </el-menu-item>
            <el-menu-item index="12">
              <span class="iconfont bsjiankong"></span>
              <span>&nbsp;&nbsp;12号口监控</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
      <div class="sub-colum"></div>
    </div>
    <div class="colum">
      <div class="logo">
        <h2>
          <strong>油污监测管理服务平台</strong>
        </h2>
        <p>当前时间：{{date | formatDateTime}}</p>
      </div>
    </div>
    <div class="colum">
      <div class="sub-colum"></div>
      <div class="sub-colum">
        <el-menu
          mode="horizontal"
          background-color="#030928"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="10">
            <template slot="title">
              <span class="iconfont bslishishuju1"></span>
              <span>&nbsp;&nbsp;历史数据</span>
            </template>
            <el-menu-item index="10">
              <span class="iconfont bsjiankong"></span>
              <span>&nbsp;&nbsp;10号口数据</span>
            </el-menu-item>
            <el-menu-item index="11">
              <span class="iconfont bsjiankong"></span>
              <span>&nbsp;&nbsp;11号口数据</span>
            </el-menu-item>
            <el-menu-item index="12">
              <span class="iconfont bsjiankong"></span>
              <span>&nbsp;&nbsp;12号口数据</span>
            </el-menu-item>
          </el-submenu>
          <el-menu-item index="1">
            <span class="iconfont bsyonghuzhongxin"></span>
            <span>&nbsp;&nbsp;用户中心</span>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="sub-colum"></div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'monitorHeader',
  data () {
    return {
      date: new Date()
    }
  },
  mounted () {
    var that = this
    this.timer = setInterval(() => {
      that.date = new Date() // 修改数据date
    }, 1000)
  },
  beforeDestroy () {
    if (this.timer) {
      clearInterval(this.timer)
    }
  },
  methods: {
    backMain () {
      this.$router.push('/main')
    }
  },
  filters: {
    formatDateTime (value) {
      const date = new Date(value)
      const y = date.getFullYear()
      let MM = date.getMonth() + 1
      MM = MM < 10 ? '0' + MM : MM
      let d = date.getDate()
      d = d < 10 ? '0' + d : d
      let h = date.getHours()
      h = h < 10 ? '0' + h : h
      let m = date.getMinutes()
      m = m < 10 ? '0' + m : m
      let s = date.getSeconds()
      s = s < 10 ? '0' + s : s
      return y + '年' + MM + '月' + d + '日' + ' ' + h + ':' + m + ':' + s
    }
  }
}
</script>

<style lang="less" scoped>
.monitor-header {
  display: flex;
  background-color: #030829;
  height: 1.333333rem;
  color: #fff;
  font-size: 14px;
  text-align: center;
  .colum {
    flex: 1;
  }
  .logo {
    width: 100%;
    height: 100%;
    background: url('../../assets/imgs/monitor/logoBg.png');
    background-size: 100% 100%;
    text-align: center;
    padding-top: 15px;
    p {
      font-size: 0.25rem;
      color: rgba(255, 255, 255, 0.7);
      text-align: center;
    }
  }
  .colum:nth-child(2n + 1) {
    display: flex;
    .sub-colum {
      flex: 1;
      &:nth-child(2) {
        flex: 3;
      }
    }
  }
}
</style>
<style lang="less" scoped>
.el-menu {
  border-bottom: none;
}
.el-menu--horizontal > .el-menu-item {
  height: 1.333333rem;
  line-height: 1.333333rem;
}
/deep/ .el-menu--horizontal > .el-submenu .el-submenu__title {
  height: 1.333333rem;
  line-height: 1.333333rem;
}
.el-menu-item {
  font-size: 16px;
  font-weight: 700;
}
/deep/ .el-submenu__title {
  font-size: 16px;
  font-weight: 700;
}
</style>
