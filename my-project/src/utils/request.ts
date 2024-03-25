import axios from 'axios'

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

const request = axios.create({
  baseURL: 'http://localhost:10086',
  withCredentials: false,
});


// add request interceptor
request.interceptors.request.use(config => {
    // 在请求头中设置 Content-Type
    config.headers['Content-Type'] = 'application/json';
    if (!config.data) {
        config.data = true
    }
    console.log('config--', config.headers);
    return config;
}, error => {
    return Promise.reject(error);
});

// 响应拦截器
request.interceptors.response.use(res => {
      if (!res.data.code){
          res.data.code = 200
      }
      if(res.request.responseType ===  'blob' || res.request.responseType ===  'arraybuffer'){
          return res.data
      } else {
        return  Promise.resolve(res.data)
      }
    }
)
export default request
