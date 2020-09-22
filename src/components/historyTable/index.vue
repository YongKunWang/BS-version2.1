<template>
  <div class="table-container">
    <div class="table-content">
      <div class="table-mask">
        <el-table
          :data="warnData"
          max-height="227"
          style="width: 100%"
          :stripe="false"
          :border="false"
          align="center"
        >
          <el-table-column type="index" align="center" label="序号"></el-table-column>
          <el-table-column prop="date" label="时间" align="center"></el-table-column>
          <el-table-column label="是否报警" align="center">
            <template slot-scope="scope">
              <i v-if="scope.row.isAlert" class="el-icon-message-solid warnIcon"></i>
              <i v-else class="el-icon-message-solid normalIcon"></i>
            </template>
          </el-table-column>
          <el-table-column prop="alertInfo" label="报警详情" align="center"></el-table-column>
          <el-table-column prop="alertManage" label="详情管理" align="center">
            <template slot-scope="scope">
              <el-tooltip class="item" effect="dark" content="详情处理" placement="top">
                <el-button
                  type="primary"
                  icon="el-icon-edit"
                  size="small"
                  @click="dealByUser(scope.row)"
                ></el-button>
              </el-tooltip>
              <el-tooltip class="item" effect="dark" content="忽略警报" placement="top">
                <el-button type="danger" icon="el-icon-setting" size="small" @click="ignoreByUser(scope.row)"></el-button>
              </el-tooltip>
            </template>
          </el-table-column>
          <el-table-column prop="isDeal" label="事件处理" align="center">
            <template slot-scope="scope">
              <el-tag
                v-if="(scope.row.isAlert === false) && (scope.row.isDeal === true)"
                type="success"
                effect="dark"
              >正常情况</el-tag>
              <el-tag
                v-else-if="(scope.row.isAlert === true) && (scope.row.isDeal === true)"
                type="success"
                effect="dark"
              >已经处理</el-tag>
              <el-tag
                v-else-if="(scope.row.isAlert === true) && (scope.row.isDeal === false)"
                type="danger"
                effect="dark"
              >未经处理</el-tag>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="table-footer"></div>
    <!-- 显示dialog -->
    <monitor-dialog
      :dialogTableVisibleFlag="dialogTableVisibleFlag"
      :warnDealDate="warnDealDate"
      @tableEditEvent="receiveFlag"
    ></monitor-dialog>
  </div>
</template>

<script>
export default {
  name: 'historyTable',
  props: {
    warnData: Array
  },
  data () {
    return {
      dialogTableVisibleFlag: false,
      warnDealDate: ''
    }
  },
  methods: {
    // 详情处理的按键函数
    dealByUser (warnData) {
      // 如果未发生报警
      // 详情处理的未报警方法
      if (warnData.isAlert === false) {
        // 当按下详情处理时给一个message消息提示
        this.$message.success('监控无异常，无需任何操作')
      }
      // 如果发生报警
      // 详情处理的报警方法
      if (warnData.isAlert === true) {
        this.dialogTableVisibleFlag = !this.dialogTableVisibleFlag
        this.warnDealDate = warnData
      }
      // console.log('获得的数据：')
      // console.log(this.warnDealDate)
    },
    // 忽略的未报警方法
    async ignoreByUser (warnData) {
      // console.log('点击')
      // 如果未发生报警
      // 忽略处理的未报警方法
      if (warnData.isAlert === false) {
        // 当按下详情处理时给一个message消息提示
        this.$message.error('监控无异常，无需忽略')
      }
      if (warnData.isAlert === true) {
        // 当按下详情处理时给一个message消息提示
        const confirmResult = await this.$confirm(
          '本日内将不再预警此类型，是否继续?',
          '提示',
          {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }
        ).catch(err => err)
        // 如果用户确认删除，则返回值为字符串 confirm
        // 如果用户取消了删除，则返回值为字符串 cancel
        // console.log(confirmResult)
        if (confirmResult !== 'confirm') {
          return this.$message.info('未忽略预警信息')
        }
        warnData.isDeal = true
        return this.$message.info('以忽略预警信息')
      }
    },
    receiveFlag: function (value) {
      this.dialogTableVisibleFlag = value
    }
  }
}
</script>

<style lang="less" scoped>
.table-container {
  position: relative;
  height: 4.1rem;
  border: 1px solid rgba(25, 186, 139, 0.2);
  background: url('../../assets/imgs/home/line.png');
  background-size: 100% 100%;
  padding: 0.2rem 0.2rem 0.1rem;
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

  .table-footer {
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
  .table-content {
    position: relative;
    width: 100%;
    height: 100%;
    // background-color: red;
    overflow: hidden;
    .table-mask {
      position: relative;
      width: 103%;
      height: 100%;
      // background-color: #fff;
    }
  }
  .warnIcon {
    font-size: 20px;
    color: red;
    font-weight: bold;
  }
  .normalIcon {
    font-size: 20px;
    color: #55a532;
    font-weight: bold;
  }
}
</style>
<style lang="less" scoped>
.el-table {
  position: absolute;
  color: #fff;
  /deep/ th {
    color: #fff;
    padding: 5px 0;
    background-color: #0f2040;
  }
  /deep/ td {
    padding: 5px 0;
    border: none;
  }
  /deep/ tr {
    background-color: #043c50;
    &:nth-child(2n) {
      background-color: #043c60;
    }
  }
  /deep/tbody tr:hover > td {
    background-color: transparent;
  }
}
</style>
