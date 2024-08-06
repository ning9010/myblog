# gin
Gin 是一个用 Go (Golang) 编写的 Web 框架。

GitHub 地址：[https://github.com/gin-gonic/gin](https://github.com/gin-gonic/gin)

中文文档：[https://gin-gonic.com/zh-cn/docs/](https://gin-gonic.com/zh-cn/docs/)

## 特性
- 基于 Radix 树的路由，小内存占用。没有反射。可预测的 API 性能。
- 传入的 HTTP 请求可以由一系列中间件和最终操作来处理。 例如：Logger，Authorization，GZIP，最终操作 DB。
- Gin 可以 catch 一个发生在 HTTP 请求中的 panic 并 recover 它。这样，你的服务器将始终可用。例如，你可以向 Sentry 报告这个 panic！
- Gin 可以解析并验证请求的 JSON，例如检查所需值的存在。
- 更好地组织路由。是否需要授权，不同的 API 版本…… 此外，这些组可以无限制地嵌套而不会降低性能。
- Gin 提供了一种方便的方法来收集 HTTP 请求期间发生的所有错误。最终，中间件可以将它们写入日志文件，数据库并通过网络发送。
- Gin 为 JSON，XML 和 HTML 渲染提供了易于使用的 API。
- 可扩展性

## 安装

```shell
go get -u github.com/gin-gonic/gin
```
导入包

```go
import "github.com/gin-gonic/gin"
```
## Hello world
```go
package main

import (
    "github.com/gin-gonic/gin"
    "net/http"
)

func main() {
    router := gin.Default()
    router.GET("/", func(c *gin.Context) {
        c.String(http.StatusOK, "Hello World")
    })
    router.Run(":8000") 
}
```
> - `router:=gin.Default()`：这是默认的服务器。使用gin的Default方法创建一个路由Handler
> - 然后通过Http方法绑定路由规则和路由函数。不同于net/http库的路由函数，gin进行了封装，把request和response都封装到了gin.Context的上下文环境中。
> 最后启动路由的Run方法监听端口。还可以用`http.ListenAndServe(":8080", router)`，或者自定义Http服务器配置。

## 路由


## 控制器
数据解析绑定
模型绑定可以将请求体绑定给一个类型。目前Gin支持JSON、XML、YAML和标准表单值的绑定。
Gin提供了两套绑定方法：
- Must bind
  - 方法：Bind,BindJSON,BindXML,BindQuery,BindYAML
  - 行为：这些方法使用MustBindWith。如果存在绑定错误，则用c终止请求，使用c.AbortWithError (400) .SetType (ErrorTypeBind)即可。将响应状态代码设置为400，Content-Type header设置为text/plain;charset = utf - 8。


- Should bind
  - 方法：ShouldBind,ShouldBindJSON,ShouldBindXML,ShouldBindQuery,ShouldBindYAML
  - 行为：这些方法使用ShouldBindWith。如果存在绑定错误，则返回错误，开发人员有责任适当地处理请求和错误。

## 响应

## 中间件middleware
中间件分为全局中间件，单个路由中间件和群组中间件。  
