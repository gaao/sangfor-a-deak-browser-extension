# sangfor-a-deak-browser-extension
深信服桌面云快捷登录

## 功能

由于登录页面不支持记住密码故本插件来解决快捷登录

## 安装

- 1.下载插件压缩包，解压
- 2.谷歌浏览器地址栏输入 chrome://extensions/ 打开扩展程序页面，勾选开发者模式，点击“加载已解压的扩展程序”按钮，选择解压后的文件夹。
- Can I Use: Chrome 84 及更高版本

## 使用

打开网页<https://192.168.253.9/por/service.csp>
进入登录页面，插件点亮，此时代表可用。
点击插件图标，弹出弹窗即可使用记住密码、自动登录等功能。

## 注意事项



## 项目相关
### 创建项目
```bash
pnpm create vite 
```
选择ts和vanilla
### 安装@crxjs/vite-plugin、chrome-types
```bash
pnpm install @crxjs/vite-plugin -D
pnpm install chrome-types -D
```
### 配置manifest.json
### 修改 Vite.config.ts 配置文件
``` javascript
import { defineConfig } from 'vite'
import { crx } from '@crxjs/vite-plugin'
import manifest from './manifest.json'

export default defineConfig({
  plugins: [crx({ manifest })],
})
```
### 配置 /src/vite-env.d.ts
```typescript
/// <reference types="chrome-types/index" />
```

- pnpm install 安装依赖
- pnpm watch 热更新开发 ( 浏览器插件引入dist目录：通过chrome://extensions/加载已解压的扩展程序 )
- pnpm build 编译插件

tip 写代码时，添加文件时要注意dist目录下的文件是否有更新，没有的话需要重新编译。还是没有的话需要把文件放到public目录下。
  