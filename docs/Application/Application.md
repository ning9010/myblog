# 浏览器扩展

[chrome扩展官网](https://developer.chrome.com/docs/extensions?hl=zh-cn)

## 清单文件格式
```json
{
  // 指定扩展程序使用的清单文件格式版本。唯一支持的值是 3。
  "manifest_version": 3, 
  //标识扩展程序
  "name": "Side panel extension", 
  //用于标识扩展程序版本号的字符串。
  "version": "1.0",  
  // 用于描述 Chrome 应用商店和用户扩展程序管理页面上的扩展程序。长度上限为 132 个字符。
  "description": "Extension with a default side panel.", 
  //代表扩展程序的一个或多个图标。
  "icons": {  
    "16": "images/icon-16.png",
    "48": "images/icon-48.png",
    "128": "images/icon-128.png"
  },
  //可选。用于创建扩展程序的帐号的电子邮件地址。将 CRX 文件发布到商店必须与账号匹配。
  "author":"", 
  // 定义扩展程序图标在 Google 工具栏中的外观和行为。
  "action": { 

  },
  //可选。指定包含扩展程序 Service Worker 充当事件处理脚本。
  "background":{ 
    "service_worker": "service-worker.js",
    "type": "module"，
  },
  // 定义扩展程序侧边栏中显示的 HTML 文件。
  "side_panel": { 
    "default_path": "sidepanel.html"
  },
  //允许使用特定的扩展程序 API。
  "permissions": ["sidePanel"], 
  //matches和css/js必须。指定一个静态加载的 JavaScript 或 CSS 文件。相对路径
  "content_scripts":[{
     "matches": ["https://*.example.com/*"],
     "css": ["my-styles.css"],
     "js": ["content-script.js"],
     //可选，不将内容脚本注入到的网址格式。
     "exclude_matches": ["*://*/*foo*"], 
     //可选。在匹配项之后应用，以仅包含也与此 glob 匹配的网址。
     "include_globs": ["*example.com/???s/*"],
     //可选。在匹配项之后应用，以排除与此 glob 匹配的网址。
     "exclude_globs": ["*bar*"], 
     //用于指定是否应将内容脚本注入符合指定网址要求的所有帧。如果设置为 false，它将仅注入到最顶层的帧。它可以与 "match_about_blank" 搭配使用，注入到 about:blank 帧中。
     "all_frames": false,
     //可选。默认值为 false。脚本是否应注入由匹配的来源创建的帧，但其网址或来源可能与模式不直接匹配。其中包括具有不同架构的帧，例如 about:、data:、blob: 和 filesystem:。
     "match_origin_as_fallback": false,
     //可选。默认值为 false。脚本是否应注入到 about:blank 框架中，其中父网址与 "matches" 中声明的某个格式匹配。
     "match_about_blank": false,
     //可选。指定何时应将脚本注入到网页中。
     //document_start | document_end | document_idle 默认DOM 和资源已加载完毕。
     "run_at": "document_idle",
     //- ISOLATED | MAIN 可选。用于执行脚本的 JavaScript 环境。
     "world": "ISOLATED",
  },], 
}
```


### Title  <Badge type="warning" text="beta" >w</Badge>


