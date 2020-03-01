<template>
  <div style="background-color: #f3f898">
    <Header v-bind:title="title" ref="header"></Header>
    <van-form @submit="handleAdd()">
      <van-field v-model="form.menuName" name="menuName" label="菜单名称" placeholder="菜单名称"/>
      <van-field v-model="form.menuCode"
                 name="menuCode"
                 label="菜单标识"
                 placeholder="菜单标识"
                 :rules="[{validator: existValidator, message: '请输入正确内容' }]"/>
      <van-field v-model="form.iconName" name="iconName" label="图标名称" placeholder="图标名称"/>
      <van-field v-model="form.menuRouter" name="menuRouter" label="菜单路由" placeholder="菜单路由"/>
      <van-field v-model="form.menuDesc" name="menuDesc" label="功能描述" placeholder="功能描述"/>
      <van-button size="large"
                  style="margin-top: 10px;"
                  color="linear-gradient(to right, #FF7AE1, #26a2ff)"
                  native-type="submit">确定
      </van-button>
    </van-form>
  </div>
</template>

<script>
  import axios from 'axios'
  import {getServerUrl} from '@/config/system.js'
  import Header from 'common/header'
  import { Dialog } from 'vant';
  import { Toast } from 'vant';
  export default {
      components: {Header,},
      data() {
          return {
            title:'新增功能菜单',
            form:{
              menuName:'',
              menuCode:'',
              iconName:'',
              menuRouter:'/',
              menuDesc:'',
            },
          }
      },
      mounted() {

      },
      watch: {

      },
      methods: {
        handleAdd(){
          let url=getServerUrl('menu');
          let token=window.localStorage.getItem('token')
          axios.defaults.headers.common['token'] = token;
          let param = {
            menuName: this.form.menuName,
            menuCode: this.form.menuCode,
            iconName: this.form.iconName,
            menuRouter: this.form.menuRouter,
            menuDesc: this.form.menuDesc,
          };
          axios.post(url,param).then(response=>{
            if(response.data.code === 200){
              Dialog.alert({
                title: '提示',
                message: '添加成功!'
              }).then(() => { });
            }else{
              Dialog.alert({
                title: '提示',
                message: response.data.message
              }).then(() => {});
            }
            this.$refs.header.goBack();
          }).catch(error=>{0
          });
        },
        existValidator(val){
          return new Promise(resolve => {

            let result = 0;
            Toast.loading('验证中...');

            let url=getServerUrl('menu/checkMenuExist');
            let token=window.localStorage.getItem('token');

            axios.defaults.headers.common['token'] = token;
            let param = {
              menuCode: this.form.menuCode,
              menuRouter: this.form.menuRouter,
            };
            axios.post(url,param).then(response=>{
              if(!!response.data.checkExist){
                result = response.data.checkExist;
              }
            });
            setTimeout(() => {
              Toast.clear();
              resolve(result == 0);
            }, 4000);
          });
        },
      }
    }
</script>

<style scoped>
</style>
