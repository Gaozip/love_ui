<template>
  <div style="background-color: #f3f898">
    <Header v-bind:title="title"></Header>
    <van-form @submit="handleAdd()">
      <van-field v-model="form.menuName" name="menuName" label="菜单名称" placeholder="菜单名称"/>
      <van-field v-model="form.menuCode" name="menuCode" label="菜单标识" placeholder="菜单标识"/>
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
            Dialog.alert({
              title: '提示',
              message: response.data.message
            }).then(() => {
              // on close
            });
          }).catch(error=>{});
        },
      }
    }
</script>

<style scoped>
</style>
