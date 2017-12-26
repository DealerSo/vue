<template>
  <div class="login">
    <span v-text="msg" v-show="flag"></span>
    <p>
      <button v-on:click="addClick">Click Me</button>
    </p>
    <p>
      <input v-model="newItem" v-on:keyup.enter="addItem"/>
    </p>
    <ul>
      <li v-for="item in items" v-bind:class="{finished: item.isFinished}">
        <span v-on:click="modifyStatus(item)">{{item.language}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "login",
    data: function () {
      return {
        msg: '登录成功',
        flag: true,
        items: [
          {
            language: 'Java',
            isFinished: true
          },
          {
            language: 'Python',
            isFinished: false
          },
          {
            language: 'Vue',
            isFinished: true
          }
        ],
        liClass: 'liClassLog',
        newItem: ''
      }
    },
    methods: {
      addClick: function (event) {
        console.info(event)
        console.info(event.toElement.textContent)
      },
      modifyStatus: function (item) {
        item.isFinished = !item.isFinished
      },
      addItem: function () {
        this.items.push({
          language: this.newItem,
          isFinished: false
        })
        this.newItem = ''
      }
    }
  }
</script>

<style scoped>
  .finished{
    text-decoration: underline;
  }
  button {
    color: #42b983;
  }
</style>
