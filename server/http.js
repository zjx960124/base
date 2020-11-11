import axios from 'axios';

const http = axios.create({
  timeout: 100 * 30, // 请求超时时间
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})

/**
 * 请求拦截
 */
http.interceptors.request.use(config => {
  // dosomething 例如 请求头加上token
},error => {
  console.log(error);
  return Promise.reject(error);
})

/**
 * 响应拦截
 */
http.interceptors.response.use(config => {
  // 统一处理某些特殊返回时间 例如token失效
},error => {
  console.log(error);
  return Promise.reject(error);
})

/**
 * post请求数据处理
 * @param {*} data 数据对象
 * @param {*} openDefultdata 是否开启默认数据?
 * @param {*} contentType 数据格式
 *  json: 'application/json; charset=utf-8'
 *  form: 'application/x-www-form-urlencoded; charset=utf-8'
 */
http.adornData = (data = {}, openDefultdata = false, contentType = 'json') => {
  var defaults = {
    't': new Date().getTime()
  }
  data = openDefultdata ? merge(defaults, data) : data
  return contentType === 'json' ? JSON.stringify(data) : qs.stringify(data)
}
