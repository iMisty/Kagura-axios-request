/*
 * @Author: Miya
 * @Date: 2022-08-20 01:33:55
 * @LastEditTime: 2022-08-25 22:47:02
 * @LastEditors: Miya
 * @Description: VuePress Sidebar Config
 * @FilePath: \Kagura-axios-request\docs\.vitepress\components\sidebar.ts
 */

const configSidebar = [
  {
    text: 'Guide 指南',
    items: [
      { text: 'About 关于', link: '/guide/about' },
      { text: 'Get Start 快速起步', link: '/guide/single' },
      { text: 'ChangeLog 修改日志', link: '/guide/changelog' },
    ],
  },
  {
    text: 'Config 配置',
    items: [
      { text: 'Introduction 目录', link: '/config/intro' },
      { text: 'Base 基础配置', link: '/config/base' },
      { text: 'API Function API方法', link: '/config/api' },
      { text: 'Interceptors 拦截器', link: '/config/interceptors' },
      { text: 'Abort 中止请求', link: '/config/abort' },
    ],
  },
];

export default configSidebar;
