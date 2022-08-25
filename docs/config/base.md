# Base 基础配置

具体配置遵循 `axios` 同步的原则

完整配置： [axios 官方文档](https://axios-http.com/docs/req_config)

## 常用配置

```TypeScript
const request = new Request({
  // 基础 URL 配置，此处为本机
  baseURL: '',
  // 超时时间，单位为ms，此处为60秒
  timeout: 6 * 1000 * 60,
  // 自定义请求头
  headers: {'X-Requested-With': 'XMLHttpRequest'},
  // 返回格式，如果需返回非JSON，请修改此处数据
  // 可选格式：'arraybuffer', 'document', 'json', 'text', 'stream','blob'
  responseType: 'json',
  // 全局拦截器
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
