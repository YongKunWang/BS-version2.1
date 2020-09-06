<template>
  <div class="push-container">
    <a href="javascript:void(0);" @click.prevent="jumpWebPage">
      <dv-border-box-1>
        <div class="location">
          <dv-decoration-9
            style="width:130px;height:130px; color:#fff;font-size:20px;font-weight: 700;"
          >进&nbsp;&nbsp;入</dv-decoration-9>
        </div>
      </dv-border-box-1>
    </a>
  </div>
</template>

<script>
export default {
  name: 'homePush',
  data () {
    return {
      routeUrl: ''
    }
  },
  methods: {
    jumpWebPage () {
      this.$router.push(this.routeUrl)
    }
  },
  mounted () {
    this.routeUrl = this.myroute
  },
  props: {
    myroute: String
  }
}
</script>

<style lang="less" scoped>
.push-container {
  width: 100%;
  height: 100%;
  .location {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
