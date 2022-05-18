# Kagura-Axios-Request

<center>

![License](https://img.shields.io/github/license/imisty/kagura-axios-request)
![Size](https://img.shields.io/github/languages/code-size/imisty/kagura-axios-request)
![NPM Version](https://img.shields.io/npm/v/kagura-axios-request)

</center>

> 基于 `axios` 的 AJAX 二次封装，即拿即用

> 哇，文档都不会写了

> English Doc: TBD

## 目录

- [安装](#安装)
- [使用](#使用typescript)
  - [TypeScript 版](#使用typescript)
  - [JavaScript 版](#使用javascript)

## 安装

使用 `npm` 或 `yarn` 即可

```
npm install kagura-axios-request --save
```

或

```
yarn add kagura-axios-request
```

## 使用(TypeScript)

1. 实例化一个新的 `Request` 实例，所有参数遵循 `axios` 官方参数

> 具体参数可参阅 `axios` 官方文档： https://axios-http.com/docs/intro

```typescript
// server.ts

import Request from 'kagura-axios-request';
import type { CustomRequestConfig } from 'kagura-axios-request';

const request = new Request({
  baseURL: '',
  timeout: 6 * 1000 * 60,
  interceptors: {
    requestInterceptors: (config) => {
      // 此处可输入全局请求拦截器
      return config;
    },
    requestInterceptorsCatch: (error) => {
      // 此处可输入抛出全局请求拦截器错误
      return error;
    },
    responseInterceptors: (result) => {
      // 此处可输入全局响应拦截器
      return result;
    },
    responseInterceptorsCatch: (error) => {
      // 此处可输入抛出全局响应拦截器错误
      return error;
    },
  },
});
```

2. 定义一个可复用的发送请求函数

```typescript
// server.ts

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

/**
 * 可复用的发送请求函数
 */
const RequestExample = <K, T>(config: ExtendsCustomRequestConfig<K>) => {
  // 默认情况下为GET请求
  const { method = 'GET' } = config;
  // GET请求使用params
  if (method === 'GET' || method === 'get') {
    config.data = config.params;
  }
  // 此处可以输入更多
  return request.request<ResponseBody<T>>(config);
};

export default RequestExample;
```

3. 设置具体 API 方法函数

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
  data: Array<String>;
}

/**
 * 具体API地址
 */
const getListData = (data: RequestBody) => {
  return RequestExample<RequestBody, ExtraResponseBody>({
    url: '/api',
    method: 'GET',
    data,
    // 局部拦截器，不设置将使用全局实例拦截器
    interceptors: {
      requestInterceptors(response) {
        return response;
      },
      responseInterceptors(result) {
        return result;
      },
    },
  });
};
```

4. 在项目文件里使用

```typescript
/*
 * 同步方法
 */
function getListDataWithAPI() {
  // 发送参数
  const sendParams = { page: 1, size: 10 };
  getListData(sendParams)
    .then((res) => {
      // 请求成功返回
    })
    .catch((error) => {
      // 请求失败返回
    })
    .finally(() => {
      // 操作结束实行
    });
}

/*
 * 异步方法
 */
async function getListDataWithAPI() {
  // 发送参数
  const sendParams = { page: 1, size: 10 };
  try {
    const result = await getListData(sendParams);
    // 请求成功返回
  } catch (error) {
    // 请求失败返回
  } finally {
    // 操作结束实行
  }
}
```

## 使用(JavaScript)

1. 实例化一个新的 `Request` 实例，所有参数遵循 `axios` 官方参数

> 具体参数可参阅 `axios` 官方文档： https://axios-http.com/docs/intro

```javascript
// server.js

import Request from 'kagura-axios-request';

const request = new Request({
  baseURL: '',
  timeout: 6 * 1000 * 60,
  interceptors: {
    requestInterceptors: (config) => {
      // 此处可输入全局请求拦截器
      return config;
    },
    requestInterceptorsCatch: (error) => {
      // 此处可输入抛出全局请求拦截器错误
      return error;
    },
    responseInterceptors: (result) => {
      // 此处可输入全局响应拦截器
      return result;
    },
    responseInterceptorsCatch: (error) => {
      // 此处可输入抛出全局响应拦截器错误
      return error;
    },
  },
});
```

2. 定义一个可复用的发送请求函数

```javascript
// server.js

/**
 * 可复用的发送请求函数
 */
const RequestExample = (config) => {
  // 默认情况下为GET请求
  const { method = 'GET' } = config;
  // GET请求使用params
  if (method === 'GET' || method === 'get') {
    config.data = config.params;
  }
  // 此处可以输入更多
  return request.request(config);
};

export default RequestExample;
```

3. 设置具体 API 方法函数

```javascript
// api.js

/**
 * 具体API地址
 */
const getListData = (data) => {
  return RequestExample({
    url: '/api',
    method: 'GET',
    data,
    // 局部拦截器，不设置将使用全局实例拦截器
    interceptors: {
      requestInterceptors(response) {
        return response;
      },
      responseInterceptors(result) {
        return result;
      },
    },
  });
};
```

4. 在项目文件里使用

```javascript
// example.js

/*
 * 同步方法
 */
function getListDataWithAPI() {
  // 发送参数
  const sendParams = { page: 1, size: 10 };
  getListData(sendParams)
    .then((res) => {
      // 请求成功返回
    })
    .catch((error) => {
      // 请求失败返回
    })
    .finally(() => {
      // 操作结束实行
    });
}

/*
 * 异步方法
 */
async function getListDataWithAPI() {
  // 发送参数
  const sendParams = { page: 1, size: 10 };
  try {
    const result = await getListData(sendParams);
    // 请求成功返回
  } catch (error) {
    // 请求失败返回
  } finally {
    // 操作结束实行
  }
}
```

## 使用协议

MIT License
