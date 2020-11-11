import axios from 'axios';

const http = axios.create({
  timeout: 100 * 30, // ����ʱʱ��
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})

/**
 * ��������
 */
http.interceptors.request.use(config => {
  // dosomething ���� ����ͷ����token
},error => {
  console.log(error);
  return Promise.reject(error);
})

/**
 * ��Ӧ����
 */
http.interceptors.response.use(config => {
  // ͳһ����ĳЩ���ⷵ��ʱ�� ����tokenʧЧ
},error => {
  console.log(error);
  return Promise.reject(error);
})

/**
 * post�������ݴ���
 * @param {*} data ���ݶ���
 * @param {*} openDefultdata �Ƿ���Ĭ������?
 * @param {*} contentType ���ݸ�ʽ
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
