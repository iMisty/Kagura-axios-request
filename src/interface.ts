/*
 * @Description: Request Interface
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-04-25 10:49:12
 * @LastEditors: Miya
 * @LastEditTime: 2023-03-03 17:54:32
 */
import type { AxiosRequestConfig, AxiosResponse } from 'axios';

interface RequestInterceptors {
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorsCatch?: (error: any) => any;

  responseInterceptors?: (response: AxiosResponse) => Promise<AxiosResponse>;
  responseInterceptorsCatch?: (error: any) => Promise<any>;
}

interface CustomRequestConfig extends AxiosRequestConfig {
  interceptors?: RequestInterceptors;
}

interface ExtendsCustomRequestConfig<T> extends CustomRequestConfig {
  data?: T;
  params?: T;
}
interface CancelRequestSource {
  [index: string]: () => void;
}

export {
  RequestInterceptors,
  CustomRequestConfig,
  ExtendsCustomRequestConfig,
  CancelRequestSource,
};
