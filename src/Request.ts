/*
 * @Description: AJAX Service
 * @Version: 1.1
 * @Author: Mirage
 * @Date: 2022-04-25 10:48:51
 * @LastEditors: Mirage
 * @LastEditTime: 2023-04-27 20:48:28
 */
import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import type {
  RequestInterceptors,
  CustomRequestConfig,
  CancelRequestSource,
} from './interface';

class Request {
  // Axios Example
  public instance: AxiosInstance;
  // Custom Interceptor
  public interceptorsObject?: RequestInterceptors;
  // Array for Now Pending Request
  public listRequestURL?: string[];
  // Array for Now Cancel Pending Request
  public listRequestCancelSource?: CancelRequestSource[];

  /** @constructor */
  constructor(config: CustomRequestConfig) {
    /**
     * @constructor
     * Array for Now Pending Request
     */
    this.listRequestURL = [];

    /**
     * @constructor
     * Array for Now Cancel Pending Request
     */
    this.listRequestCancelSource = [];

    /**
     * @constructor
     * Axios instance
     */
    this.instance = axios.create(config);

    /**
     * @constructor
     * Interceptors for Axios instance
     */
    this.interceptorsObject = config.interceptors;

    /**
     * @constructor
     * Example Request Interceptors
     */
    this.instance.interceptors.request.use(
      this.interceptorsObject?.requestInterceptors,
      this.interceptorsObject?.requestInterceptorsCatch
    );

    /**
     * @constructor
     * Example Response Interceptors
     */
    this.instance.interceptors.response.use(
      this.interceptorsObject?.responseInterceptors,
      this.interceptorsObject?.responseInterceptorsCatch
    );

    /**
     * @constructor
     * Global Request Interceptors
     */
    this.instance.interceptors.request.use(
      (request: AxiosRequestConfig) => {
        return request;
      },
      (error: any) => error
    );

    /**
     * @constructor
     * Global Response Interceptors
     */
    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (error: any) => error
    );
  }

  /**
   * @description Get URL Index in listRequestURL
   * @param url {string} Request URL
   * @returns {number} URL in List Index
   */
  private getURLSourceIndex(url: string): number {
    return this.listRequestCancelSource?.findIndex(
      (item: CancelRequestSource) => {
        return Object.keys(item)[0] === url;
      }
    ) as number;
  }

  /**
   * @description Cancel Pending Request Method
   * @param url {string | Array<string>} URL Request List
   */
  private delPendingRequestMethod(url: string):void {
    const getUrlIndex = this.listRequestURL?.findIndex((item) => item === url);
    const getSourceIndex = this.getURLSourceIndex(url);

    getUrlIndex !== -1 && this.listRequestURL?.splice(getUrlIndex as number, 1);
    getSourceIndex !== -1 &&
      this.listRequestCancelSource?.splice(getSourceIndex as number, 1);
  }

  /**
   * @description Main Method for AJAX Request
   * @param config {CustomRequestConfig} Axios Config
   * @returns {Promise<T>} XMLHttpRequest Return Data
   */
  public async request<T>(config: CustomRequestConfig): Promise<T> {
    if (config.interceptors?.requestInterceptors) {
      config = config.interceptors.requestInterceptors(config);
    }
    const url: string = config.url!;
    this.listRequestURL?.push(url);

    try {
      config.cancelToken = new axios.CancelToken((link) => {
        this.listRequestCancelSource?.push({
          [url]: link,
        });
      });

      let setRequestData = await this.instance.request<T, any>(config);

      if (config.interceptors?.responseInterceptors) {
        setRequestData = await config.interceptors?.responseInterceptors(
          setRequestData
        );
      }
      return setRequestData;
    } catch (error: any) {
      return error;
    } finally {
      url && this.delPendingRequestMethod(url);
    }
  }

  /**
   * @description Cancel All Pending Request Method
   */
  public delAllPendingRequestMethod() {
    this.listRequestCancelSource?.forEach((source) => {
      const key = Object.keys(source)[0];
      source[key]();
    });
  }

  /**
   * @description Cancel Pending Request Method for Example API
   * @param url {string | Array<string>} URL Request List
   */
  public delPendingRequest(url: string | Array<string>) {
    if (typeof url === 'string') {
      const sourceIndex = this.getURLSourceIndex(url);
      sourceIndex >= 0 && this.listRequestCancelSource?.[sourceIndex][url]();
    } else {
      url.forEach((item) => {
        const sourceIndex = this.getURLSourceIndex(item);
        sourceIndex >= 0 && this.listRequestCancelSource?.[sourceIndex][item]();
      });
    }
  }
}

export default Request;
