<template>
    <div class="login">
      <span v-text="msg"></span>
      <p>
        <button v-on:click="addClick">Click Me</button>
      </p>
    </div>
</template>

<script>
    export default {
        name: "login",
        data(){
          return{
             msg : '登录成功'
          }
        },
        methods:{
           addClick : function (event) {
              console.log(this.msg)
              console.info(event)
             console.info(event.toElement.textContent)
           }
        }
    }
</script>

<style scoped>
  button{
    color: #42b983;
  }
</style>
