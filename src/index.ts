/*
 * @Description: Axios Encapsulation
 * @Version: 2.0
 * @Author: Miya
 * @Date: 2022-04-20 14:39:00
 * @LastEditors: Mirage
 * @LastEditTime: 2025-04-30 17:27:53
 */
import Request from './FetchRequest';

import {
  FetchRequestConfig,
  RequestInterceptor,
  ResponseInterceptor,
} from './FetchRequest';

import { RequestError } from './RequestError';

export {
  RequestError,
  FetchRequestConfig,
  RequestInterceptor,
  ResponseInterceptor,
};

export default Request;
