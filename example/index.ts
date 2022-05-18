/*
 * @Description: Example
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-04-21 18:10:39
 * @LastEditors: Mirage
 * @LastEditTime: 2022-04-25 10:52:07
 */
import Request from '../src/Request';
import type { ExtendsCustomRequestConfig } from '../src/interface';

// 发送请求方法

// 接收请求方法
interface ResponseBody<T> {
  code: number;
  message: string;
  data: T;
}

/**
 *
 * 实例化
 *
 */
const request = new Request({
  baseURL: '',
  timeout: 6000,
  interceptors: {
    requestInterceptors: (config) => {
      return config;
    },
    requestInterceptorsCatch: (error) => {
      return error;
    },
    responseInterceptors: (result) => {
      return result;
    },
    responseInterceptorsCatch: (error) => {
      return error;
    },
  },
});

// 示例请求实例
const RequestExample = <K, T>(config: ExtendsCustomRequestConfig<K>) => {
  const { method = 'GET' } = config;
  // GET请求使用params
  if (method === 'GET' || method === 'get') {
    config.data = config.params;
  }
  return request.request<ResponseBody<T>>(config);
};

// 实例请求方法
interface Req {
  page: number;
  size: number;
}
interface Res {
  data: Array<any>;
}

const getJSONData = (data: Req) => {
  return RequestExample<Req, Res>({
    url: '/api',
    method: 'GET',
    data,
    interceptors: {
      requestInterceptors(response) {
        return response;
      },
      responseInterceptors(result) {
        return result;
      },
    },
  });
};
