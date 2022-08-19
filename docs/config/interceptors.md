# 拦截器

可以设置全局或者局部拦截器用于在 `ajax` 实施前后进行拦截处理以便进行操作,或捕获错误

## 全局拦截器

在初始化实例时可选设置全局拦截器,此处拦截器将对该实例下的所有请求产生作用

### 在新建示例时设置拦截器

```TypeScript
import Request from '@miramiya/request';
import type { CustomRequestConfig } from '@miramiya/request';

const request = new Request({
  baseURL: '',
  timeout: 6 * 1000 * 60,
  /**
   * 此处开始为拦截器设置
   */
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

### 拦截器对应 type

接口 `CustomRequestConfig` 继承于 `axios` 的 `AxiosRequestConfig` 及 ` AxiosResponse` 接口,使拦截器享受 `axios` 对应类型约束及类型提示

```TypeScript
import type { AxiosRequestConfig, AxiosResponse } from 'axios';

interface RequestInterceptors {
  // 发送前拦截器
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  // 捕获发送前错误拦截器
  // @ts-ignore
  requestInterceptorsCatch?: (error: any) => any;

  // 发送后拦截器
  responseInterceptors?: <T = AxiosResponse>(config: T) => T;
  // 捕获发送后错误拦截器
  // @ts-ignore
  responseInterceptorsCatch?: (error: any) => any;
}

interface CustomRequestConfig extends AxiosRequestConfig {
  interceptors?: RequestInterceptors;
}
```

## 局部拦截器

可以对任意初始化后的 api 接口处配置单独的拦截器

此处 type 类型请参阅 [具体 API 类型接口](/config/api)

```typescript
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
    // 局部拦截器，不设置将使用全局实例拦截器
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
};
```

## 优先级

全局拦截器将优先于局部拦截器
