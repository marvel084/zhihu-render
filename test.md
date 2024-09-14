<!-- 摘自 https://github.com/jks-liu/zhihu/blob/master/WPLs-introduction-and-test.md -->

# 这是文章题目

## 第一章

WPL/s 是一个在 VS Code 中发布知乎文章/回答的插件。在 VS Code 中搜索 `zhihu` ，安装即可，如下图。虽然目前排在最后一个:cry:。

| Markdown基础功能 | 支持与否 |
| :--- | :--- |
| 章节标题 | :heavy_check_mark: *1 |
| 分割线 | :heavy_check_mark: |
| 引用 | :heavy_check_mark: |
| 链接 | :heavy_check_mark: *8 |
| 图片 | :heavy_check_mark: *6 |
| 表格 | :heavy_check_mark: *2 |
| 公式 | :heavy_check_mark: |
| 代码块 | :heavy_check_mark: |
| 加粗 | :heavy_check_mark: |
| 斜体 | :heavy_check_mark: |
| 加粗斜体嵌套 | :heavy_check_mark: |
| 删除线 | :x: *3 |
| 列表 | :heavy_check_mark: |
| 参考文献 | :heavy_check_mark: *4 |

| 其它特色功能 | 支持与否 |
| :--- | :--- |
| 元数据 | :heavy_check_mark: *4 |
| 目录 | :x: *0 |
| 章节标题自动编号 | :x: *0 |
| Emoji表情 | :heavy_check_mark: *5 |
| 任务列表 | :heavy_check_mark: |


| 知乎特色功能 | 支持与否 |
| --- | --- |
| 标题 | :heavy_check_mark: *7 |
| 回答问题 | :heavy_check_mark: |
| 发布文章 | :heavy_check_mark: |
| 题图 | :heavy_check_mark: *7 |
| 链接卡片 | :heavy_check_mark: *4 |
| 视频 | :x: |
| 好物推荐 | :x: |
| 附件 | :x: |
| 标签 | :heavy_check_mark: *7 |
| 草稿 | :heavy_check_mark:|
| 赞赏 | :x: |
| 追更 | :x: |

（0）打算近期支持，star，点赞，收藏，一键三连给我动力呀

1. 最多可支持 4 级标题
2. 表格暂时不支持对齐
3. 知乎本身不支持，请大家踊跃向[知乎小管家](https://www.zhihu.com/people/zhihuadmin)提建议
4. 格式见下一小节
5. 支持大部分Emoji（很多emoji刚发的时候可以看到，但一段时间过后就会被知乎过滤掉），具体列表请查看上面的链接。
6. - 同时支持本地图片和网络链接（暂时不支持 SVG 格式）,二维码会被知乎过滤掉
7. 在元数据中指定
8. 不支持为图片设置连接



## 以下是各个功能的测试

## 插件特色功能

### 测试01：题图
如支持，应该可以在标题上面看到清明上河图。

### 链接卡片

```md
[![zhihu-link-card:本项目 GitHub 主页](http://142.171.17.85:9001/tmp_zhihu/20240910/image-20240907234154879.png)](https://github.com/jks-liu/WPL-s)
```

语法上和一个图片链接一样，但图片的文字需要以`zhihu-link-card:`开头。

不过由于图片可能上传失败，建议不使用此功能，有需要可在知乎编辑器中开启卡片。

[![zhihu-link-card:本项目 GitHub 主页](http://142.171.17.85:9001/tmp_zhihu/20240910/image-20240907234154879.png)](https://github.com/jks-liu/WPL-s)


## Markdown功能测试

### 测试01：六级标题

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
[本项目 GitHub 链接](https://github.com/jks-liu/WPL-s)

#### 图片链接
[![本项目 GitHub 主页](http://142.171.17.85:9001/tmp_zhihu/20240910/image-20240907234154879.png)](https://github.com/jks-liu/WPL-s)

#### [标题链接](https://github.com/jks-liu/WPL-s)

### 测试05：图片
SVG 格式暂不支持

<!-- ![本地 JPG 图片](pics/Along-the-River-During-the-Qingming-Festival.jpg)
`![本地 SVG 图片](pics/emission9.svg)` -->

![网络 PNG 图片](http://142.171.17.85:9001/tmp_zhihu/20240912/IMG_0096.JPG)

![jsdeliver代gitgub 不行](https://cdn.jsdelivr.net/gh/marvel084/pics/img/202409100103257.png)

![行1](https://gitee.com/drdrxp/bed/raw/_md2zhihu_foo/simple/18b61671112f3aeb-slim.jpg)

![北京政府gov上图 不行](https://ghzrzyw.beijing.gov.cn/zhengwuxinxi/zxzt/mcbhdjt/yjnr/202106/W020210624519529895414.png)

<!-- `![网络 SVG 图片](https://www.w3school.com.cn/svg/circle1.svg)` -->


### 测试06：表格
| 左对齐 | 居中 | 右对齐 |
| :-- | :-: | --: |
| 一 | 二 | 三 |
| 二一 | 二二 | 二三 |


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

- 这里[^first]你可以找到本文的Markdown原文；
- 这个[^second]也是原文，但没有说明文字；
- 重复第一个[^first].

### 测试13： :congratulations: Emoji表情
Emoji表情列表来自rxaviers的gist：<https://gist.github.com/rxaviers/7360908>。

很多表情在刚发到知乎的时候还是可以显示的，但一段时间过后就不见了。

不测试了，直接输入吧。


[^first]: https://ctext.org/wiki.pl?if=gb&chapter=552474&remap=gb#纪载宝坻县记 刘晞颜. 宝坻县记//乾隆《宝坻县志》卷十八《艺文下》, 清乾隆十年(1745)刻本, 总第620页. 哈佛燕京圖書館. 中國哲學書電子化計劃.
[^second]: https://github.com/jks-liu/zhihu/blob/master/WPLs-introduction-and-test.md