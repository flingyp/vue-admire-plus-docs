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
      // { text: "集成", link: "/integrate/" },
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
    sidebar: {
      "/guide/": [
        {
          text: "Guide",
          items: [
            { text: "介绍", link: "/guide/" },
            { text: "快速上手", link: "/guide/quick" },
            { text: "系统配置", link: "/guide/config" },
            { text: "路由", link: "/guide/router" },
            { text: "菜单", link: "/guide/menu" },
            { text: "权限", link: "/guide/permission" },
            { text: "主题色", link: "/guide/colors" },
          ],
        },
      ],
      "/integrate/": [],
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
