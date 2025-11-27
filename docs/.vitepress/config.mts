import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/brew-awesome-tools/',
  title: "brew-awesome-tools",
  description: "A VitePress Site",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: '推荐',
        items: [
          { text: '终端效率神器', link: '/one' },
          { text: '网络调试工具', link: '/two' },
          { text: '开发者必备工具', link: '/three' },
          { text: '系统管理工具', link: '/four' },
        ]
      }
    ],
  }
})
