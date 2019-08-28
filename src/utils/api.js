import request from './request';

/**
 * 获取首页每项菜单栏对应的菜
 */
export const getItem = data => {
  return request({
    url: '/topics',
    method: 'get',
    params: data
  });
};
