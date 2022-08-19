/*
 * @Author: Miya
 * @Date: 2022-08-20 01:27:54
 * @LastEditTime: 2022-08-20 03:12:16
 * @LastEditors: Miya
 * @Description: VuePress Config Root
 * @FilePath: f:\Documents\Github\Kagura-axios-request\docs\.vitepress\config.ts
 */
import configFooter from './components/footer';
import configNavbar from './components/navbar';
import configSidebar from './components/sidebar';

export default {
  title: 'Miramiya/Request',
  description: 'Just playing around.',
  base:'/kagura-axios-request/',
  themeConfig: {
    nav: configNavbar,
    sidebar: configSidebar,
    footer: configFooter,
  },
};
