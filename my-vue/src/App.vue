<template>
  <div class="app">
    <img src="./assets/logo.png">
    <v-header prop="this is header prop" v-on:child-info="listenChildMsg"></v-header>
    <span>Child tell father:{{ childMsg }}</span>
    <router-view/>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import Header from './components/header'
  import Footer from './components/footer'
export default {
  name : 'app',
  data : function () {
    return{
      childMsg : ''
    }
  },
  components : {
    'v-header':Header,
    'v-footer':Footer
  },
  methods:{
    listenChildMsg : function (msg) {
        this.childMsg = msg
    }
  }
}
</script>

<style>
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
