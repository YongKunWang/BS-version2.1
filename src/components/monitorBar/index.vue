<template>
  <div class="bar-container">
    <div id="bar-content"></div>
    <div class="bar-footer"></div>
  </div>
</template>

<script>
export default {
  name: 'monitorBar',
  props: {
    xData11: Array,
    yData11: Array,
    yData22: Array
  },
  data () {
    return {
      // option: null,
      xData: this.xData11,
      yData1: this.yData11,
      yData2: this.yData22
    }
  },
  methods: {
    drawChart () {
      // console.log(this.yDta11)
      let myChart = this.$echarts.init(document.getElementById('bar-content'))
      let option = {
        color: ['#2f89cf', '#FF9F7F'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          formatter: function (param) {
            // console.log(param)
            var item1 = param[0]
            var item2 = param[1]
            var res = item1.axisValue + '<br />' + item1.marker + item1.seriesName + ' : ' + item1.data.status + '<br />' + item1.marker + '异常信息 : ' + item1.data.info + '<br />'
            res += item2.marker + item2.seriesName + ' : ' + item2.data.status + '<br />'

            return res
          }
        },
        // 修改图表的大小
        grid: {
          left: '1%',
          top: '10px',
          right: '0%',
          bottom: '4%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: this.xData,
          axisTick: {
            alignWithLabel: true
          },
          // 修改刻度标签 相关样式
          axisLabel: {
            color: 'rgba(255,255,255,.6) ',
            fontSize: '12',
            formatter: '{value} 时'
          },
          // 不显示x坐标轴的样式
          axisLine: {
            show: false
          }
        }],
        yAxis: [
          {
            type: 'value',
            // 修改刻度标签 相关样式
            axisLabel: {
              color: 'rgba(255,255,255,.6) ',
              fontSize: 12,
              show: true,
              formatter: function (value) {
                if (value === 10) { return '正常情况' } else if (value === 20) { return '异常预警' } else if (value === -10) { return '无需处理' } else if (value === -20) { return '已经处理' } else if (value === -30) { return '未经处理' } else { return null }
              }

            },
            // y轴的线条改为了 2像素
            axisLine: {
              lineStyle: {
                color: 'rgba(255,255,255,.1)',
                width: 2
              }
            },
            // y轴分割线的颜色
            splitLine: {
              lineStyle: {
                color: 'rgba(255,255,255,.1)'
              }
            }
          }
        ],
        dataZoom: [
          {
            start: 0,
            end: 80,
            type: 'inside'
          }
        ],
        series: [{
          name: '预警',
          type: 'line',
          smooth: true,
          stack: 'one',
          barWidth: '35%',
          label: {
            normal: {
              show: false,
              position: 'top'
            }
          },
          itemStyle: {
          // 修改柱子圆角
            barBorderRadius: 3
          },
          data: this.yData1
        }, {
          name: '处理',
          type: 'bar',
          stack: 'one',
          barWidth: '35%',
          label: {
            normal: {
              show: false,
              position: 'bottom'
            }
          },
          itemStyle: {
          // 修改柱子圆角
            barBorderRadius: 3
          },
          data: this.yData2
        }]
      }

      myChart.setOption(option, true)
      window.addEventListener('resize', () => {
        myChart.resize()
      })
    }
  },
  mounted () {
    this.drawChart()
  }
}
</script>

<style lang="less" scoped>
.bar-container {
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

  .bar-footer {
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
  #bar-content {
    width: 100%;
    height: 100%;
    // background-color: #fff;
  }
}
</style>
