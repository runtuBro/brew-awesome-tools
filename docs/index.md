# Homebrew
Homebrew 是用于 Mac 的包管理器，可以很方便地安装、更新、卸载程序，常用的软件以及开发相关的环境和工具都能很方便地安装。

初始化开发环境的第一个安装的软件应该就是 Homebrew，它可以简化后续软件的安装。
## 依赖安装
在安装 Homebrew 之前需要安装 Xcode Command Line Tools，使用命令：
```shell
xcode-select --install
```
## 安装
在命令行终端执行下面的命令安装 Homebrew：
```shell
# 从 aliyun 下载安装脚本并安装 Homebrew 
git clone https://mirrors.aliyun.com/homebrew/install.git brew-install
/bin/bash brew-install/install.sh
rm -rf brew-install
```
## 查看版本
安装完成后，在终端输入 brew -v 命令，如果出现版本号，则说明安装成功。
```
brew -v
```
## 设置镜像源
以设置阿里源为例。
### 临时替换
在命令行终端执行下面的命令临时修改镜像源为阿里云的镜像源：
```
export HOMEBREW_INSTALL_FROM_API=1
export HOMEBREW_API_DOMAIN="https://mirrors.aliyun.com/homebrew-bottles/api"
export HOMEBREW_BREW_GIT_REMOTE="https://mirrors.aliyun.com/homebrew/brew.git"
export HOMEBREW_CORE_GIT_REMOTE="https://mirrors.aliyun.com/homebrew/homebrew-core.git"
export HOMEBREW_BOTTLE_DOMAIN="https://mirrors.aliyun.com/homebrew/homebrew-bottles"
brew update
```
### 永久替换（zsh 终端用户）
在命令行终端执行下面的命令永久修改镜像源为阿里云的镜像源，使用不同终端的用户选择不同的命令执行：
```
echo 'export HOMEBREW_API_DOMAIN="https://mirrors.aliyun.com/homebrew-bottles/api"' >> ~/.zshrc
echo 'export HOMEBREW_BREW_GIT_REMOTE="https://mirrors.aliyun.com/homebrew/brew.git"' >> ~/.zshrc
echo 'export HOMEBREW_CORE_GIT_REMOTE="https://mirrors.aliyun.com/homebrew/homebrew-core.git"' >> ~/.zshrc
echo 'export HOMEBREW_BOTTLE_DOMAIN="https://mirrors.aliyun.com/homebrew/homebrew-bottles"' >> ~/.zshrc
source ~/.zshrc
brew update
```
### 恢复默认配置
出于某些场景, 可能需要回退到默认配置, 可以通过在命令行执行下面的方式回退到默认配置：
```
# 1. 删除环境变量
unset HOMEBREW_BREW_GIT_REMOTE

# 2. 重新设置 Homebrew 代码仓库地址
git -C "$(brew --repo)" remote set-url origin https://github.com/Homebrew/brew

# 3. 如果之前永久配置了 HOMEBREW 环境变量，还需要在对应的 `~/.bash_profile`
#    或者 `~/.zshrc` 配置文件中，将 Homebrew 对应的环境变量配置行删除

# 4. 更新 Homebrew
brew update
```