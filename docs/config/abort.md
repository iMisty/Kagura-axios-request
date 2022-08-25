# Abort 中止请求

当在发送请求时，如需中止本次请求发送，可以使用以下方法实行

```typescript
// example.ts

const deletePendingRequest = (url: string | Array<String>): void => {
  return request.delPendingRequest(url);
};
```

其中 `url` 表示想要取消请求的 api 地址，格式为 `string` 或 `Array<String>`

当参数格式为 `string` 时则判定为单个请求中止，当参数格式为 `Array<String>` 时，则为多个请求中止
