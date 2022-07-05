# 快速上手

## IDEA 编辑器

推荐使用 VsCode 编辑器来进行 Vue3 的开发，下面则是项目当中会常用到的插件

- [Vue Language Features (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) - Vuu3 开发必备
- [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - Iconify 图标显示
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense) - 文件路径提示
- [WindiCSS Intellisense](https://marketplace.visualstudio.com/items?itemName=voorjaar.windicss-intellisense) - WindiCSS 提示
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - 代码格式化
- [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - 代码错误校验
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv) - 高亮 .ENV 文件
- [TODO Highlight](https://github.com/wayou/vscode-todo-highlight) - 注释高亮标记

推荐在开发当中，在 VsCode 中配置属于自己的代码片段

注：也可以根据自己想法自定义代码片段，推荐一个生成代码 body 的网站：[snippet-generator](https://snippet-generator.app/)

```json
{
  "单文件组件模板": {
    "scope": "",
    "prefix": "base-v3",
    "body": [
      "<template>",
      "  <div>",
      "    <!-- 内容 -->",
      "  </div>",
      "</template>",
      "",
      "<script setup lang=\"ts\">",
      "import {} from \"vue\";",
      "</script>",
      "",
      "<style scoped></style>",
      ""
    ],
    "description": "代码片段：单文件组件"
  }
}
```

## 快速开发

- 获取项目代码

`git clone https://github.com/flingyp/vue-admire-plus.git`

- 安装项目依赖

`pnpm install`

- 本地运行服务

`pnpm dev`

- 本地打包

  - Mock 模式打包：`pnpm build:mock`

  - 非 Mock 模式打包：`pnpm build`

## project script

```json
"scripts": {
    "dev": "vite --mode dev",
    "build": "vite build",
    "build:mock": "vite build --mode prod_mock",
    "preview": "vite preview",
    "preview:mock": "vite preview --mode prod_mock",
    "lint:eslint": "eslint --cache --max-warnings 0 \"{src,mock}/**/*.{vue,js,ts,tsx}\" --fix",
    "lint:prettier": "prettier --write  \"src/**/*.{js,json,tsx,css,less,scss,vue,html,md}\"",
    "lint:stylelint": "stylelint --cache --fix \"src/**/*.{vue,css,less,scss,sass}\"",
    "prepare": "husky install",
    "commit": "git-cz",
    "changelog": "conventional-changelog -p custom-config -i CHANGELOG.md -s -r 0  -n ./changelog-option.js"
  },
```

## 目录说明

```typescript
├───.github
├───.husky
├───.vscode
├───dist // 打包后文件
├───mock // Mock服务
├───public
├───src
│   ├───apis    // API接口
│   ├───assets // 静态文件
│   ├───components // 全局组件
│   ├───directives // 全局自定义指令
│   ├───hooks   // 自定义钩子
│   ├───layout // 系统布局
│   ├───plugins // 插件
│   ├───router
│   │   ├───modules // 常量路由和异步路由模块
│   ├───store
│   │   └───modules // 各种状态管理模块
│   ├───style // 样式文件
│   ├───utils // 工具类
│   └───views // 页面
└───types  // 全局类型定义
```
