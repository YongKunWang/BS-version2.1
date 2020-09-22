<template>
  <div class="body-container">
    <div class="colum">
      <el-card class="box-card1">
        <el-table
          :data="warnData"
          max-height="585"
          style="width: 100%"
          :stripe="false"
          :border="false"
          align="center"
        >
          <el-table-column type="index" align="center" label="序号"></el-table-column>
          <el-table-column prop="date" label="时间" align="center" min-width="120%"></el-table-column>
          <el-table-column label="是否报警" align="center" min-width="60%">
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
                <el-button
                  type="danger"
                  icon="el-icon-setting"
                  size="small"
                  @click="ignoreByUser(scope.row)"
                ></el-button>
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
      </el-card>
    </div>
    <div class="colum">
      <el-card class="box-card2">
        <div id="pieChart"></div>
      </el-card>
      <el-card class="box-card3">
        <div id="scatterChart"></div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'historyBody',
  props: {
    warnData: Array
  },
  data () {
    return {
      option: ''
    }
  },
  methods: {
    drawChart1 () {
      let myChart = this.$echarts.init(document.getElementById('pieChart'))
      let option = {
        title: {
          text: '异常场景分析',
          subtext: '',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['黑色油污', '黄色油污', '落叶', '油毡', '鸟类']
        },
        series: [
          {
            name: '异常场景',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              { value: 10, name: '黑色油污' },
              { value: 11, name: '黄色油污' },
              { value: 20, name: '落叶' },
              { value: 10, name: '油毡' },
              { value: 30, name: '鸟类' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
      myChart.setOption(option, true)
      window.addEventListener('resize', () => {
        myChart.resize()
      })
    },
    drawChart2 () {
      let myChart = this.$echarts.init(document.getElementById('scatterChart'))
      let option = {
        title: {
          text: '异常统计分析',
          subtext: '',
          left: 'center'
        },
        // backgroundColor: '#fff',
        grid: {
          left: '12%',
          top: '5%',
          bottom: '12%',
          right: '8%'
        },
        xAxis: {
          data: ['2020-09-01', '2020-09-02', '2020-09-03', '2020-09-04', '2020-09-05', '2020-09-06', '2020-09-07', '2020-09-08', '2020-09-09', '2020-09-10'],
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(255, 129, 109, 0.1)',
              width: 1 // 这里是为了突出显示加上的
            }
          },
          axisLabel: {
            textStyle: {
              color: '#999',
              fontSize: 12
            }
          }
        },
        yAxis: [{
          splitNumber: 2,
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(255, 129, 109, 0.1)',
              width: 1 // 这里是为了突出显示加上的
            }
          },
          axisLabel: {
            textStyle: {
              color: '#999'
            }
          },
          dataZoom: [
            {
              start: 0,
              end: 80,
              type: 'inside'
            }
          ],
          splitArea: {
            areaStyle: {
              color: 'rgba(255,255,255,.5)'
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255, 129, 109, 0.1)',
              width: 0.5,
              type: 'dashed'
            }
          }
        }],
        series: [{
          name: 'hill',
          type: 'pictorialBar',
          barCategoryGap: '0%',
          symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
          label: {
            show: true,
            position: 'top',
            distance: 15,
            color: '#DB5E6A',
            fontWeight: 'bolder',
            fontSize: 20
          },
          itemStyle: {
            normal: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0,
                  color: 'rgba(232, 94, 106, .8)' //  0%  处的颜色
                },
                {
                  offset: 1,
                  color: 'rgba(232, 94, 106, .1)' //  100%  处的颜色
                }
                ],
                global: false //  缺省为  false
              }
            },
            emphasis: {
              opacity: 1
            }
          },
          data: [10, 2, 0, 5, 0, 1, 2, 1, 3, 0],
          z: 10
        }]
      }
      myChart.setOption(option, true)
      window.addEventListener('resize', () => {
        myChart.resize()
      })
    }

  },
  mounted () {
    this.drawChart1()
    this.drawChart2()
  }
}
</script>

<style lang="less" scoped>
.body-container {
  margin: 5px 5px 0;
  height: 79%;
  display: flex;
  .colum {
    flex: 1;
  }
  .box-card1 {
    margin-right: 3px;
    .warnIcon {
      font-size: 20px;
      color: red;
      font-weight: bold;
    }
  }
  .box-card2,
  .box-card3 {
    margin-left: 3px;
    height: 310px;
    width: 700px;
  }
  .box-card3 {
    margin-top: 5px;
  }
  #pieChart {
    width: 100%;
    height: 300px;
    // background-color: red;
  }
  #scatterChart {
    width: 100%;
    height: 300px;
  }
}
</style>
