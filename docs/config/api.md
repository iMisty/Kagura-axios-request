# API 具体 API 地址

在进行了实例初始化后，即可使用实例定义具体 API 地址请求，以便调用

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

## 类型接口

### RequestBody

此 `interface` 将指定发送请求时的参数配置，此处配置为常用的获取表格数据需使用的参数，可根据实际需要进行修改

```TypeScript
interface RequestBody {
  // 当前页码
  page: number;
  // 单页数据量
  size: number;
  // 搜索关键词
  search?: string;
}
```

### ExtraResponseBody

由于 `ResponseBody` 已经在实例初始化时占用，因此位于 `ResponseBody` 中服务器返回数据的`type T` 使用 `ExtraResponseBody` 替代。此处`ExtraResponseBody` 返回数据格式为 `Array<String>`

```TypeScript
// request.ts
interface ResponseBody<T> {
  // 服务器定义返回code
  code: number;
  // 服务器定义返回文字
  message: string;
  // 服务器定义返回数据
  data: T;
}
// api.ts
interface ExtraResponseBody {
  records: Array<String>;
}
```

## 实例返回数据

根据以上请求发送的数据服务器会返回以下格式数据，供参考


```json
{
  "code": 200,
  "message": "ok",
  "data": {
    "records": [1, 2, 3, 4, 5]
  }
}
```
