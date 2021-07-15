(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{402:function(t,a,s){"use strict";s.r(a);var e=s(28),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("p",[t._v("Flutter 官网地址为 "),s("a",{attrs:{href:"https://flutter.dev/",target:"_blank",rel:"noopener noreferrer"}},[t._v("flutter.dev"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("开发环境为 "),s("code",[t._v("manjaro")]),t._v("。")]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("补充")]),t._v(" "),s("p",[t._v("有意思的是，当我重新安装 "),s("code",[t._v("flutter")]),t._v(" 后：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 此处为 gitlab 非 gitee")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/flutter/flutter.git\n")])])]),s("p",[t._v("以下在安装和使用时遇到的问题就消失了，但其中发生了什么也不可考究了。")]),t._v(" "),s("p",[t._v("所以不妨先按以下进行操作，最后再切换为 "),s("code",[t._v("github")]),t._v(" 的仓库。")])]),t._v(" "),s("h2",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),s("h3",{attrs:{id:"_1-flutter-sdk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-flutter-sdk"}},[t._v("#")]),t._v(" 1. Flutter SDK")]),t._v(" "),s("p",[t._v("官网推荐最简单的方式是使用 "),s("code",[t._v("snap")]),t._v("，而 "),s("a",{attrs:{href:"https://snapcraft.io/docs/installing-snapd",target:"_blank",rel:"noopener noreferrer"}},[t._v("snapd"),s("OutboundLink")],1),t._v(" 是支持 manjaro 的，那么直接安装它：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# snap 官网说 manjaro 预装了 snap，但可惜的是我这边并没有")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" pacman -S snapd\n")])])]),s("p",[t._v("接着就可以安装 "),s("code",[t._v("flutter")]),t._v(" 了：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" snap "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" flutter --classic\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# error: cannot communicate with server: Post "http://localhost/v2/snaps/flutter": dial unix /run/snapd.socket: connect: no such file or directory')]),t._v("\n")])])]),s("p",[t._v("糟糕的是，安装失败了，"),s("a",{attrs:{href:"https://askubuntu.com/questions/1258137/cannot-communicate-with-server-post-http-localhost-v2-apps-dial-unix-run-sn",target:"_blank",rel:"noopener noreferrer"}},[t._v("找到解决方法"),s("OutboundLink")],1),t._v("：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl unmask snapd.service\nsystemctl start snapd.service\n")])])]),s("p",[t._v("再继续执行上一步的安装命令，等待安装完成。")]),t._v(" "),s("p",[t._v("当然，由于网速问题，我选择了使用 "),s("code",[t._v("git")]),t._v(" 下载的方式，并使用了 "),s("code",[t._v("gitee")]),t._v(" 的仓库：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修正 gitee 仓库名为 flutter")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://gitee.com/mirrors/Flutter.git flutter -b stable --depth "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])]),s("h3",{attrs:{id:"_2-添加环境变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-添加环境变量"}},[t._v("#")]),t._v(" 2. 添加环境变量")]),t._v(" "),s("p",[t._v("再将其路径写到 "),s("code",[t._v(".bashrc")]),t._v(" 或 "),s("code",[t._v(".zshrc")]),t._v(" 等 "),s("code",[t._v("rc")]),t._v(" 文件写入，还要记得将镜像改为 "),s("code",[t._v("cn")]),t._v("，否则你可能会卡在 "),s("code",[t._v("Building flutter tool...")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 增加 flutter")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("PUB_HOSTED_URL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://pub.flutter-io.cn\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("FLUTTER_STORAGE_BASE_URL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://storage.flutter-io.cn\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("PATH")])]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PATH")]),t._v(':[PATH_TO_FLUTTER_GIT_DIRECTORY]/flutter/bin"')]),t._v("\n")])])]),s("p",[t._v("接着就可以找到 "),s("code",[t._v("flutter")]),t._v(" 和 "),s("code",[t._v("dart")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("which")]),t._v(" flutter dart\n")])])]),s("h3",{attrs:{id:"_3-flutter-doctor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-flutter-doctor"}},[t._v("#")]),t._v(" 3. flutter doctor")]),t._v(" "),s("p",[t._v("可用 "),s("code",[t._v("flutter doctor")]),t._v(" 来检测缺乏的环境。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("Doctor summary "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("to see all details, run flutter doctor -v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("✓"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Flutter "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Channel unknown, "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.22")]),t._v(".0, on Linux, locale zh_CN.UTF-8"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("✗"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Android toolchain - develop "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" Android devices\n    ✗ Unable to "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("locate")]),t._v(" Android SDK.\n      Install Android Studio from:\n      https://developer.android.com/studio/index.html\n      On first launch it will assist you "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" installing the Android SDK\n      components.\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("or visit\n      https://flutter.dev/docs/get-started/install/linux"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#android-setup for")]),t._v("\n      detailed instructions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".\n      If the Android SDK has been installed to a custom location, "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v("\n      ANDROID_SDK_ROOT to that location.\n      You may also want to "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" it to your "),s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("PATH")]),t._v(" environment variable.\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Android Studio "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("not installed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Connected device\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" No devices available\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" Doctor found issues "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" categories.\n")])])]),s("h3",{attrs:{id:"_4-android-studio"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-android-studio"}},[t._v("#")]),t._v(" 4. Android Studio")]),t._v(" "),s("p",[t._v("根据提示缺乏了 "),s("code",[t._v("android studio")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" pacman -S android-studio\n")])])]),s("p",[t._v("安装完成后启动 "),s("code",[t._v("Android Studio")]),t._v("，根据提示一步步操作即可。")]),t._v(" "),s("p",[t._v("可以再使用 "),s("code",[t._v("flutter doctor")]),t._v(" 检测一下：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("Doctor summary "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("to see all details, run flutter doctor -v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("✓"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Flutter "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Channel unknown, "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.22")]),t._v(".0, on Linux, locale zh_CN.UTF-8"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Android toolchain - develop "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" Android devices "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Android SDK version\n    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30.0")]),t._v(".2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    ✗ Android licenses not accepted.  To resolve this, run: flutter doctor\n      --android-licenses\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Android Studio\n    ✗ Flutter plugin not installed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" this adds Flutter specific functionality.\n    ✗ Dart plugin not installed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" this adds Dart specific functionality.\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Connected device\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" No devices available\n")])])]),s("h3",{attrs:{id:"_5-plugins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-plugins"}},[t._v("#")]),t._v(" 5. plugins")]),t._v(" "),s("p",[t._v("启动 "),s("code",[t._v("Android Studio")]),t._v(" 后在其右下角有 "),s("code",[t._v("Configure")]),t._v("，选择 "),s("code",[t._v("plugins")]),t._v("。")]),t._v(" "),s("p",[t._v("进入界面后搜索 "),s("code",[t._v("flutter")]),t._v("，点击 "),s("code",[t._v("installed")]),t._v(" 后根据提示一步步确认即可。")]),t._v(" "),s("p",[t._v("糟糕的是，在 "),s("code",[t._v("flutter doctor")]),t._v(" 检测下依然会提示未安装，但使用是可以使用的，"),s("a",{attrs:{href:"https://stackoverflow.com/questions/57085479/android-studio-flutter-plugin-not-installed-this-adds-flutter-specific-functi",target:"_blank",rel:"noopener noreferrer"}},[t._v("ubuntu 20.04 也存在该问题"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"_6-toolchain"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-toolchain"}},[t._v("#")]),t._v(" 6. toolchain")]),t._v(" "),s("p",[t._v("可以直接忽略：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("flutter doctor --android-licenses\n")])])]),s("h2",{attrs:{id:"使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),s("h3",{attrs:{id:"_1-卡在-creating-flutter-project"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-卡在-creating-flutter-project"}},[t._v("#")]),t._v(" 1. 卡在 Creating Flutter Project")]),t._v(" "),s("p",[t._v("创建项目时卡在 "),s("code",[t._v("Creating Flutter Project")]),t._v("，但前往对应目录时发现项目已经创建完成，"),s("a",{attrs:{href:"https://blog.csdn.net/wojiaoqiaoxiaoqiao/article/details/105806943",target:"_blank",rel:"noopener noreferrer"}},[t._v("解决方案"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"_2-卡在-flutter-doctor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-卡在-flutter-doctor"}},[t._v("#")]),t._v(" 2. 卡在 flutter doctor")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("Checking Android licenses is taking an unexpectedly long time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])]),s("p",[t._v("这个问题有点奇怪，但是直接关闭 "),s("code",[t._v("Android Studio")]),t._v(" 后就没有问题了。")]),t._v(" "),s("h3",{attrs:{id:"_3-卡在-running-gradle-task-assembledebug"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-卡在-running-gradle-task-assembledebug"}},[t._v("#")]),t._v(" 3. 卡在 Running Gradle task 'assembleDebug")]),t._v(" "),s("p",[t._v("参考这个"),s("a",{attrs:{href:"https://stackoverflow.com/questions/59516408/flutter-app-stuck-at-running-gradle-task-assembledebug",target:"_blank",rel:"noopener noreferrer"}},[t._v("解决方案"),s("OutboundLink")],1),t._v("：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 获取详细的信息")]),t._v("\nflutter run -v\n")])])]),s("blockquote",[s("p",[t._v("接下来的操作与其他回答均不一致，算是新手一顿乱操作竟然能运行了。")])]),t._v(" "),s("p",[t._v("发现时在下载 "),s("code",[t._v("gradle-5.6.2-all.zip")]),t._v(" 引发了问题，手动将该文件下载下来放入 "),s("code",[t._v("/home/your_name/.gradle/wrapper/dists")]),t._v(" 中。")]),t._v(" "),s("p",[t._v("然后修改项目的 "),s("code",[t._v("android/gradle/wrapper/gradle-wrapper.properties")]),t._v(" 文件中 "),s("code",[t._v("distributionUrl")]),t._v(" 指向 "),s("code",[t._v("file\\:///home/your_name/.gradle/wrapper/dists/gradle-5.6.2-all.zip")]),t._v("，然后将下载的文件放入该位置即可。")]),t._v(" "),s("p",[t._v("如果希望以后新建的项目都指向该地址呢？")]),t._v(" "),s("p",[t._v("回到之前 "),s("code",[t._v("git clone flutter")]),t._v(" 的位置，找到 "),s("code",[t._v("packages/flutter_tools/templates/app/android.tmpl/gradle/wrapper/gradle-wrapper.properties")]),t._v(" 文件，将  "),s("code",[t._v("distributionUrl")]),t._v(" 指向 "),s("code",[t._v("file\\:///home/your_name/.gradle/wrapper/dists/gradle-5.6.2-all.zip")]),t._v(" 即可。")]),t._v(" "),s("h2",{attrs:{id:"配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),s("h3",{attrs:{id:"_1-禁用-ios"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-禁用-ios"}},[t._v("#")]),t._v(" 1. 禁用 ios")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看使用说明及当前配置")]),t._v("\nflutter config -h\n\nflutter config --no-enable-ios\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Settings:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   enable-ios: false")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);