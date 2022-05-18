/*
 * @Description: AJAX Service
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-04-25 10:48:51
 * @LastEditors: Mirage
 * @LastEditTime: 2022-04-25 11:46:56
 */
import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import type { RequestInterceptors, CustomRequestConfig } from './interface';
class Request {
  // Axios Example
  public instance: AxiosInstance;
  // Custom Interceptor
  public interceptorsObject?: RequestInterceptors;

  constructor(config: CustomRequestConfig) {
    this.instance = axios.create(config);
    this.interceptorsObject = config.interceptors;

    /**
     * Example Request Interceptors
     */
    this.instance.interceptors.request.use(
      this.interceptorsObject?.requestInterceptors,
      this.interceptorsObject?.requestInterceptorsCatch
    );

    /**
     * Example Response Interceptors
     */
    this.instance.interceptors.response.use(
      this.interceptorsObject?.responseInterceptors,
      this.interceptorsObject?.responseInterceptorsCatch
    );

    /**
     * Global Request Interceptors
     */
    this.instance.interceptors.request.use(
      (request: AxiosRequestConfig) => {
        return request;
      },
      (error: any) => error
    );

    /**
     * Global Response Interceptors
     */
    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (error: any) => error
    );
  }

  public async request<T>(config: CustomRequestConfig): Promise<T> {
    if (config.interceptors?.requestInterceptors) {
      config = config.interceptors.requestInterceptors(config);
    }
    try {
      let setRequestData = await this.instance.request<T, any>(config);

      if (config.interceptors?.responseInterceptors) {
        setRequestData = await config.interceptors?.responseInterceptors<T>(
          setRequestData
        );
      }
      return setRequestData;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  }
}

export default Request;
