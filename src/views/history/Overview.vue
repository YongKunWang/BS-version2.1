<template>
  <div class="container">
    <history-search></history-search>
    <history-body :warnData="warnData"></history-body>
  </div>
</template>

<script>
export default {
  name: 'OverView',
  data () {
    return {
      warnData: [
        {
          id: 7,
          date: '2020-09-01  05:10:00',
          local: '西门1',
          number: '监控摄像头10',
          isAlert: true,
          alertInfo: '油毡',
          isDeal: false
        },
        {
          id: 7,
          date: '2020-09-01  06:10:00',
          local: '西门1',
          number: '监控摄像头10',
          isAlert: true,
          alertInfo: '鸟类',
          isDeal: false
        },
        {
          id: 7,
          date: '2020-09-01  07:10:00',
          local: '西门1',
          number: '监控摄像头10',
          isAlert: true,
          alertInfo: '落叶',
          isDeal: false
        },
        {
          id: 7,
          date: '2020-09-01  08:10:00',
          local: '西门1',
          number: '监控摄像头10',
          isAlert: true,
          alertInfo: '落叶',
          isDeal: false
        },
        {
          id: 7,
          date: '2020-09-01  09:10:00',
          local: '西门1',
          number: '监控摄像头10',
          isAlert: true,
          alertInfo: '黄色油污',
          isDeal: false
        },
        {
          id: 7,
          date: '2020-09-01  10:10:00',
          local: '西门1',
          number: '监控摄像头10',
          isAlert: true,
          alertInfo: '落叶',
          isDeal: false
        },
        {
          id: 7,
          date: '2020-09-02  07:10:00',
          local: '西门1',
          number: '监控摄像头10',
          isAlert: true,
          alertInfo: '鸟类',
          isDeal: false
        },
        {
          id: 7,
          date: '2020-09-03  07:10:00',
          local: '西门1',
          number: '监控摄像头10',
          isAlert: true,
          alertInfo: '落叶',
          isDeal: false
        },
        {
          id: 7,
          date: '2020-09-04  07:10:00',
          local: '西门1',
          number: '监控摄像头10',
          isAlert: true,
          alertInfo: '落叶',
          isDeal: false
        },
        {
          id: 7,
          date: '2020-09-05  07:10:00',
          local: '西门1',
          number: '监控摄像头10',
          isAlert: true,
          alertInfo: '油毡',
          isDeal: false
        },
        {
          id: 7,
          date: '2020-09-06  07:10:00',
          local: '西门1',
          number: '监控摄像头10',
          isAlert: true,
          alertInfo: '黑色油污',
          isDeal: false
        },
        {
          id: 7,
          date: '2020-09-07  07:10:00',
          local: '西门1',
          number: '监控摄像头10',
          isAlert: true,
          alertInfo: '落叶',
          isDeal: false
        },
        {
          id: 7,
          date: '2020-09-08  07:10:00',
          local: '西门1',
          number: '监控摄像头10',
          isAlert: true,
          alertInfo: '黄色油污',
          isDeal: false
        },
        {
          id: 6,
          date: '2020-09-09  07:10:00',
          local: '西门1',
          number: '监控摄像头10',
          isAlert: true,
          alertInfo: '黄色油污',
          isDeal: false
        },
        {
          id: 5,
          date: '2020-09-10  07:10:00',
          local: '西门1',
          number: '监控摄像头10',
          isAlert: true,
          alertInfo: '油污',
          isDeal: false
        },
        {
          id: 4,
          date: '2020-09-01  07:10:00',
          local: '西门1',
          number: '监控摄像头10',
          isAlert: true,
          alertInfo: '油污',
          isDeal: false
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 79%;
}
</style>
