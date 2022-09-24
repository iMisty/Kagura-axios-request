# @miramiya/request (Kagura-Axios-Request)

<center>

![License](https://img.shields.io/github/license/imisty/kagura-axios-request)
![Size](https://img.shields.io/github/languages/code-size/imisty/kagura-axios-request)
![NPM Version](https://img.shields.io/npm/v/@miramiya/request)

</center>

> 基于 `axios` 的 AJAX 二次封装，即拿即用

## 目录

- [安装](#安装)
- [初始化](#初始化)
- [文档](#参考文档)

## 安装

使用 `npm` 或 `yarn` 即可

```
npm install @miramiya/request --save
```

或

```
yarn add @miramiya/request
```

## 初始化

```TypeScript
// request.ts
import Request from '@miramiya/request';
import type { CustomRequestConfig } from '@miramiya/request';
import { AxiosResponse } from 'axios';

/**
 *  定义自定义请求类型接口并继承于CustomRequestConfig
 */
interface ExtendsCustomRequestConfig<T> extends CustomRequestConfig {
  data?: T;
  params?: T;
}

/**
 *  定义服务器返回数据的响应体接口
 */
interface ResponseBody<T> {
  // 服务器定义返回code
  code: number;
  // 服务器定义返回文字
  message: string;
  // 服务器定义返回数据
  data: T;
}

const request = new Request({
  baseURL: ''
})

const RequestExample = <K, T>(config: ExtendsCustomRequestConfig<K>) => {
  // 默认情况下为GET请求
  const { method = 'GET' } = config;
  // GET请求使用params
  if (method === 'GET' || method === 'get') {
    config.data = config.params;
  }
  // 此处可以输入更多
  return request.request<AxiosResponse<ResponseBody<T>>>(config);
};

export default RequestExample;
```

### 定义具体 API 参数

```typescript
// api.ts

/**
 * 该API请求参数接口
 */
interface RequestBody {
  // 当前页码
  page: number;
  // 单页数据量
  size: number;
  // 搜索关键词
  search?: string;
}

/**
 * 该API响应参数接口
 */
interface ExtraResponseBody {
  records: Array<String>;
}

/**
 * 具体API地址
 */
const getListData = (data: RequestBody) => {
  return RequestExample<RequestBody, ExtraResponseBody>({
    url: '/api',
    method: 'GET',
    data,
  });
};
```

## 参考文档

[HomePage](https://imisty.github.io/Kagura-axios-request/)

~~你甚至还有心情弄个看板娘~~

## 使用协议

MIT License
