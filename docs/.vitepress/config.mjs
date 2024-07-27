import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // lang: 'zh', 
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
          { text: '目录', link: '/编程语言/' },
          { text: 'C#', link: '/编程语言/CSharp/CSharp笔记' },
          { text: 'Golang', link: '/编程语言/Golang/Golang' },
          { text: 'JavaScript', link: '/编程语言/JavaScript/JavaScript' },
          { text: 'Python', link: '/编程语言/Python/Python' },
        ]
      },
      {
        text: 'Tools',
        items: [
          { text: '目录', link: '/Tools/' },
          { text: 'Vitepress', link: '/Tools/Vitepress笔记' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    search: {
      provider: 'local',
    },

    sidebar: {
      '/编程语言/CSharp/': [
        {
          text: 'CSharp',
          collapsed: true,
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        },
      ],
      '/编程语言/Golang/': [{
        text: 'Golang笔记',
        collapsed: true,
        items: [
          { text: 'Golang', link: '/编程语言/Golang/Golang' },
          { text: 'Golang2', link: '/编程语言/Golang/Golang2' },
        ]
      }],
      '/编程语言/JavaScript/': [{
        text: 'JavaScript笔记',
        collapsed: true,
        items: [
          { text: 'JavaScript', link: '/编程语言/JavaScript/JavaScript' },
          { text: 'vitepress', link: '/编程语言/JavaScript/vitepress' },
        ]
      }],
      '/编程语言/Python/': [{
        text: 'Golang笔记',
        collapsed: true,
        items: [
          { text: 'Golang', link: '/编程语言/Golang/Golang' },
          { text: 'Golang2', link: '/编程语言/Golang/Golang2' },
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
      level: [2, 3]
    },
  }
})
