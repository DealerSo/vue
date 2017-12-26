<template>
    <div id="header">
        <span v-text="msg"></span>
    </div>
</template>


<script>
  export default {
    name : 'header',
    data: function () {
      return {
        msg : 'This is a header'
      }
    }
  }
</script>

<style scoped>
  #header{
    background-color: aqua;
    text-align: center;
  }
</style>
