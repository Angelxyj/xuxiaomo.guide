# Tauri

新坑已开…



## 序

根据两天的大致学习，对`Tauri`也有了一些自己的认识，其实`Tauri`和普通的前后端项目没多少区别，前端可以使用自己习惯的任何一个框架来做，比如`react,vue`等，后端使用的是`rust`。 



当然学习这个玩意需要有一定的`rust`基础

下面的内容转自`lencx`的博客内容

![image-20221220114328835](https://gitlab.com/lijing-2008/blogpic/-/raw/main/pictures/2022/12/20_11_43_28_image-20221220114328835.png)

- **核心（Core）**

- - [tauri](https://link.zhihu.com/?target=https%3A//github.com/tauri-apps/tauri/tree/dev/core/tauri) - 主条板箱（major crate）把所有东西（运行时、宏、实用程序和 API ）都集中在一起构成最终产品。在编译时读取 [tauri.conf.json](https://link.zhihu.com/?target=https%3A//tauri.studio/v1/api/config) 文件，以引入功能并进行应用程序的实际配置（包括项目中的 Cargo.toml 文件）。在运行时处理脚本注入（用于 polyfills/原型修改），托管系统交互的 API 及管理更新。
  - [tauri-runtime](https://link.zhihu.com/?target=https%3A//github.com/tauri-apps/tauri/tree/dev/core/tauri-runtime) - Tauri 本身和较低级别的 webview 库之间的粘合层。
  - [tauri-macros](https://link.zhihu.com/?target=https%3A//github.com/tauri-apps/tauri/tree/dev/core/tauri-macros) - 通过利用 `tauri-codegen` crate 为上下文、处理程序和命令创建宏。
  - [tauri-utils](https://link.zhihu.com/?target=https%3A//github.com/tauri-apps/tauri/tree/dev/core/tauri-utils) - 在许多地方重用的通用代码，并提供有用的实用程序，例如解析配置文件、检测平台三元组（CPU 系列/型号的名称、供应商和操作系统名称）、注入 CSP 和管理资产。
  - [tauri-build](https://link.zhihu.com/?target=https%3A//github.com/tauri-apps/tauri/tree/dev/core/tauri-build) - 在构建时应用宏，为 `cargo` 装配所需的一些特殊功能。
  - [tauri-codegen](https://link.zhihu.com/?target=https%3A//github.com/tauri-apps/tauri/tree/dev/core/tauri-codegen) - 嵌入、散列和压缩资产，包括应用程序和系统托盘的图标。在编译时解析 `tauri.conf.json` 并生成配置结构。
  - [tauri-runtime-wry](https://link.zhihu.com/?target=https%3A//github.com/tauri-apps/tauri/tree/dev/core/tauri-runtime-wry) - 专门为 WRY 开辟了直接的系统级交互，如打印、显示器检测和其他与窗口相关的任务。

- **上游条板箱（Upstream Crates）** - Tauri-Apps 组织维护 Tauri 的两个“上游”板条箱，即用于创建和管理应用程序窗口的 TAO，以及用于与窗口内的 Webview 交互的 WRY。

- - [TAO](https://link.zhihu.com/?target=https%3A//github.com/tauri-apps/tao) - Rust 中的跨平台应用程序窗口创建库，支持 Windows、macOS、Linux、iOS 和 Android 等所有主要平台。它是用 Rust 编写的，是一个 [winit](https://link.zhihu.com/?target=https%3A//github.com/rust-windowing/winit) 的分支，根据需要进行了扩展，例如菜单栏和系统托盘。
  - [WRY](https://link.zhihu.com/?target=https%3A//github.com/tauri-apps/wry) - WRY 是 Rust 中的跨平台 WebView 渲染库，支持 Windows、macOS 和 Linux 等所有主要桌面平台。 Tauri 使用 WRY 作为抽象层，负责确定使用哪个 webview（以及如何进行交互）。