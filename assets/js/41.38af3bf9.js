(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{418:function(t,s,a){"use strict";a.r(s);var n=a(28),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数"}},[t._v("#")]),t._v(" 函数")]),t._v(" "),a("p",[t._v("函数定义从 "),a("code",[t._v("function")]),t._v(" 关键字开始，构成函数主体的 JavaScript 代码在定义之时并不会执行，只有调用该函数时，它们才会执行。")]),t._v(" "),a("blockquote",[a("p",[t._v("var 只有变量声明提前，变量的初始化代码仍然在原来的位置；然而 function 则会使函数名称和函数体均提前。")])]),t._v(" "),a("h2",{attrs:{id:"调用函数的方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调用函数的方式"}},[t._v("#")]),t._v(" 调用函数的方式")]),t._v(" "),a("ol",[a("li",[t._v("作为函数")]),t._v(" "),a("li",[t._v("作为方法")]),t._v(" "),a("li",[t._v("作为构造函数")]),t._v(" "),a("li",[t._v("通过 call 和 apply 方法间接调用")])]),t._v(" "),a("h3",{attrs:{id:"_1-函数调用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-函数调用"}},[t._v("#")]),t._v(" 1. 函数调用")]),t._v(" "),a("p",[t._v("对于普通的函数调用，函数的返回值成为调用表达式的值。如果该函数返回是因为解释器到达结尾，返回值就是 undefined。如果函数返回是因为解释器执行到一条 return 语句，返回值就是 return 之后的表达式的值，如果 return 语句没有值，则返回 undefined。")]),t._v(" "),a("p",[t._v("函数形式调用的函数通常不使用 this 关键字。不过，“this” 可以用来判断当前是否是严格模式。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义并调用一个函数来确定当前脚本是否为严格模式")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" strict "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"_2-方法调用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-方法调用"}},[t._v("#")]),t._v(" 2. 方法调用")]),t._v(" "),a("p",[t._v("一个方法无非是个保存在一个对象的属性里的 JavaScript 函数。函数本身就是一个属性访问表达式，这意味着该函数被当做一个方法，而不是一个普通函数来调用。")]),t._v(" "),a("p",[t._v("对方法调用的参数和返回值的处理，和普通函数调用完全一致。但是，方法调用和函数调用有一个重要的区别，即：调用上下文。属性访问表达式由两部分组成：一个对象和属性名称。在像这样的方法调用表达式中，对象成为调用上下文，函数体可以使用关键字 this 引用该对象。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" calculator "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对象直接量")]),t._v("\n  operand1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  operand2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this 指向当前对象")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("operand1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("operand2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\ncalculator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 方法调用")]),t._v("\ncalculator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2")]),t._v("\n")])])]),a("p",[t._v("方法调用可能包括更复杂的属性访问表达式：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("customer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("surname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toUpperCase")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 访问属性为字符串调用原型链上的方法")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("m")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在调用 f 结束后继续调用返回值中的方法 m")]),t._v("\n")])])]),a("p",[t._v("和变量不同，关键字 this 没有作用域的限制，嵌套的函数不会从调用它的函数中继承 this。如果嵌套函数作为方法调用，其 this 的值指向调用它的对象。如果嵌套函数作为函数调用，其 this 值不是全局对象（非严格模式下）就是 undefined（严格模式下）。因此若想访问外部函数的 this 值，那么就需要将 this 保存在变量中（变量具有作用域）。")]),t._v(" "),a("h3",{attrs:{id:"_3-构造函数调用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-构造函数调用"}},[t._v("#")]),t._v(" 3. 构造函数调用")]),t._v(" "),a("p",[t._v("如果函数或者方法调用之前带有关键字 new，它就构成构造函数调用。构造函数调用和普通函数的而调用以及方法调用在实参处理、调用上下文和返回值方法都有不同。")]),t._v(" "),a("blockquote",[a("p",[t._v("上下文的不同也就造成了 "),a("strong",[t._v("类")]),t._v(" 的由来：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 普通函数 this 在严格模式下为 undefined")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Car")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("color "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("p",[t._v("如果构造函数调用在圆括号内包含一组实参列表，先计算这些实参表达式，然后传入函数内，这与函数调用和方法调用是一致的。但如果构造函数没有形参，JavaScript 构造函数调用的语法是允许省略实参列表和圆括号的。")]),t._v(" "),a("blockquote",[a("p",[t._v("当传入的参数个数超过函数定义时的形参个数时，可使用参数对象 "),a("code",[t._v("arguments")]),t._v(" 解决该问题。在函数体内，标识符 "),a("code",[t._v("arguments")]),t._v(" 是指向实参对象的引用。")]),t._v(" "),a("p",[t._v("在默认模式下可以通过 "),a("code",[t._v("arguments[n]")]),t._v(" 来修改实参对象；在严格模式下，它变成一个保留字，无法给 "),a("code",[t._v("arguments")]),t._v(" 赋值。")]),t._v(" "),a("p",[t._v("严格模式下访问 "),a("code",[t._v("arguments")]),t._v(" 的 "),a("code",[t._v("callee")]),t._v(" 和 "),a("code",[t._v("caller（非标准）")]),t._v(" 会产出错误。")])]),t._v(" "),a("p",[t._v("凡是没有形参的构造函数调用都可以省略圆括号，如：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" o "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 等价于")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" o "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\no"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("所有对象都会从它的原型上继承一个 "),a("code",[t._v("constructor")]),t._v(" 属性，该属性的值是 “构造函数” 的引用。")])]),t._v(" "),a("p",[t._v("构造函数调用会创建一个新的空对象，这个对象继承自构造函数的 prototype 属性。构造函数试图初始化这个新创建的对象，并将这个对象用作其调用上下文，因此构造函数可以使用 this 关键字来引用这个新创建的对象。注意，尽管构造函数看起来像一个方法调用，它依然会使用这个新对象作为调用上下文。也就是说，在表达式 "),a("code",[t._v("new o.m();")]),t._v(" 中，调用上下文并不是 o。")]),t._v(" "),a("p",[t._v("构造函数通常不使用 return 关键字，它们通常初始化新对象，当构造函数的函数体执行完毕时，它会显式返回。在这种情况下，构造函数调用表达式的计算结果就是这个新对象的值。然而如果构造函数显式地使用 return 语句返回一个对象，那么调用表达式的值就是这个对象。如果构造函数使用 return 语句但是没有指定返回值，或者返回一个原始值，那么这时将忽略返回值，同时使用这个新对象作为调用结果。")]),t._v(" "),a("h3",{attrs:{id:"_4-间接调用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-间接调用"}},[t._v("#")]),t._v(" 4. 间接调用")]),t._v(" "),a("p",[t._v("JavaScript 中的函数也是对象，和其他 JavaScript 对象没有什么两样，函数对象也可以包含方法。其中两个方法 "),a("code",[t._v("call")]),t._v(" 和 "),a("code",[t._v("apply")]),t._v(" 可以用来间接地调用函数。两个方法都允许显式指定调用所需的 this 值，也就是说，任何函数可以作为任何对象的方法调用，哪怕这个函数不是那个对象的方法。两个方法都可以指定调用的实参，"),a("code",[t._v("call")]),t._v(" 方法使用它自有的实参列表作为函数的参数，"),a("code",[t._v("apply")]),t._v(" 方法则要求以数组的形式传入参数。")])])}),[],!1,null,null,null);s.default=e.exports}}]);