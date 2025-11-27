# 终端效率神器

## fzf - 模糊搜索神器
fzf = fuzzy finder（模糊查找工具），它是一个终端里的神器，可以让你快速搜索：
- 文件、目录
- 命令历史
- Git 分支 / commit
- 进程
- 任何列表数据
```shell
# 安装
brew install fzf

# 启用功能（非常重要）
# 	fzf 安装后默认没有激活按键绑定和 Tab 补全，需要运行，通常都输入 y
$(brew --prefix)/opt/fzf/install
```

## ripgrep(rg) - 比 grep 强 100 倍的搜索

ripgrep（rg）是一款极速文件搜索工具，作用类似 `grep`，但速度是传统 grep 的 **3–10 倍以上**。

- 超级快（基于 Rust + 自动跳过大型目录）
- 默认递归搜索目录
- 支持正则
- 自动忽略 `.gitignore` 中的文件
- 输出高亮、可读性强

```shell
brew install ripgrep
```
## bat - 带语法高亮的 cat
bat 是一个比 cat 更强大的文件查看工具，可以把它理解成 **“会发光的 cat”**。

- 语法高亮
- 带行号
- Git 风格的变更高亮
- 自动识别语言
- 与 `less` 分页器无缝结合

```shell
brew install bat
```
## exa 或 eza - 彩色 ls（更现代）
eza 是 ls 的现代替代品，由 Rust 编写，功能更强、输出更美观，结构更清晰。

- 彩色显示（类型、权限、文件）
- 更好看的目录树结构
- 支持图标（加 nerd-fonts 后）
- 更智能的排序
- 显示 Git 信息（作者、修改时间、ignored/unstaged）
- 文件时间、权限、大小可读性更好

```shell
brew install eza
```
## tldr - 用一句话解释命令用法
tldr = Too Long; Didn't Read（太长不看版命令手册），它是一个为命令行工具提供 **超精简、易读的示例帮助文档** 的工具，比 `man` 简单太多。

```shell
brew install tldr
```

