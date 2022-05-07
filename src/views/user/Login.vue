<template>
  <div id="login" class="login">
    <div class="wrap">
      <h1>登 录</h1>
      <el-form :model="form" ref="form" class="form">
        <el-form-item prop="username">
          <el-input placeholder="用户名" type="username" v-model="form.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item id="password" prop="password">
          <el-input
              placeholder="密码"
              show-password
              type="password"
              v-model="form.password"
              autocomplete="off"
              @keyup.enter.native="login"
          ></el-input>
        </el-form-item>
        <el-form-item class="btn_login">
          <el-button type="primary" @click="login">登&nbsp;&nbsp;录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import qs from "qs";
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    }
  },
  methods: {
    login: function () {
      this.$axios.post('/user/login', qs.stringify(this.form))
          .then(res => {
            if (res.data.errno === 0) {
              this.$message.success("登录成功");
              this.$store.dispatch('saveUserInfo', {
                user: res.data.data
              });
              setTimeout(() => {
                window.open('/', '_self');
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
#login {
  font-family: 'Noto Serif SC', serif;
  margin-top: 100px;
}
#login >>> .el-input__inner {
  font-family: 'Noto Serif SC', serif;
  height: 35px;
  padding-top: 5px;
  padding-bottom: 5px;
}
#login .wrap {
  width: 300px;
  height: 300px;
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
#login .btn_login {
  margin-top: 25px;
  text-align: center;
}
#login .btn_login button{
  line-height: 10px;
  font-family: 'Noto Serif SC', serif;
  width: 100%;
  height: 38px;
}
#login .suffix {
  font-size:14px;
  line-height:10px;
  color:#999;
  cursor: pointer;
  float:right;
}
</style>