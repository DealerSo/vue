// 定义常量
const STORAGE_KEY = "wood_storage";

export default {
  // 获取缓存
  fetch : function () {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
  },
  save : function (items) {
    window.localStorage.setItem(STORAGE_KEY,JSON.stringify(items))
  },
  remove : function (index) {
    // 得到数组值
    var courses = JSON.parse(window.localStorage.getItem(STORAGE_KEY))
    // 删除该索引所对应的项
    courses.splice(index,1)
    //重新setItem3
    window.localStorage.setItem(STORAGE_KEY,JSON.stringify(courses))
  },
  modify : function (index,flag) {
    var courses = JSON.parse(window.localStorage.getItem(STORAGE_KEY))
    courses[index].isChecked = flag
    window.localStorage.setItem(STORAGE_KEY,JSON.stringify(courses))
  }
}
