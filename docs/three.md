# 开发者必备工具

## asdf - 多版本管理（Node、Python、Java、Go…）

asdf 是一个多语言版本管理工具（Version Manager）。

- Node.js、Python、Ruby、Go、Java、Rust 等语言版本
- 各种工具、包管理器的版本
- 统一管理所有语言工具，不用每种语言单独安装 nvm、pyenv、rbenv
- 支持全局与项目局部版本切换
- 插件化机制，语言/工具通过插件安装

```sh
brew install asdf
```

## watch - 每隔几秒执行一次命令

watch 是一个命令行工具，可以周期性执行命令并实时刷新输出。

- 监控命令输出变化
- 调试实时日志或系统状态
- 观察目录或文件变化
- 自动刷新命令结果，无需手动重复执行

```sh
brew install watch
```



## direnv  - 自动加载项目环境变量

direnv 是一个用于管理项目环境变量的工具，可以根据当前目录自动加载或卸载环境变量。

- 自动化环境管理：进入目录自动加载 .envrc 配置，离开目录自动卸载
- 支持多语言和工具：Node.js、Python、Go、Rust、Java 等
- 安全机制：首次加载 .envrc 需要手动允许 (direnv allow)
- 轻量无侵入：只需 shell hook 即可工作

```sh
brew install direnv
```

## jq - JSON 格式化神器

jq 是一个轻量且强大的 JSON 处理工具。

- 解析 JSON
- 筛选字段
- 修改 JSON
- 格式化输出
- 进行复杂的数据操作

```sh
brew install jq
```

