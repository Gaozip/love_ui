<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="Router"></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        transitionName: 'slideleft'
      }
    },
    watch: {
      $route() {
        if (this.$router.isleft) {
          this.transitionName = 'slideleft'
        }
        if (this.$router.isright) {
          this.transitionName = 'slideright'
        }
      }
    }
  }
</script>

<style>
  @import './assets/tiff/font.css';
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .Router {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    transition: all .5s ease;
    -webkit-transition: all .5s ease;
    -moz-transition: all .5s ease;
  }
  .slideleft-enter,
  .slideright-leave-active {
    opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
  }
  .slideleft-leave-active,
  .slideright-enter {
    opacity: 0;
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100%, 0);
  }
  .preview figure {
    float: left;
    width: 30%;
    height:calc(30vw - 0px);
    margin: 1.5%;
  }

  .preview figure img {
    width: 100%;
  }
</style>
