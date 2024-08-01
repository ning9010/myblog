import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  base: '/myblog/',
  title: "编程学习",
  titleTemplate: '编程学习 - :title',
  head: [
    ['link', { rel: 'icon', href: '/myblog/index.png' }],
  ],
  description: "A VitePress Site",
  cleanUrls: true,
  appearance: 'dark',
  themeConfig: {
    logo: '/index.png',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '语言',
        items: [
          { text: 'CSharp', link: '/编程语言/CSharp/' },
          { text: 'Golang', link: '/编程语言/Golang/' },
          { text: 'JavaScript', link: '/编程语言/JavaScript/' },
          { text: 'Python', link: '/编程语言/Python/' },
        ]
      },
      { text: 'Application', link: '/Application/' },
      { text: 'Tools', link: '/Tools/' },
    ],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
            },
          },
        }
      }
    },

    sidebar: {
      '/编程语言/CSharp/': [
        {
          text: 'C#',
          collapsed: false,
          items: [
            { text: 'C# index', link: '/编程语言/CSharp/' },
            { text: 'C#笔记', link: '/编程语言/CSharp/CSharp笔记' },
          ]
        },
      ],
      '/编程语言/Golang/': [{
        text: 'Golang笔记',
        collapsed: false,
        items: [
          { text: 'index', link: '/编程语言/Golang/' },
          { text: 'go语法', link: '/编程语言/Golang/go语法' },
          { text: 'Golang', link: '/编程语言/Golang/Golang' },
          { text: 'Golang2', link: '/api-examples.md' },
        ]
      }],
      '/编程语言/JavaScript/': [{
        text: 'JavaScript笔记',
        collapsed: false,
        items: [
          { text: 'index', link: '/编程语言/JavaScript/' },
          { text: 'JavaScript', link: '/编程语言/JavaScript/JavaScript' },
          { text: 'axios', link: '/编程语言/JavaScript/axios' },
          { text: 'vitepress', link: '/编程语言/JavaScript/vitepress' },
        ]
      }],
      '/编程语言/Python/': [{
        text: 'Python笔记',
        collapsed: false,
        items: [
          { text: 'Python', link: '/编程语言/Python/' },
          { text: 'Python2', link: '/编程语言/Python/Python' },
        ]
      }],

      '/Application/': [{
        text: 'Application',
        collapsed: false,
        items: [
          { text: '目录', link: '/Application/' },
          { text: 'Chrome Extensions', link: '/Application/ChromeExtensions' },
        ]
      }],

      '/Tools/': [{
        text: 'Tools',
        collapsed: false,
        items: [
          { text: '目录', link: '/Tools/' },
          { text: 'Vitepress', link: '/Tools/Vitepress笔记' },
          { text: 'Docker', link: '/Tools/Docker' },
          { text: 'Markdown', link: '/Tools/Markdown语法' },
        ]
      }]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ning9010/myblog' }
    ],

    footer: {
      message: '本网页由 <a href="https://vitepress.dev/">vitepress</a> 生成。',
      copyright: 'Copyright © 2024 '
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    lastUpdated: {
      text: '最后更新时间',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    editLink: {
      text: '在 GitHub 上编辑此页面',
      pattern: 'https://github.com/ning9010/myblog/edit/main/docs/:path'
    },

    outline: {
      label: '页面导航',
      level: [2, 4]
    },
  }
})
