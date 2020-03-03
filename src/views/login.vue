<template>
  <div style="background-color: #e1f45b">
    <div style="width: 80%;margin: auto;">
      <div style="margin-top: 55px;">
        <img src="@/assets/imgs/lizhi.png" style="width: 80%"/>
      </div>
      <div style="margin-bottom: 60px;">
        <font style="font-size: 40px;font-family: 华文行楷">荔枝</font>
      </div>
      <div>
        <van-form @submit="handleLogin">
          <van-field v-model="loginForm.userName"
                     name="用户名"
                     label="用户名"
                     placeholder="用户名"
                     :rules="[{ required: true, message: '请填写用户名' }]"/>
          <van-field v-model="loginForm.password"
                     type="password"
                     name="密码"
                     label="密码"
                     placeholder="密码"
                     :rules="[{ required: true, message: '请填写密码' }]" />
          <div style="margin: 5px;padding-right:10px;float: right">
            <a style="color: #26a2ff;padding-right: 10px;" @click="registerUser">用户注册</a>
            <a style="color: #26a2ff;" @click="forgetPassword">忘记密码</a>
          </div>
          <van-button size="large"
                      style="margin-top: 10px;"
                      color="linear-gradient(to right, #FF7AE1, #26a2ff)"
                      native-type="submit">登录
          </van-button>
          <div style="margin: 5px;padding-right:10px;float: right">
            <a style="color: #26a2ff;" @click="forgetPassword">第三方登录</a>
          </div>
          <div style="margin: 5px;float: right">
            <span v-for="item in imageList">
              <van-image width="20" height="20" style="margin-right: 10px;" :src="item" />
            </span>
          </div>
        </van-form>
      </div>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div style="text-align: center;font-size: 6px;">Copyright © 2020 Garfield and LittleFairy.</div>
  </div>
</template>

<script>
  import { ERR_OK } from '@/api/index'    // 引入请求成功状态
  import axios from 'axios'
  import {getServerUrl} from '@/config/system.js'
  import { Dialog } from 'vant';
  export default {
    name: 'login',
    data () {
      return {
        loginForm: {
          userName: 'sysadmin',
          password: '111111'
        },
        errMsg: {
          userName: '',
          password: '',
        },
        pwdType: 'password',
        imageList:[
          require('@/assets/otherLoginCase/qq.png'),
          require('@/assets/otherLoginCase/wchat.png'),
          require('@/assets/otherLoginCase/weibo.png'),
        ],
      }
    },
    mounted(){
      this.clearToken();
    },
    methods: {
      forgetPassword () {
        MessageBox('提示', '操作成功')
      },
      showPwd () {
        if (this.pwdType === 'password') {
          this.pwdType = ''
        } else {
          this.pwdType = 'password'
        }
      },
      onSubmit(values) {
        console.log('submit', values);
      },
      handleLogin () {
        let url=getServerUrl('loginExt');
        let param = {
          userName: this.loginForm.userName,
          password: this.loginForm.password,
        };
        axios.post(url,param).then(response=>{
          console.info(response);
            if(response.data.code == 200){
              window.localStorage.setItem('token',response.data.data);
              console.log(this)
              this.$router.replace('/home')
            }else{
              Dialog.alert({
                title: '提示',
                message: response.data.message
              }).then(() => {
                // on close
              });
            }
          }).catch(error=>{})
      },
      clearToken(){
        // if(!!window.sessionStorage.getItem("token")){
          window.localStorage.removeItem("token");
          console.log("session清空成功!");
        //   window.location.reload();
        // }
      },
      registerUser(){

      },
    }
  }
</script>

<style scoped>

</style>
