import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/myblog/',
  title: "编程学习",
  head: [
    ['link', { rel: 'icon', href: '/myblog/index.png' }],
  ],
  description: "A VitePress Site",
  themeConfig: {
    logo: '/index.png',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '编程语言',
        items: [
          { text: 'CSharp', link: '/编程语言/CSharp/' },
          { text: 'Golang', link: '/编程语言/Golang/' },
          { text: 'JavaScript', link: '/编程语言/JavaScript/' },
          { text: 'Python', link: '/编程语言/Python/' },
        ]
      },
      { text: 'Program', link: '/program/' },
      { text: 'Tools', link: '/Tools/' },
    ],
    search: {
      provider: 'local',
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
        items: [
          { text: 'index', link: '/编程语言/Golang/' },
          { text: 'Golang', link: '/编程语言/Golang/Golang' },
          { text: 'Golang2', link: '/编程语言/Golang/Golang2' },
        ]
      }],
      '/编程语言/JavaScript/': [{
        text: 'JavaScript笔记',
        items: [
          { text: 'index', link: '/编程语言/JavaScript/' },
          { text: 'JavaScript', link: '/编程语言/JavaScript/JavaScript' },
          { text: 'axios', link: '/编程语言/JavaScript/axios' },
          { text: 'vitepress', link: '/编程语言/JavaScript/vitepress' },
        ]
      }],
      '/编程语言/Python/': [{
        text: 'Python笔记',
        items: [
          { text: 'Python', link: '/编程语言/Python/' },
          { text: 'Python2', link: '/编程语言/Python/Python' },
        ]
      }],

      '/program/': [{
        text: 'program',
        collapsed: false,
        items: [
          { text: '目录', link: '/program/' },
          { text: 'program', link: '/program/program' },
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

    outline: {
      label: '页面导航',
      level: [2, 4]
    },
  }
})
