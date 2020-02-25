<template>
  <div style="background-color: #f3f898">
    <van-notice-bar
      left-icon="volume-o"
      :scrollable="true"
      color="#F895B3"
      :text="noticeStr"/>
    <span v-for="item in featuresList" style="float: left">
      <van-button icon="like-o" class="features-btn" @click="handleClick(item)"></van-button>
      <div style="font-family: hanyi">{{item.label}}</div>
    </span>
    <van-button icon="setting-o" class="features-btn" style="float: left"></van-button>
    <van-button icon="plus" class="features-btn" style="float: left" @click="doAdd()"></van-button>
  </div>
</template>

<script>
  const LOVE_DATE = '2019-05-14';
  export default {
    data() {
      return {
        featuresList:[
          {label:'照片',value:"photo",goto:'/home/photo'},
          {label:'纪念日',value:"anniversary",goto:'/home/anniversary'},
          {label:'录音',value:'recording',goto:'/home/recording'},
          {label:'视频',value:'video',goto:'/home/video'},
          {label:'便签',value:'note',goto:'/home/note'},
          {label:'聊天记录',value:'chatRecord',goto:'/home/chatRecord'},
          {label:'定位追踪器',value:'gps',goto:'/home/gps'},
          {label:'我想你了',value:'iMissYou',goto:'/home/iMissYou'},
          {label:'树洞',value:'treeHole',goto:'/home/treeHole'}, //以弹幕的形式回复(弹幕显示留言标题，点击进去看详情，也可留言,已回复的弹幕变颜色，对方可对你的文章评分)
        ],
        noticeStr:'宝宝我们已经相恋' + this.setLoveDate() + '天了! I love you! I want! I need!'
      }
    },
    computed: {
      loveDay(){

      }
    },
    methods: {
      handleClick(data){
        this.$router.togo(data.goto);
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
</style>
