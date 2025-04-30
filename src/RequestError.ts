/*
 * @Author: Mirage
 * @Version: 1.0
 * @Date: 2025-04-28 16:05:01
 * @LastEditTime: 2025-04-28 16:05:03
 * @LastEditors: Mirage
 * @Description: Request Error for Fetch
 */
/**
 * @file RequestError.ts
 * @description 自定义请求异常，封装 Fetch 的异常信息
 */

/**
 * 自定义请求错误类
 *
 * 用于封装 Fetch 请求中出现的各种异常，比如超时、取消、响应错误等。
 *
 * @example
 * ```typescript
 * try {
 *   await request.request({ url: '/user' });
 * } catch (error) {
 *   if (error instanceof RequestError) {
 *     console.error(error.statusCode, error.message);
 *   }
 * }
 * ```
 */
export class RequestError extends Error {
  /**
   * HTTP 状态码，比如 404, 500 等
   */
  public statusCode?: number;

  /**
   * 标识错误来源（例如：timeout / abort / network / response）
   */
  public type: 'timeout' | 'abort' | 'network' | 'response' | 'unknown';

  /**
   * 错误原始对象（原生 Fetch 错误）
   */
  public raw?: any;

  constructor(message: string, type: RequestError['type'], statusCode?: number, raw?: any) {
    super(message);
    this.name = 'RequestError';
    this.type = type;
    this.statusCode = statusCode;
    this.raw = raw;
  }
}

export default RequestError;
