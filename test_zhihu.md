<!-- 摘自 https://github.com/jks-liu/zhihu/blob/master/WPLs-introduction-and-test.md -->
<h1>这是文章题目</h1><p>本文为脚本测试文档：<a href="https://github.com/marvel084/zhihu-render">marvel084/zhihu-render</a></p><h2>支持的功能</h2><ul>
<li>Markdown基础功能 ：章节标题、分割线、引用、链接、图片、表格、<strong>公式</strong>、代码块、加粗、斜体、删除线、有序列表、无序列表</li><li><code>markdown-it-zhihu-common</code>中追加的功能：任务列表、Emoji支持</li><li>支持知乎特色功能：脚注（知乎注释）、链接卡片</li><li>本脚本能够完成的特殊功能：渲染时提升标题等级</li><li>使用外部程序完成的功能：章节自动编号</li></ul><h2>以下是各个功能的测试</h2><h3>测试-1：题图</h3><p>题图请自己在知乎编辑器中上传</p><h3>测试0：链接卡片</h3><pre lang="md">[![zhihu-link-card:本项目 GitHub 主页](http://142.171.17.85:9001/tmp_zhihu/20240910/image-20240907234154879.png)](https://github.com/jks-liu/WPL-s)
</pre><p>语法上和一个图片链接一样，但图片的文字需要以<code>zhihu-link-card:</code>开头。</p><p>不过由于图片可能上传失败，建议不使用此功能，有需要可在知乎编辑器中开启卡片。</p><p><a href="https://github.com/marvel084/zhihu-render" data-draft-node="block" data-draft-type="link-card" data-image="http://142.171.17.85:9001/tmp_zhihu/20240910/image-20240907234154879.png" data-image-width="640" data-image-height="480">含图片</a></p><p><a href="https://github.com/marvel084/zhihu-render" data-draft-node="block" data-draft-type="link-card" data-image="" data-image-width="640" data-image-height="480">无图片</a></p><h3>测试01：标题</h3><p>知乎最多可支持 4 级标题，不过知乎编辑器中只支持两级标题，不过考虑到更小标题渲染均一致，只是标签都变成<code>&lt;h2&gt;</code>，若不生成目录，也不妨使用。以往使用VSCode插件发布文章后，若再用知乎编辑器编辑文章，或启用目录，或添加标签，则小标题会全变成2级。</p><h4>三级标题</h4><h5>四级标题</h5><h6>五级标题</h6><h3>测试02：分割线</h3><hr>
<h3>测试03：引用</h3><blockquote>
<p>引用</p><pre lang="latex">  \usepackage{ctex}
</pre></blockquote><h3>测试04：链接</h3><p><a href="https://github.com/jks-liu/WPL-s">jks-liu/WPL-s的链接</a></p><h4>图片链接</h4><p><a href="https://github.com/jks-liu/WPL-s"><img src="http://142.171.17.85:9001/tmp_zhihu/20240910/image-20240907234154879.png" alt="本项目 GitHub 主页" /></a></p><h4><a href="https://github.com/jks-liu/WPL-s">标题链接</a></h4><h3>测试05：图片</h3><p>SVG 格式暂不支持。</p><p>Markdown文档中图片请预先替换成外链，知乎对图床也有限制：GitHub图床无法使用，反代到GitHub的均不可以；国内的部分网站不可以；国外纯IP站反倒可以；</p><!-- ![本地 JPG 图片](pics/Along-the-River-During-the-Qingming-Festival.jpg)
`![本地 SVG 图片](pics/emission9.svg)` -->
<p><img src="http://142.171.17.85:9001/tmp_zhihu/20240912/IMG_0096.JPG" alt="国外纯IP站图片 行" /></p><p><img src="https://cdn.jsdelivr.net/gh/marvel084/pics/img/202409100103257.png" alt="jsdeliver代gitgub 不行" /></p><p><img src="https://gitee.com/drdrxp/bed/raw/_md2zhihu_foo/simple/18b61671112f3aeb-slim.jpg" alt="国内gitee站 行" /></p><p><img src="https://ghzrzyw.beijing.gov.cn/zhengwuxinxi/zxzt/mcbhdjt/yjnr/202106/W020210624519529895414.png" alt="北京政府gov网站图 有时候不行" /></p><!-- `![网络 SVG 图片](https://www.w3school.com.cn/svg/circle1.svg)` -->
<h3>测试06：表格</h3><table data-draft-node="block" data-draft-type="table" data-size="normal"><tbody><tr>
<th style="text-align:left">左对齐</th><th style="text-align:center">居中</th><th style="text-align:right">右对齐</th></tr><tr>
<td style="text-align:left">一</td><td style="text-align:center">二</td><td style="text-align:right">三</td></tr><tr>
<td style="text-align:left">二一</td><td style="text-align:center">二二</td><td style="text-align:right">二三</td></tr></tbody></table><p>知乎表格暂时不支持对齐。</p><h3>测试07：公式</h3><p>行内公式：<img src="https://www.zhihu.com/equation?tex=%5Calpha%20=%20%5Cbeta" alt="[公式]" eeimg="1" data-formula="\alpha = \beta">，<img src="https://www.zhihu.com/equation?tex=%E4%BA%BF=%E7%88%B1%E6%85%95*%E5%9B%9B%E4%B8%80%5E%7B%E5%B9%B3%E6%96%B9%7D" alt="[公式]" eeimg="1" data-formula="亿=爱慕*四一^{平方}"></p><p>行间公式：</p><p><img src="https://www.zhihu.com/equation?tex=%5Calpha%20=%20%5Cbeta%0A" alt="[公式]" eeimg="1" data-formula="\alpha = \beta
"></p><p><img src="https://www.zhihu.com/equation?tex=%E4%BA%BF=%E7%88%B1%E6%85%95*%E5%9B%9B%E4%B8%80%5E%7B%E5%B9%B3%E6%96%B9%7D%0A" alt="[公式]" eeimg="1" data-formula="亿=爱慕*四一^{平方}
"></p><h3>测试08：代码</h3><p>行内代码：<code>var a = 1;</code>。</p><p>行间代码：</p><pre lang="py">print(&quot;Hello, World!&quot;)
</pre><h4>测试08.1：代码<code>int a</code>在标题中</h4><h3>测试09：<strong>加粗</strong>， <em>斜体</em>， <s>删除线</s></h3><p><strong>加粗</strong>， <em>斜体</em>， <s>删除线</s>，<em>斜体</em>，<strong>加粗</strong>，<em>斜体组合<strong>加粗</strong></em>，<strong>加粗组合<em>斜体</em></strong></p><h3>测试10：列表</h3><ul>
<li>第一项</li><li>第二项</li></ul><ol>
<li>第一项</li><li>第二项</li></ol><ul>
<li>嵌套
<ol>
<li>嵌套<br>
换行</li></ol></li></ul><h3>测试11：任务列表</h3><ul>
<li>⚪未完成的任务</li><li>☑️已完成的任务
<ul>
<li>⚪嵌套未完成的任务</li><li>☑️嵌套已完成的任务</li></ul></li></ul><h3>测试12：参考文献</h3><pre lang="md">用[^n]来引用。

[^n]: https://网址.com 说明文字
</pre><p>注意字符 ^ 不能少。冒号后面有一个空格。网址中不能有空格。网址和说明文字之间有一个空格，说明文字自己可以有空格。</p><ul>
<li>这里<sup data-text="刘晞颜. 宝坻县记//乾隆《宝坻县志》卷十八《艺文下》, 清乾隆十年(1745)刻本, 总第620页. 哈佛燕京圖書館. 中國哲學書電子化計劃." data-url="https://ctext.org/wiki.pl?if=gb&amp;chapter=552474&amp;remap=gb#纪载宝坻县记" data-draft-node="inline" data-draft-type="reference" data-numero="first">[first]</sup>测试脚注，url中含有非法字符；</li><li>这个<sup data-text="" data-url="https://github.com/jks-liu/zhihu/blob/master/WPLs-introduction-and-test.md" data-draft-node="inline" data-draft-type="reference" data-numero="second">[second]</sup>无说明文字的脚注；</li><li>重复第一个<sup data-text="刘晞颜. 宝坻县记//乾隆《宝坻县志》卷十八《艺文下》, 清乾隆十年(1745)刻本, 总第620页. 哈佛燕京圖書館. 中國哲學書電子化計劃." data-url="https://ctext.org/wiki.pl?if=gb&amp;chapter=552474&amp;remap=gb#纪载宝坻县记" data-draft-node="inline" data-draft-type="reference" data-numero="first">[first]</sup>.</li></ul><h3>测试13： ㊗️ Emoji表情</h3><p>Emoji表情列表来自rxaviers的gist：<a href="https://gist.github.com/rxaviers/7360908">https://gist.github.com/rxaviers/7360908</a>。</p><p>很多表情在刚发到知乎的时候还是可以显示的，但一段时间过后就不见了。</p><p>不测试了，直接输入吧。</p>