import axios from 'axios';
import store from '@/store';
import router from '@/router';
import { tip, toLogin , to403Page } from './utils.js';

/**
 * 請求失敗的統一處理
 * @param {Number} status 請求失敗的狀態碼
*/
const errorHandle = (status,msg) => {
  switch (status) {
    case 400:
      tip(msg);
      break;
    case 401:
      tip('登入過期,請重新登入');
      setTimeout(() => {
        toLogin();
      },1000)
      break;
    case 403:
      to403Page();
      break;
    case 404:
      tip(msg);
      break;
    default:
      console.log('未知錯誤 : ' + msg)
      break;
  }
}

//axios實例
let instance = axios.create({
  baseURL : 'http://localhost:8000/api',
  headers : {
     'Content-Type': 'application/json' ,

  }
});

//request攔截器
instance.interceptors.request.use(
  (config) => {
    return config;
},(error) => {
  return Promise.reject(error);
});

//response攔截器
instance.interceptors.response.use(
  (response) => {
    return response;
},(error) => {
  const { response } = error;
  //成功發出請求且resp,但有error
  if(response)
  {
    errorHandle(response.status,response.data.error);
  }
  else{
    //成功request但沒收到resp
    if(!window.navigator.onLine)
    {
      //可能是斷線
      tip('網路不順');
    }
    else
    {
      //可能是跨域,或程式問題
      return Promise.reject(error);
    }
  }
});

export default function(method,url,data = null){
  method = method.toLowerCase();

  switch (method) {
    case 'get':
      return instance.get(url,{params : data });
      break;
    case 'post':
      return instance.post(url,data);
      break;
    case 'put':
      return instance.post(url,data);
      break;
    case 'delete':
      return instance.delete(url,{params : data });
      break;
    default:
      console.log('未知method' + method);
      return false;
      break;
  }
}