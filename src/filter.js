import moment from "moment"
import en from "moment/locale/en-au"
import Vue from "vue"

moment.locale("en", en)


Vue.filter("formatTime", function(value) {
  if (value) {
    return moment(String(value)).format("kk:mm")
  }
})
Vue.filter("formatYear", function(date) {
    moment.locale("en")
  return moment(date).format("YYYY")
})

Vue.filter("formatMonthYear", function(date) {
    moment.locale("en")
    return moment(date).format("MMM YYYY")
  })

Vue.filter("formatDate", function(date) {
  moment.locale("en")
  return moment(date).format("DD")
})