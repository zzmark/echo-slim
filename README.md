# echo 探针服务端

提供几个简易的 API，经常用于探索 webhook报文、测试环境提供的参数等

会在后台打印请求信息的日志，echo 会将请求的参数直接返回

该版本十分简单，报文的兼容性很差，不提供完善的 API 报文处理，凑合着用

## Usage


```sh
npm i # or "yarn"
```

```sh
npm run serve # or "yarn serve"
```

## API 

`GET /echo`

`POST /echo`

req: any

resp:
```
{
  time: new Date(),
  method: req.method,
  url: req.url,
  headers: req.headers,
  param: req.params,
  query: req.query,
  body: req.body
}
```

---

`GET /**`

`POST /**`

req: any

resp:
```
Hello World
```
