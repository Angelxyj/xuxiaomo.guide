import { DefaultTheme } from 'vitepress';
import { frontendNav } from './sidebarDetail/10_frontendCanteen';
import { backendNav } from './sidebarDetail/11_backendLibrary';

export const nav: DefaultTheme.NavItem[] = [
  {
    text: '首页',
    link: '/'
  },
  {
    text: '个人成长',
    items: [
      {
        text: '大江南北游记',
        link: '/column/Travel/'
      },
      {
        text: '所思·所想',
        link: '/column/Growing/'
      }
    ]
  },
  {
    text: '干货社区',
    items: [
      {
        text: '快捷键',
        link: '/column/BaseCommand/'
      },
      {
        text: '模板管理',
        link: '/column/Template/'
      }
    ]
  },
  {
    text: '精选专栏',
    items: [
      {
        text: '数构与前端',
        // 此处读到README.md文件中，或者下方sidebar中对应的链接
        link: '/column/Algorithm/'
      },
      {
        text: 'offer来了',
        link: '/column/Interview/'
      }
    ]
  },
  // frontendNav,
  // backendNav,
  {
    text: '分类索引',
    items: [
      {
        text: '产品汪',
        link: '/column/Product/'
      },
      {
        text: '前端开发',
        link: '/column/FrontEnd/'
      },
      {
        text: '其他语言',
        link: '/column/OtherLang/'
      },
      {
        text: '服务端开发',
        link: '/column/BackEnd/'
      },
      {
        text: '计算机基础知识',
        // 此处读到README.md文件中，或者下方sidebar中对应的链接
        link: '/column/ComputerKnowledge/'
      },
      {
        text: '碎碎念个人成长',
        link: '/column/Growing/'
      }
    ]
  },
  {
    text: '其他',
    items: [
      {
				text: '巨人的肩膀',
				link: '/article/bigMan/',
			},
			{
				text: 'bug集中营',
				link: '/article/bug/',
			},
			{
				text: '缤纷世界',
				link: '/article/colorfulLife/',
			},
    ]
  },
  {
    text: '关于我',
    items: [
      {
        text: 'CSDN',
        link: 'https://blog.csdn.net/qq_60306931'
      },
      { text: 'Github', link: 'https://github.com/Angelxyj' },
      {
        text: 'Gitee',
        link: 'https://gitee.com/Angelxyj'
      },
      {
        text: '私人博客',
        link: 'https://angelxyj.gitee.io/xuxiaomo.blog'
      },
      {
        text: '技术文档',
        link: 'https://angelxyj.gitee.io/xuxiaomo.docs'
      },
      // { text: '公众号', link: 'https://blog.csdn.net/weixin_44803753' }
    ]
  }
];
