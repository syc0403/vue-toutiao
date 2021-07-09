<template>
  <div clss="login">
    <div class="head"><el-page-header @back="goBack"></el-page-header></div>
    <div class="info"></div>
    <div class="block">
      <el-avatar
        shape="circle"
        :size="150"
        src="https://pica.zhimg.com/80/v2-69df6c0a165ba62c0d8ca6b3b3fcfcfa_720w.jpg"
      ></el-avatar>
    </div>
    <div class="body">
      <div class="input">
        <el-input v-model="email" placeholder="请输入邮箱"></el-input>
        <el-input
          placeholder="请输入密码"
          v-model="password"
          show-password
          style="margin-top: 10px"
        ></el-input>
      </div>
      <div class="button">
        <el-button type="primary" id="button-left" @click="login" :plain="true"
          >登陆</el-button
        ><el-button type="primary">注册</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import { post } from "@/utils/request.js";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    goBack() {
      this.$router.push({ path: "/My" });
    },
    async login() {
      let params = {
        email: this.email,
        password: this.password,
      };
      let res = await post("http://92.68.10.228:7001/api/user/login", params);
      this.logininfo = res.data.code;
      // console.log(this.logininfo);
      if (this.logininfo == 1) {
        this.$router.push("/my");
        this.$message(res.data.msg);
      } else {
        this.$message(res.data.msg);
      }
    },
  },
};
</script>
<style>
.login {
  display: flex;
}
.body {
  margin-top: 30%;
}
.head {
  margin-top: 10px;
}
.input {
  margin-top: 30px;
  margin-right: 50px;
  margin-left: 50px;
}
#button-left {
  margin-top: 30px;
  margin-left: 30%;
}
.block {
  margin: 30%;
  margin-top: 35%;
}
.info {
  margin-left: 10px;
  margin-right: 10px;
}
</style>