<template>
  <div class="bar-container">
    <dv-border-box-7 class="bar-content">
      <div class="colum">
        <div class="row-colum">
          <el-card shadow="hover">
            <div class="title">预警状态</div>
            <div class="content">正常</div>
          </el-card>
        </div>
        <div class="row-colum">
          <el-card shadow="hover">
            <div class="title">预警状态</div>
            <div class="content">正常</div>
          </el-card>
        </div>
        <div class="row-colum">
          <el-card shadow="hover">
            <div class="title">预警状态</div>
            <div class="content warning">异常</div>
          </el-card>
        </div>
      </div>
      <div class="colum">
        <div class="row-colum">
          <el-card shadow="hover">
            <div class="title">预警状态</div>
            <div class="content">正常</div>
          </el-card>
        </div>
        <div class="row-colum">
          <el-card shadow="hover">
            <div class="title">预警状态</div>
            <div class="content">正常</div>
          </el-card>
        </div>
        <div class="row-colum">
          <el-card shadow="hover">
            <div class="title">预警状态</div>
            <div class="content warning">异常</div>
          </el-card>
        </div>
      </div>
    </dv-border-box-7>
  </div>
</template>

<script>
export default {
  name: 'homeBar'
}
</script>

<style lang="less" scoped>
.bar-container {
  width: 100%;
  height: 100%;
  .bar-content {
    display: flex;
    height: 100%;
    padding: 10px 5px 0;
    .colum {
      flex: 1;
      height: 50%;
      display: flex;
      .row-colum {
        flex: 1;
        padding: 5px;
        // border: 1px solid red;
      }
    }
  }
  .title {
    font-size: 15px;
  }
  .content {
    color:#00A8FE;
    font-size: 18px;
    font-weight: 600;
  }
  .warning {
    color: red;
  }
}
</style>
<style lang="less" scoped>
.el-card {
  text-align: center;
  color: #fff;
  background: #22284a;
  border-radius: 6px;
}
/deep/ .el-card__body {
  padding: 10px;
}
</style>
