<template>
  <div class="course">
      <div class="enterCourse">
        <span>请选择学习的课程</span>
        <input v-model="courseName" v-on:keyup.enter="addCourse"/>
      </div>
      <div class="choosedCourse">
        <div>已选择的课程</div>
        <div v-for="course in courses">
          {{course.language}}
        </div>
      </div>
  </div>
</template>

<script>
    export default {
        name: "course",
        data(){
          return {
             courses: [],
             courseName: ''
          }
        },
        methods:{
          addCourse : function(){
            this.courses.push({
               language: this.courseName,
               isChecked:false
            }),
            this.courseName = ''
          }
        }
    }
</script>

<style scoped>

</style>
