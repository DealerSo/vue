<template>
    <div class="footer">
        <span v-text="msg"></span>
    </div>
</template>


<script>
  export default {
    name : 'v-footer',
    data(){
      return {
        msg : 'This is footer'
      }
    }
  }
</script>

<style scoped>

</style>
