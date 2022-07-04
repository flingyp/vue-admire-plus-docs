import { defineConfig } from "vitepress";

export default defineConfig({
  base: "/",
  title: "VAdmire Plus",
  description: "VAdmire Plus 静态网站基本模板",
  themeConfig: {
    siteTitle: "VAdmire Plus",
    logo: "/docs-logo.png",
    nav: [
      { text: "指引", link: "/guide/" },
      { text: "配置", link: "/configs/" },
      {
        text: "相关链接",
        items: [
          {
            text: "源码地址",
            link: "https://github.com/flingyp/vue-admire-plus",
          },
          { text: "预览地址", link: "https://docs.vadmire.top" },
        ],
      },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/flingyp" }],
    // TODO: 左侧侧边栏
    sidebar: {
      "/guide/": [
        {
          text: "Guide",
          items: [
            { text: "Introduction", link: "/guide/" },
            { text: "Getting Started", link: "/getting-started" },
          ],
        },
      ],
      "/configs": [
        {
          text: "Section Title A",
          collapsible: true, // 是否开启折叠
          collapsed: false, // 默认折叠
          items: [
            { text: "Item A", link: "/item-a" },
            { text: "Item B", link: "/item-b" },
          ],
        },
      ],
    },
    editLink: {
      pattern:
        "https://github.com/flingyp/vitepress-basic-docs/tree/main/:path",
      text: "在 Github 中查看",
    },
    footer: {
      message: "MIT Licensed",
      copyright: "Copyright © 2022-present FlingYP",
    },
  },
});
