<!-- 摘自 https://github.com/jks-liu/zhihu/blob/master/WPLs-introduction-and-test.md -->

# 这是文章题目

本文为脚本测试文档：[marvel084/zhihu-render](https://github.com/marvel084/zhihu-render)

## 支持的功能

- Markdown基础功能 ：章节标题、分割线、引用、链接、图片、表格、**公式**、代码块、加粗、斜体、删除线、有序列表、无序列表
- `markdown-it-zhihu-common`中追加的功能：任务列表、Emoji支持
- 支持知乎特色功能：脚注（知乎注释）、链接卡片
- 本脚本能够完成的特殊功能：渲染时提升标题等级
- 使用外部程序完成的功能：章节自动编号

## 以下是各个功能的测试

### 测试-1：题图
题图请自己在知乎编辑器中上传

### 测试0：链接卡片

```md
[![zhihu-link-card:本项目 GitHub 主页](http://142.171.17.85:9001/tmp_zhihu/20240910/image-20240907234154879.png)](https://github.com/jks-liu/WPL-s)
```

语法上和一个图片链接一样，但图片的文字需要以`zhihu-link-card:`开头。

不过由于图片可能上传失败，建议不使用此功能，有需要可在知乎编辑器中开启卡片。

[![zhihu-link-card:测试连接卡片](http://142.171.17.85:9001/tmp_zhihu/20240910/image-20240907234154879.png)](https://github.com/marvel084/zhihu-render)


### 测试01：标题

知乎最多可支持 4 级标题，不过知乎编辑器中只支持两级标题，不过考虑到更小标题渲染均一致，只是标签都变成`<h2>`，若不生成目录，也不妨使用。以往使用VSCode插件发布文章后，若再用知乎编辑器编辑文章，或启用目录，或添加标签，则小标题会全变成2级。

#### 三级标题
##### 四级标题
###### 五级标题


### 测试02：分割线

---

### 测试03：引用

> 引用
> 
> ```latex
>   \usepackage{ctex}
> ```
>

### 测试04：链接
[jks-liu/WPL-s的链接](https://github.com/jks-liu/WPL-s)

#### 图片链接
[![本项目 GitHub 主页](http://142.171.17.85:9001/tmp_zhihu/20240910/image-20240907234154879.png)](https://github.com/jks-liu/WPL-s)

#### [标题链接](https://github.com/jks-liu/WPL-s)

### 测试05：图片
SVG 格式暂不支持。

Markdown文档中图片请预先替换成外链，知乎对图床也有限制：GitHub图床无法使用，反代到GitHub的均不可以；国内的部分网站不可以；国外纯IP站反倒可以；

<!-- ![本地 JPG 图片](pics/Along-the-River-During-the-Qingming-Festival.jpg)
`![本地 SVG 图片](pics/emission9.svg)` -->

![国外纯IP站图片 行](http://142.171.17.85:9001/tmp_zhihu/20240912/IMG_0096.JPG)

![jsdeliver代gitgub 不行](https://cdn.jsdelivr.net/gh/marvel084/pics/img/202409100103257.png)

![国内gitee站 行](https://gitee.com/drdrxp/bed/raw/_md2zhihu_foo/simple/18b61671112f3aeb-slim.jpg)

![北京政府gov网站图 有时候不行](https://ghzrzyw.beijing.gov.cn/zhengwuxinxi/zxzt/mcbhdjt/yjnr/202106/W020210624519529895414.png)

<!-- `![网络 SVG 图片](https://www.w3school.com.cn/svg/circle1.svg)` -->


### 测试06：表格
| 左对齐 | 居中 | 右对齐 |
| :-- | :-: | --: |
| 一 | 二 | 三 |
| 二一 | 二二 | 二三 |

知乎表格暂时不支持对齐。

### 测试07：公式
行内公式：$\alpha = \beta$，$亿=爱慕*四一^{平方}$

行间公式：
$$
\alpha = \beta
$$
$$
亿=爱慕*四一^{平方}
$$

### 测试08：代码
行内代码：`var a = 1;`。

行间代码：

```py
print("Hello, World!")
```

#### 测试08.1：代码`int a`在标题中

### 测试09：**加粗**， *斜体*， ~~删除线~~
**加粗**， *斜体*， ~~删除线~~，_斜体_，__加粗__，_斜体组合**加粗**_，__加粗组合*斜体*__

### 测试10：列表
* 第一项
* 第二项

1. 第一项
2. 第二项

* 嵌套
    1. 嵌套  
    换行

### 测试11：任务列表
- [ ] 未完成的任务
- [x] 已完成的任务
    - [ ] 嵌套未完成的任务
    - [x] 嵌套已完成的任务

### 测试12：参考文献
```md
用[^n]来引用。

[^n]: https://网址.com 说明文字
```

注意字符 ^ 不能少。冒号后面有一个空格。网址中不能有空格。网址和说明文字之间有一个空格，说明文字自己可以有空格。

- 这里[^first]测试脚注，url中含有非法字符；
- 这个[^second]无说明文字的脚注；
- 重复第一个[^first].

### 测试13： :congratulations: Emoji表情
Emoji表情列表来自rxaviers的gist：<https://gist.github.com/rxaviers/7360908>。

很多表情在刚发到知乎的时候还是可以显示的，但一段时间过后就不见了。

不测试了，直接输入吧。


[^first]: https://ctext.org/wiki.pl?if=gb&chapter=552474&remap=gb#纪载宝坻县记 刘晞颜. 宝坻县记//乾隆《宝坻县志》卷十八《艺文下》, 清乾隆十年(1745)刻本, 总第620页. 哈佛燕京圖書館. 中國哲學書電子化計劃.
[^second]: https://github.com/jks-liu/zhihu/blob/master/WPLs-introduction-and-test.md