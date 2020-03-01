<template>
  <div style="background-color: #f3f898">
    <Header v-bind:title="title"></Header>
    <viewPhoto v-model="show" @onConfirm="confirm" title="温馨提示" msg="提示内容" ></viewPhoto>
    <button @click="open(0)">打开</button>
  </div>
</template>

<script>
  import Header from 'common/header'
  import viewPhoto from 'vuk-view-photo'
  export default {
      components: {Header,viewPhoto,},
      data() {
          return {
            title:'照片',
            show:'',

          }
      },
      mounted() {

      },
      watch: {

      },
      methods: {
        open(index) {
          //index 显示第几张, arr图片片数组
          let arr = [
            'http://localhost/love/image/10.jpg',
            'http://localhost/love/image/11.jpg',
            'http://localhost/love/image/12.jpg',
            'http://localhost/love/image/13.jpg',
            'http://localhost/love/image/14.jpg',
            'http://localhost/love/image/15.jpg',
            'http://localhost/love/image/16.jpg'
          ]
          this.$vukViewPhoto.open(index, arr)
        },
        confirm() {
        }
      }
  }
</script>

<style scoped>

</style>
