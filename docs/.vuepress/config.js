/**
 * Created by Yee on 2020/8/19 10:39.
 */
module.exports = {
  base: '/vue-wheel/',
  title: 'Vue-wheel',
  description: '一个适用vue的ui组件库',
  themeConfig: {
    nav: [
      {text: '主页', link: '/'},
      {text: '文档', link: '/guide/'},
      {text: '交流', link: 'https://google.com'},
    ],
    sidebar: [
      {
        title: '入门',
        children: [
          '/install/',
          '/getStart/',
        ]
      },
      {
        title: '组件',
        children: ['/components/button']
      },

    ]
  }
}












