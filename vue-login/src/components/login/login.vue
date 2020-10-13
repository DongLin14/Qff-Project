<template>
  <div class="login-wrap">
    <el-form
      :model="loginData"
      ref="loginDataRef"
      class="login-form"
      label-position="top"
      label-width="80px"
      :rules="loginDataRules">

      <h2>用户登录</h2>

      <el-form-item label="用户名" prop="username">
<!--    oninput="value=value.replace(/[^\d]/g,'')"  只能输入纯数字 -->
        <el-input
          v-model="loginData.username"
          placeholder="请输入用户名"
          @input="change($event)"
          clearable></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input
          v-model="loginData.password"
          placeholder="请输入密码"
          type="password"
          @input="change($event)"
          show-password><!--密码的隐藏--></el-input>
      </el-form-item>

      <el-button
        @click.prevent = "handleLogin()"
        class="login-btn" type="primary">登录</el-button>

    </el-form>
  </div>
</template>

<script>
  export default{
    data() {
      return {
        loginData: {
          username: '',
          password: ''
        },
        // 表单验证
        loginDataRules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入用户密码', trigger: 'blur' },
            { min: 1, max: 18, message: '长度在 1 到 18 个字符', trigger: 'blur' }
          ]
        }

      }
    },

    //登录请求
    methods: {
      handleLogin() {
        let data=JSON.stringify(this.loginData);
        let xhr = new XMLHttpRequest();
        //只是监听状态码的
        xhr.onreadystatechange = function()
        {
          if (xhr.readyState==4 && xhr.status==200)
          {
            let code=JSON.parse(xhr.responseText).code
            if(code==0){
              window.alert("登录成功")

            }else if(code==1){1141111110111011
              window.alert("用户名或者密码错误")
            }
          }
        }
        xhr.open('POST', 'http://localhost:3000/login', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(data);

      }


        // this.$http.post('/',data).then(res => {
        //    console.log(res)
        //   //获取登录后的数据
        //   const {
        //     data,
        //     meta: {msg,status}
        //   } = res.data
        //
        //   //登录验证
        //   if (status===200) {
        //   //  登录成功
        //     this.$router.push({name:'home'})
        //   }
        //   //登录失败-提示框
        //     else {
        //     this.$message.error(msg);
        //   }
        //
        // })
      }

      //刷新界面，解决input无法输入的问题
      // change() {
      //   this.$forceUpdate()
      // }
  }
</script>

<style>
.login-wrap {
  height: 100%;
  background-color: #324152;
  /*弹性盒子布局*/
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-wrap .login-form {
  background-color: #fff;
  width: 400px;
  padding: 30px;
  border-radius: 5px;
}

.login-wrap .login-form .login-btn {
  width: 100%;
}
</style>
