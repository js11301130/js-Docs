(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{489:function(s,t,a){"use strict";a.r(t);var n=a(28),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"忽略规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#忽略规则"}},[s._v("#")]),s._v(" 忽略规则")]),s._v(" "),a("blockquote",[a("p",[s._v("首先你需要在项目根目录下新建一个 "),a("code",[s._v(".gitignore")]),s._v(" 文件")])]),s._v(" "),a("ul",[a("li",[s._v("空格不匹配任何文件，可以作为分隔符号；")]),s._v(" "),a("li",[s._v("以 "),a("code",[s._v("#")]),s._v(" 开始的为注释；")]),s._v(" "),a("li",[a("code",[s._v("\\")]),s._v(" 表示转义符；")]),s._v(" "),a("li",[a("code",[s._v("!")]),s._v(" 开始的表示否定，也就是开启跟踪；")]),s._v(" "),a("li",[a("code",[s._v("/")]),s._v(" 开始的表示项目根目录；")]),s._v(" "),a("li",[a("code",[s._v("/")]),s._v(" 结尾的表示某个文件夹，但是不匹配该文件；")]),s._v(" "),a("li",[a("code",[s._v("**")]),s._v(" 表示多级，其位置可在开始，中间，结束；")]),s._v(" "),a("li",[a("code",[s._v("?")]),s._v(" 表示单个字符；")]),s._v(" "),a("li",[a("code",[s._v("[]")]),s._v(" 表示单个字符列表；")])]),s._v(" "),a("h2",{attrs:{id:"忽略示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#忽略示例"}},[s._v("#")]),s._v(" 忽略示例")]),s._v(" "),a("h3",{attrs:{id:"_1-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-文件"}},[s._v("#")]),s._v(" 1. 文件")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 忽略 所有 a.txt 文件")]),s._v("\na.txt\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 仅忽略根目录下的 a.txt 文件")]),s._v("\n/a.txt\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 忽略 config 目录下的 secret.json")]),s._v("\nconfig/secret.json\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 忽略 所有的 .env 结尾的文件")]),s._v("\n*.env\n")])])]),a("h3",{attrs:{id:"_2-目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-目录"}},[s._v("#")]),s._v(" 2. 目录")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 忽略 node_modules 目录")]),s._v("\nnode_modules/\n")])])]),a("h3",{attrs:{id:"_3-取反"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-取反"}},[s._v("#")]),s._v(" 3. 取反")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 跟踪 public 目录下的 .env 文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("public/.env\n")])])]),a("h3",{attrs:{id:"_4-组合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-组合"}},[s._v("#")]),s._v(" 4. 组合")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 忽略 docs 下的所有 .md 文件")]),s._v("\ndocs/*.md "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这是错误的，因为不能忽略 `docs/git/` 目录下的文件")]),s._v("\ndocs/**/*.md "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 正确结果")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 忽略以 .a 、.b 或 .c 结尾的文件")]),s._v("\n*."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("abc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 正确")]),s._v("\n*."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("a-c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 也正确")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 忽略 docs 下的除 secret 命名的所有文件")]),s._v("\ndocs/\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("docs/secret.*\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 忽略 src 下的所有 index.js 文件")]),s._v("\nsrc/**/index.js\n")])])]),a("h2",{attrs:{id:"规则不生效"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#规则不生效"}},[s._v("#")]),s._v(" 规则不生效")]),s._v(" "),a("p",[a("code",[s._v(".gitignore")]),s._v(" 指定的是未跟踪文件，已经跟踪的（tracked）不受影响。")]),s._v(" "),a("p",[s._v("解决方法就是清除本地缓存再提交：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" --cached\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 示例 -- 取消某个文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" --cached a.txt\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 示例 -- 取消某个文件夹")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -r --cached a/\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 示例 -- 取消所有文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -r --cached "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);