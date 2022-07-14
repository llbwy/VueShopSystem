<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avatar_box">
        <img src="https://s1.328888.xyz/2022/07/13/LVCiC.png" alt="" />
      </div>
      <!-- 登陆表单区 -->
      <el-form
        ref="loginFormRef"
        class="login_form"
        :model="loginForm"
        :rules="loginFormRules"
      >
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input
            prefix-icon="iconfont icon-user"
            v-model="loginForm.username"
            placeholder="请输入用户名"
            class="inputWarning"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            prefix-icon="iconfont icon-3702mima"
            v-model="loginForm.password"
            type="password"
            placeholder="请输入密码"
            class="inputWarning"
          ></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //这是登录表单的绑定数据对象
      loginForm: {
        username: "admin",
        password: "123456",
      },
      //这是表单验证规则对象
      loginFormRules: {
        username: [
          //required相当于校验是否为空，就是说不满足第一个，将执行第二个，第三个是当失去聚焦时
          { required: true, message: "请输入登录名称", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入登录密码", trigger: "blur" },
          {
            min: 6,
            max: 16,
            message: "长度在 6 到 16 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    resetLoginForm() {
      this.$refs.loginFormRef.resetFields();
      //$refs是表单的对象
    },
    login() {
      this.$refs.loginFormRef.validate(async (valid) => {
        if (!valid) return;
        const { data: res } = await this.$http.post("login", this.loginForm);
        if (res.meta.status != 200) return this.$message.error("登陆失败");
        this.$message.success("登陆成功");
        //开始第二节了
        window.sessionStorage.setItem("token", res.data.token);
        this.$router.push("/home");
      });
    },
  },
};
</script>

<style lang="less" scoped>
.login_container {
  background-color: black;
  height: 100%;
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: yellow;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .avatar_box {
    height: 130px;
    width: 130px;
    border: 10px solid #8be9fd;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 3px #ddd;
    position: absolute;
    left: 50%;
    background-color: #ff79c6;
    transform: translate(-50%, -50%);
    img {
      height: 100%;
      width: 100%;
      border-radius: 50%;
      background-color: #8be9fd;
    }
  }
}
.btns {
  display: flex;
  justify-content: flex-end;
}
.login_form {
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 0 33px;
  box-sizing: border-box;

  // 改变input框背景颜色
}
</style>
