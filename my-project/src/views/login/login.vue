<template>
  <div>
    <el-form :model="form" status-icon :rules="rules" ref="formRef" label-width="100px" class="login-container">
      <h3 class="login_title">系统登录</h3>
      <el-form-item label="用户名" label-width="80px" prop="username" class="username">
        <el-input type="input" v-model="form.username" autocomplete="off" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item label="密码" label-width="80px" prop="password" class="password">
        <el-input type="password" v-model="form.password" autocomplete="off" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item class="login_submit">
        <el-button type="primary" @click="login" class="login_submit">登录</el-button>
          <el-button type="primary" @click="submitForm(formRef)" class="login_submit">
              注册
          </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script setup name="login" lang="ts">
import { ref ,reactive} from 'vue';
import { RouteLocationRaw } from 'vue-router';
import { useRouter } from 'vue-router';
import type ,{ FormInstance } from 'element-plus'
const formRef = ref<FormInstance>()
import {trackEvent,setCustomUrl} from "@/utils/js/matomo";

const router = useRouter();
const form = reactive({
  username:ref(''),
  password:ref(''),
})



const rules = {
  username: [
    { required: true, message: "请输入用户名", trigger: "blur" },
    { min: 3, message: "用户名不能小于3为", trigger: "blur" }
  ],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { min: 3, message: "用户名不能小于3为", trigger: "blur" }

  ]
}
const submitForm = (formEl: FormInstance | undefined) => {
  trackEvent('trackEvent',"登录界面", "login","denglu");

  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const  login=async()=> {
  setCustomUrl("登录界面","/login")
  if (formRef.value) {
    try {
      if(await formRef.value.validate()){
        console.log("success!!!")
      }
    } catch (error) {
      console.error('表单验证未通过', error);
    }
  }
  const routeInfo: RouteLocationRaw = { name: 'home', params: { parentId: 'main' } }
  router.push(routeInfo);
}

</script>
<style lang="less" scoped>
.login-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background-color: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #c6c6c6;
}

.login_title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}

.login_submit {
  margin: 10px auto 0px auto;
}
</style>

