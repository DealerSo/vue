<template>
  <div class="app">
    <header></header>
    <img src="./assets/logo.png">
    <router-view/>
    <footer></footer>
  </div>
</template>

<script>
  import Header from './components/header'
  import Footer from './components/footer'
export default {
  name : 'app',
  component:[Header,Footer]
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
