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
  import Store from '../store.js'
  export default {
    name: "login",
    data: function () {
      return {
        msg: '学习列表',
        flag: true,
//        items: [
//          {
//            language: 'Java',
//            isFinished: true
//          }
//        ],
        items: Store.fetch(),
        liClass: 'liClassLog',
        newItem: ''
      }
    },
    // 添加监听
    watch: {
      items: {
        handler: function (items) {
          //每次items数组变化时，都会将新的数组存储到localStorage中
          Store.save(items)
        },
        deep:true
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
