/*
 * @Author: Miya
 * @Version: 2.0
 * @Date: 2022-04-20 16:03:07
 * @LastEditTime: 2025-04-30 17:27:13
 * @LastEditors: Mirage
 * @Description: Fetch Request
 */
/**
 * @file FetchRequest.ts
 * @description 封装原生 Fetch API，支持拦截器、超时、取消请求、文件上传等功能
 */

import RequestError from './RequestError';

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export interface FetchRequestConfig<T = any> extends RequestInit {
  url: string;
  method?: RequestMethod;
  params?: Record<string, any>;
  data?: T;
  timeout?: number;
  isUpload?: boolean;
}

/**
 * 请求拦截器函数类型
 */
export type RequestInterceptor = (
  config: FetchRequestConfig
) => Promise<FetchRequestConfig> | FetchRequestConfig;

/**
 * 响应拦截器函数类型
 */
export type ResponseInterceptor = (response: any) => Promise<any> | any;

/**
 * 封装的 Fetch 请求类
 *
 * 提供请求、拦截器、超时、取消请求、文件上传等功能
 *
 * @example
 * ```typescript
 * const request = new FetchRequest({
 *   baseURL: '/api',
 *   timeout: 40000,
 *   withCredentials: true,
 * });
 *
 * // 发送GET请求
 * request.request({
 *   url: '/user',
 *   method: 'GET',
 *   params: { id: 123 }
 * });
 *
 * // 发送POST请求
 * request.request({
 *   url: '/user',
 *   method: 'POST',
 *   data: { name: 'John' }
 * });
 *
 * // 上传文件
 * const formData = { file: yourFile };
 * request.request({
 *   url: '/upload',
 *   method: 'POST',
 *   data: formData,
 *   isUpload: true,
 * });
 *
 * // 取消请求
 * const controller = request.createAbortController();
 * request.request({
 *   url: '/slow-api',
 *   method: 'GET',
 *   signal: controller.signal,
 * });
 * controller.abort();
 * ```
 */
export class FetchRequest {
  private baseURL: string;
  private timeout: number;
  private withCredentials: boolean;

  private requestInterceptor?: RequestInterceptor;
  private responseInterceptor?: ResponseInterceptor;

  constructor(options: {
    baseURL?: string;
    timeout?: number;
    withCredentials?: boolean;
  }) {
    this.baseURL = options.baseURL || '';
    this.timeout = options.timeout || 30000;
    this.withCredentials = options.withCredentials ?? false;
  }

  /**
   * 动态设置请求拦截器
   * @param interceptor 请求拦截器函数
   */
  public setRequestInterceptor(interceptor: RequestInterceptor) {
    this.requestInterceptor = interceptor;
  }

  /**
   * 动态设置响应拦截器
   * @param interceptor 响应拦截器函数
   */
  public setResponseInterceptor(interceptor: ResponseInterceptor) {
    this.responseInterceptor = interceptor;
  }

  /**
   * 创建一个新的 AbortController 实例，用于取消请求
   * @returns AbortController 实例
   */
  public createAbortController(): AbortController {
    return new AbortController();
  }

  /**
   * 发送请求
   * @param config 请求配置
   * @returns 返回请求结果 Promise
   */
  public async request<T = any>(config: FetchRequestConfig): Promise<T> {
    try {
      let finalConfig = { ...config };

      if (this.requestInterceptor) {
        finalConfig = await this.requestInterceptor(finalConfig);
      }

      const {
        url,
        method = 'GET',
        params,
        data,
        isUpload,
        timeout = this.timeout,
        headers,
        ...rest
      } = finalConfig;

      let fullURL = this.baseURL + url;

      // 处理GET参数
      if (params && method === 'GET') {
        const queryString = new URLSearchParams(params).toString();
        fullURL += `?${queryString}`;
      }

      const fetchConfig: RequestInit = {
        method,
        credentials: this.withCredentials ? 'include' : 'same-origin',
        headers: headers || {},
        ...rest,
      };

      if (data) {
        if (isUpload) {
          const formData = new FormData();
          Object.entries(data).forEach(([key, value]) => {
            if (Array.isArray(value)) {
              value.forEach((v) => formData.append(key, v));
            } else {
              formData.append(key, value as Blob | string);
            }
          });
          fetchConfig.body = formData;
        } else {
          fetchConfig.body = JSON.stringify(data);
          fetchConfig.headers = {
            ...fetchConfig.headers,
            'Content-Type': 'application/json',
          };
        }
      }

      const controller = new AbortController();
      fetchConfig.signal = controller.signal;

      const timeoutId = setTimeout(() => {
        controller.abort();
      }, timeout);

      const response = await fetch(fullURL, fetchConfig);
      clearTimeout(timeoutId);

      let result: any;
      const contentType = response.headers.get('content-type');

      if (contentType && contentType.includes('application/json')) {
        result = await response.json();
      } else {
        result = await response.text();
      }

      if (this.responseInterceptor) {
        return this.responseInterceptor(result);
      } else {
        return result;
      }
    } catch (error: any) {
      console.error('FetchRequest Error:', error);
      if (error.name === 'AbortError') {
        throw new RequestError('请求被取消', 'abort', undefined, error);
      }
      if (
        error instanceof TypeError &&
        error.message.includes('Failed to fetch')
      ) {
        throw new RequestError('网络连接失败', 'network', undefined, error);
      }
      if (error.message === 'The user aborted a request.') {
        throw new RequestError('请求超时或取消', 'timeout', undefined, error);
      }
      throw new RequestError(
        error.message || '未知错误',
        'unknown',
        undefined,
        error
      );
    }
  }
}

export default FetchRequest;
