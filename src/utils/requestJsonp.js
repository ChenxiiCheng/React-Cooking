import JsonP from 'jsonp';
import { message } from 'antd';

export default class Axios {
  static jsonp(options) {
    return new Promise((resolve, reject) => {
      JsonP(
        options.url,
        {
          params: 'callback'
        },
        function(err, res) {
          if (res.status === 0) {
            message.success(res.msg, 1);
            resolve(res);
          } else {
            message.error(res.msg, 1);
          }
        }
      );
    });
  }
}
