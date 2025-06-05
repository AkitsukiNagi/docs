import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  base: '/',
  port: 80,
  lang: 'zh-TW',
  locales: {
    '/': {
      title: 'ナギの開発工房',
      lang: 'zh-TW',
      description: 'Documentation about my projects.',
    },
    '/en/': {
      title: 'Nagi\'s base',
      lang: 'en-US',
      description: 'Documentation about my projects.',
    },
  },

  head: [
    // 網站圖示
    ['link', { rel: 'icon', type: 'image/png', href: 'https://theme-plume.vuejs.press/favicon-32x32.png' }],
  ],

  bundler: viteBundler(),
  shouldPrefetch: false,

  theme: plumeTheme({
    // hostname: 'https://your_site_url',

    // 編輯連結
    // docsRepo: '',
    // docsDir: 'docs',
    // docsBranch: '',

    // editLink: true,
    // lastUpdated: true,
    // contributors: true,
    // changelog: false,

    /**
     * Blog
     * @see https://theme-plume.vuejs.press/config/basic/#blog
     */
    blog: false, // 停用部落格
    // blog: {
    //   postList: true, // 啟用文章清單
    //   tags: true, // 啟用標籤頁
    //   archives: true, // 啟用封存頁
    //   categories: true, // 啟用分類頁
    //   postCover: 'right', // 文章封面的位置
    //   pagination: 15, // 每頁顯示的文章數量
    // },

    /* 部落格文章預設前綴 */
    article: '/',

    /**
     * 編譯快取，加快編譯速度
     * @see https://theme-plume.vuejs.press/config/basic/#cache
     */
    cache: 'filesystem',

    /**
     * 為 markdown 文件自動加上 frontmatter 設定
     * @see https://theme-plume.vuejs.press/config/basic/#autofrontmatter
     */
    autoFrontmatter: {
      permalink: true,  // 是否生成永久連結
      createTime: true, // 是否生成建立時間
      title: true,      // 是否生成標題
    },

    /* 本地搜尋，預設啟用 */
    search: {
      provider: 'local',
      locales: {
        "/": {
          "placeholder": "搜尋...",
        }
      }
    },

    /**
     * Algolia DocSearch
     * 啟用此搜尋功能需要停用本地搜尋 search
     * @see https://theme-plume.vuejs.press/config/plugins/search/#algolia-docsearch
     */
    // search: {
    //   provider: 'algolia',
    //   appId: '',
    //   apiKey: '',
    //   indexName: '',
    // },

    /**
     * Shiki 代码高亮
     * @see https://theme-plume.vuejs.press/config/plugins/code-highlight/
     */
    // codeHighlighter: {
    //   twoslash: true, // 啟用 twoslash
    //   whitespace: true, // 啟用 空格/Tab 突顯
    //   lineNumbers: true, // 啟用行號
    // },

    // 停用閱讀時間標示
    readingTime: false,

    /**
      * markdown
      * @see https://theme-plume.vuejs.press/config/markdown/
      */
    markdown: {
    //   abbr: true,         // 啟用 abbr 語法  *[label]: content
      annotation: false,   // 啟用 annotation 語法  [+label]: content
    //   pdf: true,          // 啟用 PDF 嵌入 @[pdf](/xxx.pdf)
    //   caniuse: true,      // 啟用 caniuse 語法  @[caniuse](feature_name)
      plot: true,         // 啟用暴雷(spoiler)語法 !!xxxx!!
    //   bilibili: true,     // 啟用嵌入 bilibili视频 語法 @[bilibili](bid)
      youtube: true,      // 啟用嵌入 youtube影片 語法 @[youtube](video_id)
      // artPlayer: true,    // 啟用嵌入 artPlayer 本地影片 語法 @[artPlayer](url)
    //   audioReader: true,  // 啟用嵌入音訊朗讀語法 @[audioReader](url)
      icons: true,        // 啟用圖示語法  :[icon-name]:
    //   codepen: true,      // 啟用嵌入 codepen 語法 @[codepen](user/slash)
    //   replit: true,       // 啟用嵌入 replit 語法 @[replit](user/repl-name)
    //   codeSandbox: true,  // 啟用嵌入 codeSandbox 語法 @[codeSandbox](id)
    //   jsfiddle: true,     // 啟用嵌入 jsfiddle 語法 @[jsfiddle](user/id)
    //   npmTo: true,        // 啟用 npm-to 容器  ::: npm-to
    //   demo: true,         // 啟用 demo 容器  ::: demo
    //   repl: {             // 啟用 程式碼釋例容器
    //     go: true,         // ::: go-repl
    //     rust: true,       // ::: rust-repl
    //     kotlin: true,     // ::: kotlin-repl
    //   },
    //   math: {             // 啟用數學公式
    //     type: 'katex',
    //   },
    //   chartjs: true,      // 啟用 chart.js
    //   echarts: true,      // 啟用 ECharts
    //   mermaid: true,      // 啟用 mermaid
    //   flowchart: true,    // 啟用 flowchart
      image: {
    //     figure: true,     // 啟用 figure
        lazyload: true,   // 啟用圖片 lazyload
    //     mark: true,       // 啟用圖篇標記
    //     size: true,       // 啟用圖片大小
      },
    //   include: true,      // 在 markdown 中嵌入其他 markdown 檔案內容
    //   imageSize: 'local', // 啟用 自動填充 圖片屬性，避免頁面抖動
    },

    /**
     * 水印
     * @see https://theme-plume.vuejs.press/guide/features/watermark/
     */
    // watermark: true,

    /**
     * 評論 comments
     * @see https://theme-plume.vuejs.press/guide/features/comments/
     */
    // comment: {
    //   provider: '', // "Artalk" | "Giscus" | "Twikoo" | "Waline"
    //   comment: true,
    //   repo: '',
    //   repoId: '',
    //   category: '',
    //   categoryId: '',
    //   mapping: 'pathname',
    //   reactionsEnabled: true,
    //   inputPosition: 'top',
    // },

    /**
     * 加密功能
     * @see https://theme-plume.vuejs.press/guide/features/encryption/
     */
    // encrypt: {},

    // 插件設定
    plugins: {
      sitemap: false
    }
  }),
})
