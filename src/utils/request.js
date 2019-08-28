import axios from 'axios';
import { message } from 'antd';

/**
 * 封装
 */
const messageError = () => {
  message.error('请求发生错误，请刷新重试 !!!!', 2);
};

/**
 * 创建axios实例
 */
const instance = axios.create({
  // baseURL: 'https://api.jisuapi.com/recipe',
  baseURL: 'https://cnodejs.org/api/v1',
  timeout: 3000
});

/**
 * 拦截器
 */
// 添加请求拦截器
instance.interceptors.request.use(function(error) {
  messageError();
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function(error) {
  messageError();
  return Promise.reject(error);
});

export default instance;
