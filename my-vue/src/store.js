const STIRAGE_KEY = "store_vuejs"
export default {
  fetch : function () {
    return JSON.parse(window.localStorage.getItem(STIRAGE_KEY) || '[]')
  },
  save : function (items) {
    window.localStorage.setItem(STIRAGE_KEY,JSON.stringify(items))
  }
}
