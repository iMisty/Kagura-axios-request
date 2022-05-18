/*
 * @Description: Axios Encapsulation
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-04-20 14:39:00
 * @LastEditors: Mirage
 * @LastEditTime: 2022-04-25 10:53:13
 */
import Request from './Request';

import {
  RequestInterceptors,
  CustomRequestConfig,
  ExtendsCustomRequestConfig,
} from './interface';

export { RequestInterceptors, CustomRequestConfig, ExtendsCustomRequestConfig };

export default Request;
