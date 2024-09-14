> 包含AI生成的代码片段

# Markdown渲染为HTML支持知乎编辑器上传的脚本

2024年7月起，知乎API无法再请求到登录二维码图片，[VSCode-Zhihu](https://github.com/niudai/VSCode-Zhihu)、[WPL-s](https://github.com/jks-liu/WPL-s)等插件均无法登录。本仓库利用[jks-liu/markdown-it-zhihu-common](https://github.com/jks-liu/markdown-it-zhihu-common#readme)等包，提供了一种将Markdown渲染为知乎支持的HTML，可供直接在网页版知乎编辑器上传的方式。非规范编程，仅供应急使用。

格式支持即为`markdown-it-zhihu-common`所支持，`markdown-it-zhihu-common`支持公式、Emoji、表格、任务列表、参考文献（知乎注释）、链接卡片。Markdown语法示例见[jks-liu的示例](https://github.com/jks-liu/zhihu/blob/master/WPLs-introduction-and-test.md)，以及[结果](https://zhuanlan.zhihu.com/p/390528313)。



## 安装使用

需安装[node.js](https://nodejs.org/zh-cn)环境，下载本仓库，在本仓库根目录下安装依赖：

```bash
npm install
```

运行脚本：

```bash
node zhihu_render.js test.md
```

将会生成HTML格式的`test_zhihu.md`，可直接在网页版知乎编辑器的“文档导入”中上传。

缺点：

- 知乎编辑器只保留两级标题，其余不可见。
- 链接卡片中的图片可能不可见，有需要还是在知乎编辑器手动开启链接卡片吧



## 脚本使用

本脚本提供以下参数：

- `--image`，`-i`：图片保留markdown格式
- `--heading`，`-h`：HTML中去除一级标题，其余标题增加一级（`h2->h1, h3->h2`）

知乎编辑器中上传的md不支持本地图片，支持外链但有限制（不支持GitHub图床，支持部分国内网站，支持国外纯IP站），因此可保留md格式图片以供上传。使用本脚本前请将文中图片替换为知乎支持的外链。

[VSCode-Zhihu](https://github.com/niudai/VSCode-Zhihu)风格为`#`作为文章标题，其余标题全升一级，本脚本支持这种方式。

```bash
node zhihu_render.js test.md -ih
```



### 标题自动编号的工作流

#### 方案一：使用外部脚本给md标题编号

外部脚本添加章节编号，js渲染时保留md图片、标题升一级。可用本仓库包含的Python脚本，[pythontools/AddTitleNumber.py](https://github.com/frone/pythontools/blob/master/AddTitleNumber.py)（二级起编），另有一级起编的[脚本](https://blog.csdn.net/u012443641/article/details/126440876)。

使用第一个Python脚本：

```bash
python number.py test.md
node zhihu_render.js test_withNum.md -ih
```

得到的`test_withNum.md`，只处理标题，不改动其他内容。

![py脚本标题自动编号](https://img.earlywolf.cn/img/202409132021928.png)

运行JS脚本得到`test_withNum_zhihu.md`，在网页版知乎编辑器中上传即可。



#### 方案二：pandoc标题自动编号

pandoc控制标题升级和加编号，js渲染时保留md图片

```bash
pandoc --wrap=preserve test.md -t markdown-simple_tables-fenced_code_attributes --shift-heading-level-by=-1 -o test_numbered.md --lua-filter=heading-numbering.lua
node zhihu_render.js test_numbered.md --image
```

这里利用lua脚本在标题前自动添加编号，如`### 小节`变成`## 1.1 小节`（标题先全被提升了一级）

不过pandoc有个严重问题：无法呈现重复脚注，见此14年的issue [Markdown footnotes are duplicated · Issue #1603 · jgm/pandoc](https://github.com/jgm/pandoc/issues/1603)，至今未修。

![原markdown](https://img.earlywolf.cn/img/202409132021930.png)

![经pandoc处理后的markdown](https://img.earlywolf.cn/img/202409132021931.png)

最后得到的`test_numbered_zhihu.md`上传至知乎编辑器。



