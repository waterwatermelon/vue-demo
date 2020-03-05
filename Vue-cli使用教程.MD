# Vue-cli 3.x使用教程（简单记录）
对应的[demo地址](https://github.com/waterwatermelon/vue-demo)
## 安装
### 版本环境要求
node.js >=8.9 (8.11.0 recommended)
vue-cli 3，脚手架已改名为@vue/cli
安装指令
```bash
npm install -g @vue/cli
# 或者
yarn global add @vue/cli
```
检查安装是否成功,以下指令输出结果应是3.x
```bash
vue --version
```
## 快速创建新项目
```bash
# hello-world为你的项目名称
vue create hello-world
```
之后，会出现预设(preset）配置。可以选择默认的（Babel+ESLint）的预设，也可以进行手动选择。
默认预设非常适合快速创建一个新项目的原型，手动选择更适合正式生产的项目。
因此，此处可按回车，让vue-cli帮我们完成项目初始化。
创建项目过程中，如果报错比如：
```bash
npm ERR! Unexpected token < in JSON at position 1 while parsing near '
npm ERR! <!doctype html>
npm ERR! <htm...'

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/sue/.npm/_logs/2019-08-05T01_23_00_375Z-debug.log
 ERROR  command failed: npm install --loglevel error
```
可使用这个脚本，新建项目(强制指定项目源为淘宝镜像)
```bash
vue create hello-world -r https://registry.npm.taobao.org
```
## 启动项目
执行以下脚本，进入项目，并运行项目
```bash 
cd hello-world
npm run serve
```
打开http://localhost:8080/
就可以看到vue运行起来了。
## 代码编写
我们只需对src目录下的文件进行修改，暂不需要对其他进行改动。
整个项目的入口文件是App.vue。通常是在compnonents目录下添加或是修改.vue来构建你的组件。