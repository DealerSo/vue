<template>
  <div class="page">
      <!--页顶部-->
      <div class="page-top">
        <div class="top-content">
          <h2>课程计划列表</h2>
        </div>
      </div>
      <!--页中间部分-->
      <div class="page-middle">
        <h3 class="big-title">添加课程：</h3>
        <input
            placeholder="例如：Vue；提示：+回车即可添加任务"
            class="task-input"
            v-model="courseName"
            v-on:keyup.enter="addCourse"
        />

        <ul class="task-count" v-show="courses.length">
          <li>{{courses.length}}个任务未完成</li>
          <li class="action">
            <a class="active" href="#">所有任务</a>
            <a href="#">未完成的任务</a>
            <a href="#">完成的任务</a>
          </li>
        </ul>

        <h3 class="big-title">任务列表：</h3>
        <div class="tasks">
          <span class="no-task-tip" v-show="!courses.length">还没有添加任何任务</span>
          <ul class="todo-list">
            <li class="todo"  v-for="course in courses" >
              <div class="view">
                <!--如果course.isChecked == true 那么选中，否则不选中-->
                <span v-if="course.isChecked">
                  <input class="toggle" type="checkbox" v-on:click="modifyStatus(course)" checked/>
                </span>
                <span v-else>
                  <input class="toggle" type="checkbox" v-on:click="modifyStatus(course)"/>
                </span>
                <label v-bind:class="{completed:course.isChecked}">{{ course.language }}</label>
                <button class="destroy" v-on:click="removeCourse(course)"></button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!--页底部-->
      <div class="page-bottom">

      </div>
  </div>
</template>

<script>
    import Store from '../store/store'
    export default {
        name: "course",
        data(){
          return {
             courses: Store.fetch(),
             courseName: ''
          }
        },
        methods:{
          // 添加课程
          addCourse : function(){
            this.courses.push({
               language: this.courseName,
               isChecked:false
            }),
            Store.save(this.courses)
            this.courseName = ''
          },
          // 删除课程
          removeCourse : function (course) {
              var index = this.courses.indexOf(course)
              this.courses.splice(index,1)
              // 删除缓存中的项
              Store.remove(index)
          },
          modifyStatus : function (course) {
            var checkedFlag = !course.isChecked
            course.isChecked = checkedFlag
            var index = this.courses.indexOf(course)
            // 修改localStorage中的值
            Store.modify(index,checkedFlag)
          }
        }
    }
</script>

<style scoped>
  @import url('../style/course.css');
</style>
