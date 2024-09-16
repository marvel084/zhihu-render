"use strict";
/*
    zhihu_render moonhikari 2024/09/13
*/
Object.defineProperty(exports, "__esModule", { value: true });
var MarkdownIt = require("markdown-it");
var markdown_it_zhihu_common_1 = require("markdown-it-zhihu-common");
var fs = require("fs");
var path = require("path");
var yargs = require("yargs");
var md_html_util_1 = require("./md-html-util");
var argv = yargs
    .option('image', {
    alias: 'i',
    description: 'Keep markdown image grammar',
    type: 'boolean',
    // demandOption: false,
    default: false
})
    .option('heading', {
    alias: 'h',
    description: 'Shift HTML heading level +1',
    type: 'boolean',
    // demandOption: false,
    default: false
})
    .option('equrl', {
    alias: 'e',
    description: 'Equation render 2020 Zhihu style URL',
    type: 'boolean',
    // demandOption: false,
    default: false
})
    .argv;
var input_file = argv._[0];
var zhihuMdParser = new MarkdownIt({ html: true }).use(markdown_it_zhihu_common_1.default);
var MdStr = fs.readFileSync(input_file, 'utf8');
var tokens = zhihuMdParser.parse(MdStr, {});
/* =====================================以下为调整功能================================= */
if (argv.image) {
    /* 图片保留markdown格式 */
    zhihuMdParser.renderer.rules.image = function (tokens, idx, options, env, self) {
        var token = tokens[idx];
        var alt = token.content;
        var src = token.attrs[token.attrIndex('src')][1];
        // return `![${alt}](${src}) `;
        return "<img src=\"".concat(src, "\" alt=\"").concat(alt, "\" />");
    };
}
if (argv.equrl) {
    /* 重写公式渲染成知乎支持的URL，与 https://github.com/pluveto/ZhihuFormulaConvert 一致*/
    zhihuMdParser.renderer.rules.math_inline = function (tokens, idx) {
        return "<img src=\"https://www.zhihu.com/equation?tex=" + encodeURI(tokens[idx].content) + "\" alt=\"[\u516C\u5F0F]\" eeimg=\"1\" data-formula=\"" + (0, md_html_util_1.escapeHtml)(tokens[idx].content) + "\">";
    };
    zhihuMdParser.renderer.rules.math_block = function (tokens, idx) {
        return "<p><img src=\"https://www.zhihu.com/equation?tex=" + encodeURI(tokens[idx].content) + "\" alt=\"[\u516C\u5F0F]\" eeimg=\"1\" data-formula=\"" + (0, md_html_util_1.escapeHtml)(tokens[idx].content) + "\"></p>";
    };
}
if (argv.heading) {
    /* 标题提升一级 */
    var bgIndex = //题图Index，本文不使用
     void 0; //题图Index，本文不使用
    var openIndex = tokens.findIndex(//一级标题Index
    function (t) { return t.type == "heading_open" && t.tag == "h1"; });
    var endIndex = tokens.findIndex(function (t) { return t.type == "heading_close" && t.tag == "h1"; });
    var originalHeadingOpen_1 = zhihuMdParser.renderer.rules.heading_open || function (tokens, idx, options, env, self) {
        return self.renderToken(tokens, idx, options);
    };
    var originalHeadingClose_1 = zhihuMdParser.renderer.rules.heading_close || function (tokens, idx, options, env, self) {
        return self.renderToken(tokens, idx, options);
    };
    zhihuMdParser.renderer.rules.heading_open = function (tokens, idx, options, env, self) {
        // 获取当前标题的标签名 (h1, h2, h3, ...)
        var tag = tokens[idx].tag;
        // 提升标题层级，例如将 h2 变为 h1，h3 变为 h2
        var newTagLevel = Math.max(1, parseInt(tag[1]) - 1); // 限制最小层级为 h1
        tokens[idx].tag = 'h' + newTagLevel;
        // 调用原有的渲染函数
        return originalHeadingOpen_1(tokens, idx, options, env, self);
    };
    zhihuMdParser.renderer.rules.heading_close = function (tokens, idx, options, env, self) {
        // 获取当前标题的标签名 (h1, h2, h3, ...)
        var tag = tokens[idx].tag;
        // 提升标题层级，使 closing tag 和 opening tag 保持一致
        var newTagLevel = Math.max(1, parseInt(tag[1]) - 1); // 限制最小层级为 h1
        tokens[idx].tag = 'h' + newTagLevel;
        // 调用原有的渲染函数
        return originalHeadingClose_1(tokens, idx, options, env, self);
    };
    /* 去除一级标题 */
    // 摘自VSCode-Zhihu https://github.com/niudai/VSCode-Zhihu/blob/master/src/service/publish.service.ts#L369
    tokens = tokens.filter(_removeTitleAndBg(openIndex, bgIndex));
}
//H1以前的 不是题图的内容留下，剩余删除
function _removeTitleAndBg(openIndex, bgIndex) {
    return function (t, i) { return Math.abs(openIndex + 1 - i) > 1 && bgIndex != i; };
}
/* ================================================================================= */
var html = zhihuMdParser.renderer.render(tokens, {}, {});
// fs.writeFileSync(path.join(__dirname, 'test_zhihu.md'), html)
fs.writeFileSync(path.join(path.dirname(input_file), (path.basename(input_file, '.md') + '_zhihu.md')), html);
