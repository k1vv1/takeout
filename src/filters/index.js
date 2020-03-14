/**
 * 自定义过滤器模块
 */
import Vue from 'vue'
// import moment from 'moment'
import format from 'date-fns/format'

Vue.filter('dateString', function (value, formatStr) {
    // return moment(value).format(format || 'YYYY-MM-DD HH:mm:ss')
    return format(value, formatStr || 'yyyy-MM-dd HH:mm:ss')
})