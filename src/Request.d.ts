import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
interface RequestInterceptors {
    requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig;
    requestInterceptorsCatch?: (error: any) => any;
    responseInterceptors?: <T = AxiosResponse>(config: T) => T;
    responseInterceptorsCatch?: (error: any) => any;
}
interface CustomRequestConfig extends AxiosRequestConfig {
    interceptors?: RequestInterceptors;
}
declare class Request {
    instance: AxiosInstance;
    interceptorsObject?: RequestInterceptors;
    constructor(config: CustomRequestConfig);
    request<T>(config: CustomRequestConfig): Promise<T | unknown>;
}
export default Request;
