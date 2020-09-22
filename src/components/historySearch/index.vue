<template>
  <div class="history-container">
    <el-card class="box-card">
      <el-row :gutter="10">
        <el-col :span="6">
          <span class="iconfont bsjiankong"></span>
          <span>&nbsp;&nbsp;监控详情：&nbsp;&nbsp;</span>
          <template>
            <el-select v-model="monitorValue" placeholder="请选择监控编号">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </template>
        </el-col>
        <el-col :span="12">
          <template>
            <span></span>
            <span class="iconfont bsjiankong"></span>
            <span>&nbsp;&nbsp;选择时间段：&nbsp;&nbsp;</span>
            <el-date-picker
              v-model="dataValue"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            ></el-date-picker>
            <span style="display:inline-block;width:20px"></span>
            <el-button type="primary">开始查询</el-button>
          </template>
        </el-col>
        <el-col :span="3" :offset="3">
          <el-button type="info" plain>打印</el-button>
          <el-button type="info" plain>导出</el-button>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'historySearch',
  data () {
    return {
      options: [
        {
          value: '10',
          label: '西门-10号口'
        },
        {
          value: '11',
          label: '西门-11号口'
        },
        {
          value: '12',
          label: '西门-12号口'
        },
        {
          value: '13',
          label: '东门-10号口'
        },
        {
          value: '14',
          label: '东门-11号口'
        },
        {
          value: '15',
          label: '东门-12号口'
        }
      ],
      monitorValue: '',
      dataValue: ''
    }
  }
}
</script>

<style lang="less" scoped>
.history-container {
  margin: 0 5px;
  .box-card {
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
}
</style>
