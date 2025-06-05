import { defineNavbarConfig } from 'vuepress-theme-plume'

export const zhNavbar = defineNavbarConfig([
  { text: '首頁', link: '/' },
  // { text: '部落格', link: '/blog/' },
  // { text: '標籤', link: '/blog/tags/' },
  // { text: '歸檔', link: '/blog/archives/' },
  {
    text: '專案',
    items: [{ text: '秋月シズク', link: '/bot/' }]
  },
])

export const enNavbar = defineNavbarConfig([
  { text: 'Home', link: '/en/' },
  // { text: 'Blog', link: '/en/blog/' },
  // { text: 'Tags', link: '/en/blog/tags/' },
  // { text: 'Archives', link: '/en/blog/archives/' },
  {
    text: 'Projects',
    items: [{ text: '秋月シズク(Shizuku)', link: '/en/bot/' }]
  },
])

