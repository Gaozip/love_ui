<template>
  <div>
    <div class="header">
      <div class="title">
        <span>{{title}}</span>
      </div>
    </div>
    <van-button icon="arrow-left"
                class="backBtn"
                @click="goBack()">
    </van-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    props: {
      title: {
        type: String,
        default: '',
      }
    },
    methods: {
      goBack() {
        this.$router.goBack()
      }
    },
    components: {}
  }
</script>

<style scoped>
  .backBtn {
    /*float: left;*/
    position: absolute;
    background-color: #98ff64;
    left: 0;
    top: 0;
  }

  .header {
    background-color: #F8B6C8;
    width: 100%;
    height: 42px;
    text-align: center;
  }
  .title{
    width: 100%;
    height: 42px;
    text-align: center;
  }
  .title span {
    line-height: 42px;
  }
</style>
