/**
 * Created by Yee on 2020/8/19 10:39.
 */
module.exports = {
  base: '/vue-wheel/',
  title: 'Vue-wheel',
  description: '一个适用vue的ui组件库',
  head: [
    ['script', { src: 'https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js' }],
  ],
  plugins: [
    'demo-container'
  ],

  themeConfig: {
    nav: [
      {text: '主页', link: '/'},
      {text: '文档', link: '/getStart/'},
      {text: '交流', link: 'https://github.com/Joker-Yi/vue-wheel/issues'},
      {text: 'Github', link: 'https://github.com/Joker-Yi/vue-wheel/'},
    ],
    sidebar: [
      {
        title: '入门',
        children: [
          '/getStart/',
        ]
      },
      {
        title: '组件',
        children: [
          '/components/icon',
          '/components/button',
          '/components/buttonGroup',
          '/components/input',
          '/components/layout',
          '/components/container',
        ]
      },

    ]
  }
}












