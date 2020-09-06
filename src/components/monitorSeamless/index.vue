<!--
  由于seamless的遮盖效果，会出现按键点击不灵敏的情况！
-->
<template>
  <div class="seamless-container">
    <div class="title-table">
      <table border="0" cellpadding="0" cellspacing="0" class="table-header">
        <tbody>
          <tr>
            <td width="10%">
              <span>序 号</span>
            </td>
            <td width="16.66%">
              <span>日 期</span>
            </td>
            <td width="16.66%">
              <span>是否预警</span>
            </td>
            <td width="16.66%">
              <span>预警详情</span>
            </td>
            <td width="23.22%">
              <span>详情管理</span>
            </td>
            <td width="16.66%">
              <span>事件状态</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <vue-seamless-scroll :data="listData" class="seamless-warp" :class-option="optionSetting">
      <table border="0" cellpadding="0" cellspacing="0" class="item-table">
        <tbody>
          <tr v-for="(item, index) in listData" :key="index">
            <td width="10%">
              <span>{{item.id}}</span>
            </td>
            <td width="16.66%">
              <span>{{item.date}}</span>
            </td>
            <td width="16.66%">
              <!-- <span>{{item.isAlert}}</span> -->
              <span v-if="item.isAlert" class="iconfont bsalarm warnIcon"></span>
              <span v-else class="iconfont bsalarm normalIcon"></span>
            </td>
            <td width="16.66%">
              <span>{{item.alertInfo}}</span>
            </td>
            <td width="23.22%">
              <!-- <span>用户处理</span> -->
              <el-tooltip class="item" effect="dark" content="详情处理" placement="top">
                <el-button type="primary" icon="el-icon-edit" size="small" @click.native="dialogTabShow" ></el-button>
              </el-tooltip>
              <el-tooltip class="item" effect="dark" content="忽略警报" placement="top">
                <el-button type="danger" icon="el-icon-setting" size="small"></el-button>
              </el-tooltip>
            </td>
            <td width="16.66%">
              <el-tag
                v-if="(item.isAlert === false) && (item.isDeal === true)"
                type="success"
                effect="dark"
              >正常情况</el-tag>
              <el-tag
                v-else-if="(item.isAlert === true) && (item.isDeal === true)"
                type="success"
                effect="dark"
              >已经处理</el-tag>
              <el-tag
                v-else-if="(item.isAlert === true) && (item.isDeal === false)"
                type="danger"
                effect="dark"
              >未经处理</el-tag>
            </td>
          </tr>
        </tbody>
      </table>
    </vue-seamless-scroll>
    <div class="seamless-footer"></div>
     <!-- 显示dialog -->
    <monitor-dialog :dialogTableVisibleFlag="dialogTableVisibleFlag" @tableEditEvent="receiveFlag"></monitor-dialog>
  </div>
</template>

<script>
import vueSeamlessScroll from 'vue-seamless-scroll'
export default {
  name: 'monitorSeamless',
  components: {
    vueSeamlessScroll
  },
  data () {
    return {
      dialogTableVisibleFlag: false
    }
  },
  props: {
    listData: Array
  },
  computed: {
    optionSetting () {
      return {
        step: 0.2, // 数值越大速度滚动越快
        limitMoveNum: 6, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        // autoPlay: false,
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000 // 单步运动停止的时间(默认值1000ms)
      }
    }
  },
  methods: {
    dialogTabShow () {
      this.dialogTableVisibleFlag = !this.dialogTableVisibleFlag
      console.log('edit : ' + this.dialogTableVisibleFlag)
    },
    receiveFlag: function (value) {
      this.dialogTableVisibleFlag = value
    }
  }
}
</script>

<style lang="less" scoped>
.seamless-container {
  position: relative;
  height: 4.1rem;
  border: 1px solid rgba(25, 186, 139, 0.2);
  background: url('../../assets/imgs/home/line.png');
  background-size: 100% 100%;
  padding: 0.1rem 0.2rem 0;
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

  .seamless-footer {
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
  .title-table {
    width: 100%;
    height: 25px;
    font-size: 14px;
    font-weight: normal;
    color: #e2e5ff;
    .table-header {
      width: 100%;
      text-align: center;
    }
  }
  .seamless-warp {
    position: relative;
    height: 3.7rem;
    overflow: hidden;
    // z-index: 999;
    // pointer-events: none;
  }
  .item-table {
    // position: relative;
    // z-index: 200;
    width: 100%;
    height: 20px;
    color: #fff;
    text-align: center;
    overflow: hidden;
    tr {
      td {
        padding: 5px 10px;
        font-size: 14px;
        opacity: 1;
      }
      &:nth-child(even) {
        background-color: #043c50;
      }
      &:nth-child(odd) {
        background-color: #0b2732;
      }
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
