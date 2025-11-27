# 网络调试工具

## httpie - 超好用的 curl 替代品

HTTPie 是一个人类可读、非常优雅的 HTTP 命令行工具。

- 语法直观

- 彩色高亮

- 自动 JSON 格式化

- 支持 GET/POST/PUT/DELETE

- 更好调试接口（比 Postman 轻量）


```sh
brew install httpie
```

## ngrok - 快速暴露本地端口

ngrok 是一个把本地服务暴露到公网的隧道工具。 一句话：**让别人访问你本地的接口、Web 服务、Webhook 回调。**

- 本地 API 给别人调试
- 微信/支付类 Webhook 回调调试
- 外网访问本地前端/后端
- 移动端 App 联调
- 快速分享本地网页给他人

```sh
brew install ngrok
```

## mitmproxy —— 强大的网络代理/抓包工具

mitmproxy 是一个强大的 HTTP/HTTPS 抓包、调试、改包、代理工具。

- 抓取移动 App、Web 的网络请求
- 调试 HTTP/HTTPS 接口
- 修改请求/响应（Mock）
- 本地调试生产环境请求
- 测试接口错误情况（超时/500/延迟）
- 自动化脚本（Python）

```sh
brew install mitmproxy
```

