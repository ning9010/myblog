# 01. Markdown语法

[toc] 

## **标题**

```markdown
# 这是一级标题

## 这是二级标题

###### 这是六级标题
```



## **引用文字**

```markdown
> 这是一个有两段的块引用。这是第一段。
>
> 这是第二段。Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
> 这是另一个只有一个段落的块引用。有三个空行分隔两个块引用。
```

> 这是一个有两段的块引用。这是第一段。
>
> 这是第二段。
> 这是另一个只有一个段落的块引用。有三个空行分隔两个块引用。



## **列表**

```markdown
- 无序列表
*   红色
*   绿色
*   蓝色

- 有序列表
1.  红色
2. 	绿色
3.	蓝色
```
-  无序列表
*   红色
*   绿色
*   蓝色

- 有序列表
1.  红色
2. 	绿色
3.	蓝色



## **任务列表**
```markdown
- [ ] 这是一个任务列表项
- [ ] 需要在前面使用列表的语法
- [ ] normal **formatting**, @mentions, #1234 refs
- [ ] 未完成
- [x] 完成
```
- [ ] 这是一个任务列表项
- [ ] 需要在前面使用列表的语法
- [ ] normal **formatting**, @mentions, #1234 refs
- [ ] 未完成
- [x] 完成



## **代码块**
```js
function test() {
  console.log("notice the blank line before this function?");
}
```
```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```



## **数学公式块**

$$
\mathbf{V}_1 \times \mathbf{V}_2 =  \begin{vmatrix} 
\mathbf{i} & \mathbf{j} & \mathbf{k} \\
\frac{\partial X}{\partial u} &  \frac{\partial Y}{\partial u} & 0 \\
\frac{\partial X}{\partial v} &  \frac{\partial Y}{\partial v} & 0 \\
\end{vmatrix}
$$



## **表格**
| First Header | Second Header |
| ------------ | ------------- |
| Content Cell | Content Cell  |
| Content Cell | Content Cell  |




## **脚注**
您可以像这样创建脚注[^footnote].

[^footnote]: Here is the *text* of the **footnote**.


## **水平线**
输入 *** 或 --- 在空行上按 return 键将绘制一条水平线。
```markdown
***
```
***

```markdown
---
```
---

## 目录 (TOC)

输入 [toc] 然后按 Return 键将创建一个“目录”部分，自动从文档内容中提取所有标题，其内容会自动更新。

## 链接
Markdown 支持两种类型的链接：内联和引用。
在这两种样式中，链接文本都写在[方括号]内。
```markdown
This is [an example](http://example.com/ "Title") inline link.

[This link](http://example.net/) has no title attribute.
```

This is [an example](http://example.com/ "Title") inline link.

[This link](http://example.net/) has no title attribute.

```markdown
内部链接
This is [an example][id] reference-style link.

然后，在文档中的任何位置，您可以单独定义链接标签，如下所示：

[id]: http://example.com/  "Optional Title Here"
```

This is [an example][id] reference-style link.

然后，在文档中的任何位置，您可以单独定义链接标签，如下所示：

[id]: http://example.com/  "Optional Title Here"

## URL网址

Typora允许您将 URL 作为链接插入，用 <括号括起来>。
```markdown
<i@typora.io>
```
<i@typora.io>

## 图片

```markdown
![替代文字](/path/to/img.jpg)

![替代文字](/path/to/img.jpg "可选标题")
```
## 强调（斜体）

```markdown
*单个星号*

_单个下划线_
````

*单个星号*

_单个下划线_

## 粗体

```markdown
**双星号**

__双重下划线__
```
**双星号**

__双重下划线__

## 代码

```markdown
使用`printf()`函数。
```

使用`printf()`函数。

## 删除线

```markdown
~~错误的文字。~~
```

~~错误的文字。~~

## 下划线

```
<u>下划线</u>
```

<u>下划线</u>

## 表情符号 :smile



```markdown
:smile:
```

:smile:

## 高亮

```markdown
 ==highlight==
```

 ==highlight==

