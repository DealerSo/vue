<template>
  <div>
    <span v-text="msg"></span>
    <p><span v-text="prop"></span></p>
    <button v-on:click="ClickMe">Click!</button>
  </div>
</template>

<script>
    export default {
        name: "v-header",
        data : function () {
          return{
            msg : 'This is header'
          }
        },
        // 注册父组件中传递过来的参数,这样在子组件header.vue中才可以使用这个属性值
        props:['prop'],
        methods : {
          ClickMe : function () {
            //console.log(this.prop)
            // 子组件向父组件中传递信息
            this.$emit('child-info','Test .....')
          }
        }
    }
</script>

<style scoped>

</style>
