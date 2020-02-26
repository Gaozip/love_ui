<template>
  <div style="background-color: #f3f898">
    <Header v-bind:title="title"></Header>
  </div>
</template>

<script>
  import Header from 'common/header'
  export default {
      components: {Header,},
      data() {
          return {
              title:'便签',
          }
      },
      mounted() {

      },
      watch: {

      },
      methods: {

      }
  }
</script>

<style scoped>

</style>
