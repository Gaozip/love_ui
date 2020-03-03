<template>
  <div style="background-color: #f3f898">
    <Header v-bind:title="title"></Header>
    <div style="width: 100%;height:90%;">
      <div style="width: 100%;height:90%;overflow-y:auto;">
        <span class="sceneryImgContent" v-for="item in details">
          <img style="width:80px;height:80px;padding:3px;" :src="imagePath+item.fileName" preview="1" :preview-text="item.extInfo">
        </span>
      </div>
      <br/>
      <div >
        <van-pagination
          v-model="currentPage"
          :items-per-page="pageSize"
          :page-count="totalPage"
          @change="handlePageChange()"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import Header from 'common/header'
  import axios from 'axios'
  import {getServerUrl} from '@/config/system.js'
  import { Dialog } from 'vant';
  export default {
      components: {Header,},
      data() {
          return {
            title:'照片',
            imagePath:'http://localhost/love/image/',
            details:[],
            currentPage: 1, //当前页
            pageSize: 28, //每页的数量
            totalPage: 0, //总页数
          }
      },
      mounted() {
        this.fetchImgData();
      },
      watch: {

      },
      methods: {
        // setPreview:function () {
        //   //给预览图设置参数
        //   this.details.forEach( img => {
        //     img.src = img.header;
        //     img.msrc = img.header;
        //     img.alt = img.top_commentsName;
        //     img.title = img.top_commentsName;
        //     img.w = 200;//这是大图的宽
        //     img.h = 200;
        //   } )
        //   return this.details;
        // },
        fetchImgData(){
          let url = getServerUrl("file");
          let param = {
            pageSize: this.pageSize,
            currentPage: this.currentPage
          };
          axios.get(url,{params:param}).then(response =>{
            if(response.data.code == 200){
              this.details = response.data.data.list;
              this.totalPage = response.data.data.pages;
              this.currentPage = response.data.data.pageNum;

              this.$previewRefresh() //刷新重置一下,否则点击图片看不了详情
            }
          });
        },
        handlePageChange(val){
          console.log(val);
          // this.currentPage = val;
          // this.fetchImgData();
        },
      }
  }
</script>

<style scoped>

</style>
