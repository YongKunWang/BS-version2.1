<!--
  登录表单组件
  2020-09-01 09:53:50
-->
<template>
  <div class="login-container">
    <!--标题-->
    <div class="avatar_box">
      <h2>油污数据可视化平台</h2>
    </div>
    <!-- form表单开始 -->
    <el-form ref="loginFormRef" :model="loginForm" :rules="rules" label-width="0px">
      <el-form-item prop="username">
        <el-input
          v-model="loginForm.username"
          prefix-icon="iconfont bsuser"
          placeholder="请输入用户名"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="loginForm.password"
          prefix-icon="iconfont bspassword"
          placeholder="请输入密码"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item class="btns">
        <button class="btn" type="button" @click="submitForm">登录</button>
        <button class="btn" type="button" @click="resetLoginForm">重置</button>
      </el-form-item>
    </el-form>
    <div class="tip">默认用户名：admin ，默认密码：123456</div>
  </div>
</template>

<script>
export default {
  name: 'loginForm',
  data () {
    return {
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      rules: {
        // 验证用户名是否合法
        username: [
          { required: true, message: '请输入登录名称', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        // 验证密码是否合法
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm () {
      this.$refs.loginFormRef.validate(async (valid) => {
        // if (!valid) return
        // const { data: res } = await this.$http.post('item/login', this.loginForm)
        // // console.log(res)
        // if (res.meta.status !== 1000) {
        //   return this.$message.warning(`${res.meta.msg},登录失败`)
        // }
        // this.$message.success('登录成功')
        // // 这里需要添加一个token 后端是在最后实现的！
        // // window.sessionStorage.setItem('token', res.data.token)

        this.$router.push('/home')
      })
    },
    resetLoginForm () {
      this.$refs.loginFormRef.resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
// 居中对齐的登录框
.login-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: #fff;
  width: 8.333333rem;
  height: auto;
  background: rgba(36, 36, 85, 0.5);
  margin: 0 auto;
  padding: 0.5rem 0.333333rem 0.333333rem;
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  z-index: 1001;

  -ms-animation: cloud 2s 3s ease-in infinite alternate;
  -moz-animation: cloud 2s 3s ease-in infinite alternate;
  -webkit-animation: cloud 2s 3s ease-in infinite alternate;
  -o-animation: cloud 2s 3s ease-in infinite alternate;
  -webkit-animation: cloud 2s 3s ease-in infinite alternate;
  animation: cloud 2s 3s ease-in infinite alternate;
  // 标题栏
  h2 {
    text-align: center;
    font-weight: normal;
    font-size: 0.433333rem;
    color: #d3d7f7;
    padding-bottom: 0.583333rem;
  }
  .btns {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    .btn {
      // width: 200px;
      width: 3.2rem;
      padding: 12px 0;
      border: 1px solid #d3d7f7;
      font-size: 16px;
      color: #d3d7f7;
      cursor: pointer;
      background: transparent;
      border-radius: 4px;
      margin: 10px 15px 0;
      &:hover {
        color: #fff;
        background: #0090ff;
        border-color: #0090ff;
      }
    }
  }
  .tip {
    font-size: 12px;
    padding-top: 20px;
  }
}
@-ms-keyframes cloud {
  0% {
    -ms-transform: translate(-50%, -50%);
  }
  40% {
    opacity: 1;
  }
  60% {
    opacity: 1;
  }
  100% {
    -ms-transform: translate(-50%, -40%);
  }
}
@-moz-keyframes cloud {
  0% {
    -moz-transform: translate(-50%, -50%);
  }
  40% {
    opacity: 1;
  }
  60% {
    opacity: 1;
  }
  100% {
    -moz-transform: translate(-50%, -40%);
  }
}
@-o-keyframes cloud {
  0% {
    -o-transform: translate(-50%, -50%);
  }
  40% {
    opacity: 1;
  }
  60% {
    opacity: 1;
  }
  100% {
    -o-transform: translate(-50%, -40%);
  }
}
@-webkit-keyframes cloud {
  0% {
    -webkit-transform: translate(-50%, -50%);
  }
  40% {
    opacity: 1;
  }
  60% {
    opacity: 1;
  }
  100% {
    -webkit-transform: translate(-50%, -40%);
  }
}
@keyframes cloud {
  0% {
    transform: translate(-50%, -50%);
  }
  40% {
    opacity: 1;
  }
  60% {
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -40%);
  }
}
</style>

<style lang="less" scoped>
  /*样式穿透*/
  /deep/ .el-input__inner {
    font-size: 16px;
    line-height: 30px;
    width: 100%;
    color: #d3d7f7;
    outline: none;
    border-bottom: 1px solid #dbdbdb;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    background-color: rgba(0, 0, 0, 0);
  }
</style>
