<template>
  <div>
    <!--   异常情况下的dialog-->
    <!--   详情dialog-->
    <el-dialog title="报警详情管理" :visible.sync="dialogTableVisible" width="50%" @close="warnInfoDealFormClosed">
      <el-form
        :inline="true"
        label-position="right"
        label-width="120px"
        :model="warnDealDateForm"
        :rules="warnDealDateFormRules"
        ref="warnInfoDealRef"
      >
        <el-form-item label="报警编号:">
          <el-input v-model="warnDealDateForm.warnDataId" disabled></el-input>
        </el-form-item>
        <el-form-item label="处理人员:" prop="userDeal">
          <el-input v-model="warnDealDateForm.userDeal" style="width: 219px" placeholder="请输入处理人姓名"></el-input>
        </el-form-item>

        <el-form-item label="报警时间:">
          <el-input v-model="warnDealDateForm.warnDataDate" disabled></el-input>
        </el-form-item>
        <el-form-item label="开始时间:" prop="dealStartTime">
          <el-date-picker
            v-model="warnDealDateForm.dealStartTime"
            type="datetime"
            placeholder="请选择报警处理开始时间"
            align="right"
            :picker-options="pickerOptions"
          ></el-date-picker>
        </el-form-item>

        <el-form-item label="报警地点:">
          <el-input v-model="warnDealDateForm.warnLocal" disabled></el-input>
        </el-form-item>
        <el-form-item label="结束时间:" prop="dealEndTime">
          <el-date-picker
            v-model="warnDealDateForm.dealEndTime"
            type="datetime"
            placeholder="请选择处理预结束时间"
            align="right"
            :picker-options="pickerOptions"
          ></el-date-picker>
        </el-form-item>

        <el-form-item label="监控编号:">
          <el-input v-model="warnDealDateForm.warnNumber" disabled></el-input>
        </el-form-item>
        <el-form-item label="处理状态:" prop="dealStatus">
          <el-select
            v-model="warnDealDateForm.dealStatus"
            placeholder="请选择报警处理状态"
            style="width: 219px"
          >
            <el-option :value="false" label="未经处理"></el-option>
            <el-option :value="true" label="已经处理"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="报警信息:">
          <el-input v-model="warnDealDateForm.warnInfo" disabled></el-input>
        </el-form-item>
        <el-form-item label="备注信息:" prop="dealRemark">
          <el-input type="textarea" v-model="warnDealDateForm.dealRemark" style="width: 219px"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogTableVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogTableVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'monitorDialog',
  props: {
    dialogTableVisibleFlag: Boolean,
    warnDealDate: {}
  },
  data () {
    return {
      dialogTableVisible: false,
      // 遇到报警的时的用户表单数据
      warnDealDateForm: {
        warnDataId: '',
        warnDataDate: '',
        warnLocal: '',
        warnNumber: '',
        warnInfo: '',

        // 处理人
        userDeal: '',
        // 处理时间
        dealStartTime: '',
        // 处理时长
        dealEndTime: '',
        // 处理状态
        dealStatus: '',
        // 备注
        dealRemark: ''
      },
      // 表单规则设置
      warnDealDateFormRules: {
        userDeal: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          {
            min: 3,
            max: 10,
            message: '用户名的长度在3~10个字符之间',
            trigger: 'blur'
          }
        ],
        // 时间格式
        dealStartTime: [
          { required: true, message: '请选择事件处理开始时间', trigger: 'blur' }
        ],
        dealEndTime: [
          { required: true, message: '请选择事件处理结束时间', trigger: 'blur' }
        ],
        dealStatus: [
          { required: true, message: '请选择事件处理状态', trigger: 'blur' }
        ]
      },
      pickerOptions: {
        shortcuts: [
          {
            text: '今天',
            onClick (picker) {
              picker.$emit('pick', new Date())
            }
          },
          {
            text: '明天',
            onClick (picker) {
              const date = new Date()
              date.setTime(date.getTime() + 3600 * 1000 * 24)
              picker.$emit('pick', date)
            }
          }
        ]
      }
    }
  },
  methods: {
    // 重置dialog中的数据 在关闭和取消的时候
    warnInfoDealFormClosed () {
      // console.log('关闭...,传递子组件状态给父组件...')
      this.dialogTableVisible = false
      this.$emit('tableEditEvent', this.dialogTableVisible)
      this.$refs.warnInfoDealRef.resetFields()
    }
  },
  watch: {
    dialogTableVisibleFlag (value) {
      this.dialogTableVisible = value
      // console.log('属性监听：' + value)
    },
    warnDealDate (value) {
      // 在dialog中进行显示
      this.warnDealDateForm.warnDataId = value.id
      this.warnDealDateForm.warnDataDate = value.date
      this.warnDealDateForm.warnLocal = value.local
      this.warnDealDateForm.warnNumber = value.number
      this.warnDealDateForm.warnInfo = value.alertInfo
      // console.log('dialog接收数据成功...')
    }

  }
}
</script>

<style lang="less" scoped>
</style>
