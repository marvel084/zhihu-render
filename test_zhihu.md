<!-- 摘自 https://github.com/jks-liu/zhihu/blob/master/WPLs-introduction-and-test.md -->
<h1>这是文章题目</h1><h2>第一章</h2><p>WPL/s 是一个在 VS Code 中发布知乎文章/回答的插件。在 VS Code 中搜索 <code>zhihu</code> ，安装即可，如下图。虽然目前排在最后一个😢。</p><table data-draft-node="block" data-draft-type="table" data-size="normal"><tbody><tr>
<th style="text-align:left">Markdown基础功能</th><th style="text-align:left">支持与否</th></tr><tr>
<td style="text-align:left">章节标题</td><td style="text-align:left">✔️ *1</td></tr><tr>
<td style="text-align:left">分割线</td><td style="text-align:left">✔️</td></tr><tr>
<td style="text-align:left">引用</td><td style="text-align:left">✔️</td></tr><tr>
<td style="text-align:left">链接</td><td style="text-align:left">✔️ *8</td></tr><tr>
<td style="text-align:left">图片</td><td style="text-align:left">✔️ *6</td></tr><tr>
<td style="text-align:left">表格</td><td style="text-align:left">✔️ *2</td></tr><tr>
<td style="text-align:left">公式</td><td style="text-align:left">✔️</td></tr><tr>
<td style="text-align:left">代码块</td><td style="text-align:left">✔️</td></tr><tr>
<td style="text-align:left">加粗</td><td style="text-align:left">✔️</td></tr><tr>
<td style="text-align:left">斜体</td><td style="text-align:left">✔️</td></tr><tr>
<td style="text-align:left">加粗斜体嵌套</td><td style="text-align:left">✔️</td></tr><tr>
<td style="text-align:left">删除线</td><td style="text-align:left">❌ *3</td></tr><tr>
<td style="text-align:left">列表</td><td style="text-align:left">✔️</td></tr><tr>
<td style="text-align:left">参考文献</td><td style="text-align:left">✔️ *4</td></tr></tbody></table><table data-draft-node="block" data-draft-type="table" data-size="normal"><tbody><tr>
<th style="text-align:left">其它特色功能</th><th style="text-align:left">支持与否</th></tr><tr>
<td style="text-align:left">元数据</td><td style="text-align:left">✔️ *4</td></tr><tr>
<td style="text-align:left">目录</td><td style="text-align:left">❌ *0</td></tr><tr>
<td style="text-align:left">章节标题自动编号</td><td style="text-align:left">❌ *0</td></tr><tr>
<td style="text-align:left">Emoji表情</td><td style="text-align:left">✔️ *5</td></tr><tr>
<td style="text-align:left">任务列表</td><td style="text-align:left">✔️</td></tr></tbody></table><table data-draft-node="block" data-draft-type="table" data-size="normal"><tbody><tr>
<th>知乎特色功能</th><th>支持与否</th></tr><tr>
<td>标题</td><td>✔️ *7</td></tr><tr>
<td>回答问题</td><td>✔️</td></tr><tr>
<td>发布文章</td><td>✔️</td></tr><tr>
<td>题图</td><td>✔️ *7</td></tr><tr>
<td>链接卡片</td><td>✔️ *4</td></tr><tr>
<td>视频</td><td>❌</td></tr><tr>
<td>好物推荐</td><td>❌</td></tr><tr>
<td>附件</td><td>❌</td></tr><tr>
<td>标签</td><td>✔️ *7</td></tr><tr>
<td>草稿</td><td>✔️</td></tr><tr>
<td>赞赏</td><td>❌</td></tr><tr>
<td>追更</td><td>❌</td></tr></tbody></table><p>（0）打算近期支持，star，点赞，收藏，一键三连给我动力呀</p><ol>
<li>最多可支持 4 级标题</li><li>表格暂时不支持对齐</li><li>知乎本身不支持，请大家踊跃向<a href="https://www.zhihu.com/people/zhihuadmin">知乎小管家</a>提建议</li><li>格式见下一小节</li><li>支持大部分Emoji（很多emoji刚发的时候可以看到，但一段时间过后就会被知乎过滤掉），具体列表请查看上面的链接。</li><li>
<ul>
<li>同时支持本地图片和网络链接（暂时不支持 SVG 格式）,二维码会被知乎过滤掉</li></ul></li><li>在元数据中指定</li><li>不支持为图片设置连接</li></ol><h2>以下是各个功能的测试</h2><h2>插件特色功能</h2><h3>测试01：题图</h3><p>如支持，应该可以在标题上面看到清明上河图。</p><h3>链接卡片</h3><pre lang="md">[![zhihu-link-card:本项目 GitHub 主页](http://142.171.17.85:9001/tmp_zhihu/20240910/image-20240907234154879.png)](https://github.com/jks-liu/WPL-s)
</pre><p>语法上和一个图片链接一样，但图片的文字需要以<code>zhihu-link-card:</code>开头。</p><p>不过由于图片可能上传失败，建议不使用此功能，有需要可在知乎编辑器中开启卡片。</p><p><a href="https://github.com/jks-liu/WPL-s" data-draft-node="block" data-draft-type="link-card" data-image="http://142.171.17.85:9001/tmp_zhihu/20240910/image-20240907234154879.png" data-image-width="640" data-image-height="480">本项目 GitHub 主页</a></p><h2>Markdown功能测试</h2><h3>测试01：六级标题</h3><h4>三级标题</h4><h5>四级标题</h5><h6>五级标题</h6><h3>测试02：分割线</h3><hr>
<h3>测试03：引用</h3><blockquote>
<p>引用</p><pre lang="latex">  \usepackage{ctex}
</pre></blockquote><h3>测试04：链接</h3><p><a href="https://github.com/jks-liu/WPL-s">本项目 GitHub 链接</a></p><h4>图片链接</h4><p><a href="https://github.com/jks-liu/WPL-s"><img src="http://142.171.17.85:9001/tmp_zhihu/20240910/image-20240907234154879.png_1440whttp://142.171.17.85:9001/tmp_zhihu/20240910/image-20240907234154879.png" data-caption="本项目 GitHub 主页" data-size="normal" data-watermark="original" data-original-src="http://142.171.17.85:9001/tmp_zhihu/20240910/image-20240907234154879.png_rhttp://142.171.17.85:9001/tmp_zhihu/20240910/image-20240907234154879.png"/></a></p><h4><a href="https://github.com/jks-liu/WPL-s">标题链接</a></h4><h3>测试05：图片</h3><p>SVG 格式暂不支持</p><!-- ![本地 JPG 图片](pics/Along-the-River-During-the-Qingming-Festival.jpg)
`![本地 SVG 图片](pics/emission9.svg)` -->
<p><img src="http://142.171.17.85:9001/tmp_zhihu/20240912/IMG_0096.JPG_1440whttp://142.171.17.85:9001/tmp_zhihu/20240912/IMG_0096.JPG" data-caption="网络 PNG 图片" data-size="normal" data-watermark="original" data-original-src="http://142.171.17.85:9001/tmp_zhihu/20240912/IMG_0096.JPG_rhttp://142.171.17.85:9001/tmp_zhihu/20240912/IMG_0096.JPG"/></p><p><img src="https://cdn.jsdelivr.net/gh/marvel084/pics/img/202409100103257_1440w.png" data-caption="jsdeliver代gitgub 不行" data-size="normal" data-watermark="original" data-original-src="https://cdn.jsdelivr.net/gh/marvel084/pics/img/202409100103257_r.png"/></p><p><img src="https://gitee.com/drdrxp/bed/raw/_md2zhihu_foo/simple/18b61671112f3aeb-slim_1440w.jpg" data-caption="行1" data-size="normal" data-watermark="original" data-original-src="https://gitee.com/drdrxp/bed/raw/_md2zhihu_foo/simple/18b61671112f3aeb-slim_r.jpg"/></p><p><img src="https://ghzrzyw.beijing.gov.cn/zhengwuxinxi/zxzt/mcbhdjt/yjnr/202106/W020210624519529895414_1440w.png" data-caption="北京政府gov上图 不行" data-size="normal" data-watermark="original" data-original-src="https://ghzrzyw.beijing.gov.cn/zhengwuxinxi/zxzt/mcbhdjt/yjnr/202106/W020210624519529895414_r.png"/></p><!-- `![网络 SVG 图片](https://www.w3school.com.cn/svg/circle1.svg)` -->
<h3>测试06：表格</h3><table data-draft-node="block" data-draft-type="table" data-size="normal"><tbody><tr>
<th style="text-align:left">左对齐</th><th style="text-align:center">居中</th><th style="text-align:right">右对齐</th></tr><tr>
<td style="text-align:left">一</td><td style="text-align:center">二</td><td style="text-align:right">三</td></tr><tr>
<td style="text-align:left">二一</td><td style="text-align:center">二二</td><td style="text-align:right">二三</td></tr></tbody></table><h3>测试07：公式</h3><p>行内公式：<img src="https://www.zhihu.com/equation?tex=%5Calpha%20=%20%5Cbeta" alt="[公式]" eeimg="1" data-formula="\alpha = \beta">，<img src="https://www.zhihu.com/equation?tex=%E4%BA%BF=%E7%88%B1%E6%85%95*%E5%9B%9B%E4%B8%80%5E%7B%E5%B9%B3%E6%96%B9%7D" alt="[公式]" eeimg="1" data-formula="亿=爱慕*四一^{平方}"></p><p>行间公式：</p><p><img src="https://www.zhihu.com/equation?tex=%5Calpha%20=%20%5Cbeta%0A" alt="[公式]" eeimg="1" data-formula="\alpha = \beta
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
<li>这里<sup data-text="刘晞颜. 宝坻县记//乾隆《宝坻县志》卷十八《艺文下》, 清乾隆十年(1745)刻本, 总第620页. 哈佛燕京圖書館. 中國哲學書電子化計劃." data-url="https://ctext.org/wiki.pl?if=gb&amp;chapter=552474&amp;remap=gb#纪载宝坻县记" data-draft-node="inline" data-draft-type="reference" data-numero="first">[first]</sup>你可以找到本文的Markdown原文；</li><li>这个<sup data-text="" data-url="https://github.com/jks-liu/zhihu/blob/master/WPLs-introduction-and-test.md" data-draft-node="inline" data-draft-type="reference" data-numero="second">[second]</sup>也是原文，但没有说明文字；</li><li>重复第一个<sup data-text="刘晞颜. 宝坻县记//乾隆《宝坻县志》卷十八《艺文下》, 清乾隆十年(1745)刻本, 总第620页. 哈佛燕京圖書館. 中國哲學書電子化計劃." data-url="https://ctext.org/wiki.pl?if=gb&amp;chapter=552474&amp;remap=gb#纪载宝坻县记" data-draft-node="inline" data-draft-type="reference" data-numero="first">[first]</sup>.</li></ul><h3>测试13： ㊗️ Emoji表情</h3><p>Emoji表情列表来自rxaviers的gist：<a href="https://gist.github.com/rxaviers/7360908">https://gist.github.com/rxaviers/7360908</a>。</p><p>很多表情在刚发到知乎的时候还是可以显示的，但一段时间过后就不见了。</p><p>不测试了，直接输入吧。</p>