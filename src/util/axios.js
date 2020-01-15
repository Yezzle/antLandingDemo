import axios from 'axios'
import defaultConfig from '@/.env.json'
axios.defaults.baseURL = defaultConfig.API_HOST //'http://localhost:8888'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

export const postAddCommit = (data) => {
    return axios.post('/addCommit', data)
}

export const getCommitList = () => {
    return axios.get('/list')
}

export const deleteCommit = (listIds) => {
    return axios.post('/delete/commit', {ids: listIds})
}

export const exportList = () => {
    return axios.get('/export',null, {responseType: 'blob'})
}
