const utils = require("./utils")

module.exports = {
  title: 'Vue Book Study',
  description: "Study Swoole4 by Myself",
  base: '/swoole/',
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico"
      }
    ]
  ],
  themeConfig: {
    sidebar: utils.inferSiderbars(),
    repo: "Just008/vue-book",
    lastUpdated: "上次更新",
    docsDir: "docs",
    editLinkText: "在 GitHub 上编辑此页",
    sidebarDepth: 3
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@public": "./public"
      }
    }
  },
}