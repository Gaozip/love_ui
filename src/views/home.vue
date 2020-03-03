<template>
  <div style="background-color: #f3f898">
    <van-notice-bar
      left-icon="volume-o"
      :scrollable="true"
      color="#F895B3"
      :text="noticeStr"/>
    <span v-for="item in menuData" style="float: left">
      <van-button :icon="item.iconName"
                  class="features-btn"
                  @click="handleClick(item)" >
                  <!--@touchstart.prevent="touchin(item.menuCode)"-->
                  <!--@touchend.prevent="cleartime(item.menuCode)"-->
     </van-button>
      <div style="font-family: hanyi">{{item.menuName}}</div>
    </span>
    <span style="float: left">
      <van-button icon="setting-o" class="features-btn" style="float: left"></van-button>
      <div style="font-family: hanyi">设置</div>
    </span>
    <span style="float: left">
      <van-button icon="plus" class="features-btn" style="float: left" @click="doAdd()"></van-button>
      <div style="font-family: hanyi">添加菜单</div>
    </span>
  </div>
</template>

<script>
  const LOVE_DATE = '2019-05-14';
  import axios from 'axios'
  import {getServerUrl} from '@/config/system.js'
  import { Dialog } from 'vant';
  import { Toast } from 'vant';
  export default {
    data() {
      return {
        Loop:'',
        // featuresList:[
        //   {label:'照片',value:"photo",goto:'/home/photo'},
        //   {label:'纪念日',value:"anniversary",goto:'/home/anniversary'},
        //   {label:'录音',value:'recording',goto:'/home/recording'},
        //   {label:'视频',value:'video',goto:'/home/video'},
        //   {label:'便签',value:'note',goto:'/home/note'},
        //   {label:'聊天记录',value:'chatRecord',goto:'/home/chatRecord'},
        //   {label:'定位追踪器',value:'gps',goto:'/home/gps'},
        //   {label:'我想你了',value:'iMissYou',goto:'/home/iMissYou'},
        //   {label:'树洞',value:'treeHole',goto:'/home/treeHole'}, //以弹幕的形式回复(弹幕显示留言标题，点击进去看详情，也可留言,已回复的弹幕变颜色，对方可对你的文章评分)
        // ],
        menuData: [],
        noticeStr:'宝宝我们已经相恋' + this.setLoveDate() + '天了! I love you! I want! I need!'
      }
    },
    computed: {
    },
    mounted(){
      setInterval(this.refreshToken,1000*60*10)  // 10分钟刷新一次token
      this.queryMenu();
    },
    methods: {
      handleClick(data){
        this.$router.togo(data.menuRouter);
      },
      doAdd(){
        this.$router.togo('/add');
      },
      //计算相恋天数
      setLoveDate(){
        let date1 = Date.parse(LOVE_DATE);
        let date2 = new Date();
        //计算两个日期之间相差的毫秒数的绝对值
        let ms= Math.abs(date2 - date1);
        //毫秒数除以一天的毫秒数,就得到了天数
        let days = Math.floor(ms / (24 * 3600 * 1000));
        return days + 1;
      },
      refreshToken() {
        let url=getServerUrl('refreshToken');
        let token = window.localStorage.getItem('token')
        axios.defaults.headers.common['token'] = token;
        axios.get(url,{}).then(response=>{
          console.log(response);
          if(response.data.code == 200){
            window.localStorage.setItem('token',response.data.data);
            console.log('token刷新成功')
          }
        }).catch(error=>{
          alert("token刷新失败!"+'-请联系管理员')
        })
      },
      queryMenu(){
        let url=getServerUrl('menu');
        // let token = window.localStorage.getItem('token')
        // axios.defaults.headers.common['token'] = token;
        axios.get(url,{}).then(response=>{
          this.menuData = response.data.data;
        });
      },
      touchin(data) {
        console.log(data)
        clearInterval(this.Loop); //再次清空定时器，防止重复注册定时器
        this.Loop = setTimeout(function() {
          Dialog.confirm({
            title: '提示',
            message: '是否删除该功能?'
          }).then(() => {
            let url=getServerUrl('menu/deleteByMenuCode/') + data;
            axios.delete(url,{}).then(response=>{
              if(response.data.code == 200){
                Toast.success('删除成功!');
              }else{
                Toast.error(response.data.message);
              }
              this.queryMenu();
            });
          }).catch(() => {
            // on cancel
          });
        }.bind(this), 2000);
      },
      cleartime(data) {
        // 这个方法主要是用来将每次手指移出之后将计时器清零
        clearInterval(this.Loop);
      },
    },
  }
</script>

<style scoped>
  >>>.features-btn{
    width: 50pX;
    height: 50px;
    border-radius: 0.5em;
    background-color: #fbc0ff;
    margin: 20px 20px 10px 20px;
  }
  >>>.van-notice-bar{
    height:20px;
  }
  /*>>>.van-button*/
</style>
