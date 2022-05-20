/*
 * @Description: Request Interface
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-04-25 10:49:12
 * @LastEditors: Mirage
 * @LastEditTime: 2022-04-25 10:51:36
 */
import type { AxiosRequestConfig, AxiosResponse } from 'axios';

interface RequestInterceptors {
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  // @ts-ignore
  requestInterceptorsCatch?: (error: any) => any;

  responseInterceptors?: <T = AxiosResponse>(config: T) => T;
  // @ts-ignore
  responseInterceptorsCatch?: (error: any) => any;
}

interface CustomRequestConfig extends AxiosRequestConfig {
  interceptors?: RequestInterceptors;
}

interface ExtendsCustomRequestConfig<T> extends CustomRequestConfig {
  data?: T;
  params?: T;
}

export { RequestInterceptors, CustomRequestConfig, ExtendsCustomRequestConfig };
