const utils = require("./utils")

module.exports = {
  title: 'Vue Book Study',
  description: "Vue.js 实战学习和总结",
  base: '/vue-book/',
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
    nav: [
      {text: "基础知识", link: '/base/'},
      {text: "进阶", link: '/advance/'},
      {text: "项目", link: '/projects/'},
    ],
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