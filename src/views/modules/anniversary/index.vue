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
            title:'纪念日',
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
