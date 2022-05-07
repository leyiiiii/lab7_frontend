<template>
  <div id="register" class="register">
    <div class="wrap">
      <h1>注 册</h1>
      <el-form :model="form" ref="form" class="form">
        <el-form-item prop="username">
          <el-input placeholder="用户名" type="username" v-model="form.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="password_1">
          <el-input placeholder="密码" type="password" v-model="form.password_1" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="password_2">
          <el-input
              placeholder="确认密码"
              show-password
              type="password"
              v-model="form.password_2"
              autocomplete="off"
              @keyup.enter.native="register"
          ></el-input>
        </el-form-item>
        <el-form-item class="btn_register">
          <el-button type="primary" @click="register">注&nbsp;&nbsp;册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import qs from "qs";
export default {
  name: "Register",
  data() {
    return {
      form: {
        username: "",
        password_1: "",
        password_2: ""
      }
    }
  },
  methods: {
    register: function () {
      this.$axios.post('/user/register', qs.stringify(this.form))
        .then(res => {
          if (res.data.errno === 0) {
            this.$message.success("注册成功");
            setTimeout(() => {
              window.open('/login', '_self');
            }, 1000);
          } else {
            this.$message.error(res.data.msg);
          }
        })
        .catch(err => {
          console.log(err);
        })
    }
  },
}
</script>

<style scoped>
#register {
  font-family: 'Noto Serif SC', serif;
  margin-top: 100px;
}
#register >>> .el-input__inner {
  font-family: 'Noto Serif SC', serif;
  height: 35px;
  padding-top: 5px;
  padding-bottom: 5px;
}
#register .wrap {
  width: 300px;
  height: 350px;
  padding: 0 25px 0 25px;
  line-height: 50px;
  position: relative;
  display: inline-block;
  background-color: #fff;
  border-radius: 15px;
  color: #303133;
  border: 2px solid #ebeef5;
  box-shadow: 2px 2px 12px 2px rgb(0 0 0 / 10%);
  transition: .3s;
}
#register .btn_register {
  margin-top: 25px;
  text-align: center;
}
#register .btn_register button{
  line-height: 10px;
  font-family: 'Noto Serif SC', serif;
  width: 100%;
  height: 38px;
}
#register .suffix {
  font-size:14px;
  line-height:10px;
  color:#999;
  cursor: pointer;
  float:right;
}
</style>