<template>
  <div class="ten-container">
    <div class="colum">
      <div class="left-hd">
        <monitor-panel :data="preData"></monitor-panel>
      </div>
      <div class="left-bd">
        <!-- 需要进行修改！ -->
        <!-- <monitor-seamless :listData="warnData"></monitor-seamless> -->
        <monitor-table :warnData="warnData"></monitor-table>
      </div>
    </div>
    <div class="colum">
      <div class="left-hd">
        <monitor-panel :data="afterData"></monitor-panel>
      </div>
      <div class="left-bd">
        <monitor-bar
          :xData11="monitorBar.xAxisData"
          :yData11="monitorBar.yData1"
          :yData22="monitorBar.yData2"
        ></monitor-bar>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'monitorTen',
  data () {
    return {
      preData: {
        title: '原始图像-「大屏监控」',
        url: require('../../assets/imgs/home/4851.jpg')
      },
      afterData: {
        title: '识别图像-「大屏监控」',
        url: require('../../assets/imgs/home/4851.jpg')
      },
      warnData: [
        {
          id: 7,
          date: '05:00:00',
          local: '西门1',
          number: '监控摄像头10',
          isAlert: true,
          alertInfo: '落叶',
          isDeal: false
        },
        {
          id: 6,
          date: '05:00:00',
          local: '西门1',
          number: '监控摄像头10',
          isAlert: true,
          alertInfo: '落叶',
          isDeal: false
        },
        {
          id: 5,
          date: '04:00:00',
          local: '西门1',
          number: '监控摄像头10',
          isAlert: true,
          alertInfo: '油污',
          isDeal: false
        },
        {
          id: 4,
          date: '03:25:00',
          local: '西门1',
          number: '监控摄像头10',
          isAlert: true,
          alertInfo: '油污',
          isDeal: false
        },
        {
          id: 3,
          date: '03:00:00',
          local: '西门1',
          number: '监控摄像头10',
          isAlert: false,
          alertInfo: '无异常',
          isDeal: true
        },
        {
          id: 2,
          date: '02:00:00',
          local: '西门1',
          number: '监控摄像头10',
          isAlert: false,
          alertInfo: '无异常',
          isDeal: true
        },
        {
          id: 1,
          date: '01:00:00',
          local: '西门1',
          number: '监控摄像头10',
          isAlert: false,
          alertInfo: '无异常',
          isDeal: true
        }
      ],
      monitorBar: {
        xAxisData: [
          '01:00',
          '02:00',
          '03:00',
          '04:00',
          '05:00',
          '06:00',
          '07:00',
          '08:00',
          '09:00',
          '10:00',
          '11:00',
          '12:00',
          '13:00',
          '14:00',
          '15:00',
          '16:00',
          '17:00',
          '18:00',
          '19:00',
          '20:00',
          '21:00',
          '22:00',
          '23:00',
          '24:00'
        ],
        yData1: [
          { value: 10, status: '正常', info: '无' },
          { value: 10, status: '正常', info: '无' },
          { value: 10, status: '正常', info: '无' },
          { value: 20, status: '异常', info: '油污' },
          { value: 10, status: '正常', info: '无' },
          { value: 10, status: '正常', info: '无' },
          { value: 10, status: '正常', info: '无' },
          { value: 10, status: '正常', info: '无' },
          { value: 10, status: '正常', info: '无' },
          { value: 20, status: '异常', info: '油污' }
        ],
        yData2: [
          { value: -10, status: '无需处理' },
          { value: -10, status: '无需处理' },
          { value: -10, status: '无需处理' },
          { value: -20, status: '已经处理' },
          { value: -10, status: '无需处理' },
          { value: -10, status: '无需处理' },
          { value: -10, status: '无需处理' },
          { value: -10, status: '无需处理' },
          { value: -10, status: '无需处理' },
          { value: -30, status: '未经处理' }
        ]
      }
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.ten-container {
  width: 100%;
  height: 90%;
  padding: 0.666667rem 0.125rem 0;
  display: flex;
  .colum {
    flex: 1;
    margin-right: 5px;
    &:nth-child(2) {
      margin-left: 5px;
      margin-right: 5px;
    }
  }
  .left-bd {
    width: 100%;
    height: 36%;
  }
}
</style>
