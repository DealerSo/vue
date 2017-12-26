<template>
    <div class="login">
      <span v-text="msg"></span>
    </div>
</template>

<script>
    export default {
        name: "login",
        data(){
          return{
             msg : '登录成功'
          }
        }
    }
</script>

<style scoped>

</style>
