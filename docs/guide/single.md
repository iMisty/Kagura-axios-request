# 快速起步

这个页面将从 0 开始新建一个可以用的实例.此处将使用 `TypeScript` 做为案例.如使用 `JavaScript`,则请根据实际情况删除对应的类型指示及接口指示

## 开始

> npm install axios @miramiya/request --save

或者

> yarn add axios @miramiya/request

## 第 1 步: 新建一个实例

这个实例采用了最简单的方法,参数及方法与 [axios](https://axios-http.com/docs/intro) 一致

```TypeScript
// utils/request.ts

import Request from '@miramiya/request';
import type { CustomRequestConfig } from '@miramiya/request';

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
  return request.request<ResponseBody<T>>(config);
};

export default RequestExample;
```

## 第 2 步: 定义具体 API

```typescript
// api/api.ts
import RequestExample from "@/utils/request.ts";
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
    url: "/api",
    method: "GET",
    data,
  });
};
```

## 第 3 步: 具体文件内使用

```TypeScript

const getListDataWithAPI = async() => {
  // 发送参数
  const sendParams = { page: 1, size: 10 };
  try {
    const result = await getListData(sendParams);
    // 请求成功返回
  } catch (error) {
    console.error(error);
    // 请求失败返回
  } finally {
    // 操作结束实行
  }
}
```

## 结语

至此,您已经初始化并且已经可以使用一个通用且携带类型提示的 ajax 实例.该实例只包含最基础的配置,包括:

- 发送URL为本地
- 超时时间为 20 秒
- 发送方式为 `application/json`
- Get 请求将使用 `query` 方式,其它请求使用 `Response Body`
- 无额外 `headers` 配置
- 无拦截器配置

其余配置请看下一页