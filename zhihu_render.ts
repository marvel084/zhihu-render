/* 
    zhihu_render moonhikari 2024/09/13
*/

import * as MarkdownIt from "markdown-it";
import markdown_it_zhihu from "markdown-it-zhihu-common";
import * as fs from "fs";
import * as path from "path"
import * as yargs from 'yargs';

import {escapeHtml} from './md-html-util'
import {unescapeMd} from './md-html-util'

const argv = yargs
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
const input_file = argv._[0];

const zhihuMdParser = new MarkdownIt({ html: true }).use(markdown_it_zhihu);
let MdStr = fs.readFileSync(input_file, 'utf8');
let tokens = zhihuMdParser.parse(MdStr, {});


/* =====================================以下为调整功能================================= */

if (argv.image){
    /* 图片保留markdown格式 */
    zhihuMdParser.renderer.rules.image = function (tokens, idx, options, env, self) {
        const token = tokens[idx];
        const alt = token.content;
        const src = token.attrs[token.attrIndex('src')][1];
        return `![${alt}](${src})`;
    };
}

if (argv.equrl){
    /* 重写公式渲染成知乎支持的URL，与 https://github.com/pluveto/ZhihuFormulaConvert 一致*/
    zhihuMdParser.renderer.rules.math_inline = (tokens, idx) => {
        return `<img src="https://www.zhihu.com/equation?tex=` + encodeURI(tokens[idx].content) + `" alt="[公式]" eeimg="1" data-formula="`+ escapeHtml(tokens[idx].content) + `">`;
    };
    
    zhihuMdParser.renderer.rules.math_block = (tokens, idx) => {  
        return `<p><img src="https://www.zhihu.com/equation?tex=` + encodeURI(tokens[idx].content) + `" alt="[公式]" eeimg="1" data-formula="`+ escapeHtml(tokens[idx].content) + `"></p>`;
    };
}

if (argv.heading){
    /* 标题提升一级 */
    let bgIndex: number; //题图Index，本文不使用
    const openIndex = tokens.findIndex( //一级标题Index
        (t) => t.type == "heading_open" && t.tag == "h1"
    );
    const endIndex = tokens.findIndex(
        (t) => t.type == "heading_close" && t.tag == "h1"
    );

    const originalHeadingOpen = zhihuMdParser.renderer.rules.heading_open || function(tokens, idx, options, env, self) {
        return self.renderToken(tokens, idx, options);
    };
    const originalHeadingClose = zhihuMdParser.renderer.rules.heading_close || function(tokens, idx, options, env, self) {
        return self.renderToken(tokens, idx, options);
    };
    zhihuMdParser.renderer.rules.heading_open = function (tokens, idx, options, env, self) {
        // 获取当前标题的标签名 (h1, h2, h3, ...)
        const tag = tokens[idx].tag;

        // 提升标题层级，例如将 h2 变为 h1，h3 变为 h2
        const newTagLevel = Math.max(1, parseInt(tag[1]) - 1);  // 限制最小层级为 h1
        tokens[idx].tag = 'h' + newTagLevel;

        // 调用原有的渲染函数
        return originalHeadingOpen(tokens, idx, options, env, self);
    };
    zhihuMdParser.renderer.rules.heading_close = function (tokens, idx, options, env, self) {
        // 获取当前标题的标签名 (h1, h2, h3, ...)
        const tag = tokens[idx].tag;

        // 提升标题层级，使 closing tag 和 opening tag 保持一致
        const newTagLevel = Math.max(1, parseInt(tag[1]) - 1);  // 限制最小层级为 h1
        tokens[idx].tag = 'h' + newTagLevel;

        // 调用原有的渲染函数
        return originalHeadingClose(tokens, idx, options, env, self);
    };

    /* 去除一级标题 */
    // 摘自VSCode-Zhihu https://github.com/niudai/VSCode-Zhihu/blob/master/src/service/publish.service.ts#L369
    tokens = tokens.filter(_removeTitleAndBg(openIndex, bgIndex));
}
//H1以前的 不是题图的内容留下，剩余删除
function  _removeTitleAndBg(openIndex: number, bgIndex: number) {
    return (t, i) => Math.abs(openIndex + 1 - i) > 1 && bgIndex != i;
}
/* ================================================================================= */

let html = zhihuMdParser.renderer.render(tokens, {}, {});
// fs.writeFileSync(path.join(__dirname, 'test_zhihu.md'), html)
fs.writeFileSync(path.join(path.dirname(input_file),(path.basename(input_file,'.md')+'_zhihu.md')), html)