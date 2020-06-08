import defaultSettings from './defaultSettings'; // https://umijs.org/config/
import slash from 'slash2'; // import webpackPlugin from './plugin.config'; // 删除换肤插件.
import { Icon } from 'antd';
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1422451_svq3r17fly8.js',
});
const { pwa, primaryColor } = defaultSettings;
const { ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION } = process.env;
const isAntDesignProPreview = ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site'; 
const plugins = [
  [
    'umi-plugin-react',
    {
      antd: true,
      dva: {
        hmr: true,
      },
      locale: {
        // default false
        enable: true,
        // default zh-CN
        default: 'zh-CN',
        // default true, when it is true, will use `navigator.language` overwrite default
        baseNavigator: true,
      },
      dynamicImport: {
        loadingComponent: './components/PageLoading/index',
        webpackChunkName: true,
        level: 3,
      },
      pwa: pwa
        ? {
          workboxPluginMode: 'InjectManifest',
          workboxOptions: {
            importWorkboxFrom: 'local',
          },
        }
        : false, // default close dll, because issue https://github.com/ant-design/ant-design-pro/issues/4665
      // dll features https://webpack.js.org/plugins/dll-plugin/
      // dll: {
      // include: ['dva', 'dva/router', 'dva/saga', 'dva/fetch'],
      // exclude: ['@babel/runtime', 'netlify-lambda'],
      // },
    },
  ],
  [
    'umi-plugin-pro-block',
    {
      moveMock: false,
      moveService: false,
      modifyRequest: true,
      autoAddMenu: true,
    },
  ],
]; // 针对 preview.pro.ant.design 的 GA 统计代码
if (isAntDesignProPreview) {
  plugins.push([
    'umi-plugin-ga',
    {
      code: 'UA-72788897-6',
    },
  ]);
  plugins.push([
    'umi-plugin-pro',
    {
      serverUrl: 'https://ant-design-pro.netlify.com',
    },
  ]);
}
export default {
  plugins,
  block: {
    // 国内用户可以使用码云
    defaultGitUrl: 'https://gitee.com/ant-design/pro-blocks', // defaultGitUrl: 'https://github.com/ant-design/pro-blocks',
  },
  hash: true,
  targets: {
    ie: 11,
  },
  devtool: isAntDesignProPreview ? 'source-map' : false,
  // umi routes: https://umijs.org/zh/guide/router.html
  routes: [
    {
      path: '/',
      component: '../layouts/BlankLayout',
      routes: [
        {
          path: '/user',
          component: '../layouts/UserLayout',
          routes: [
            {
              path: '/user',
              redirect: '/user/login',
            },
            {
              name: 'login',
              path: '/user/login',
              component: './user/login',
            },
            {
              name: 'register-result',
              path: '/user/register-result',
              component: './user/register-result',
            },
            {
              name: 'register',
              path: '/user/register',
              component: './user/register',
            },
            {
              component: '404',
            },
          ],
        },
        {
          path: '/',
          component: '../layouts/BasicLayout',
          Routes: ['src/pages/Authorized'],
          authority: ['admin', 'user'],
          routes: [
            {
              path: '/dashboard',
              name: 'dashboard',
              icon: 'dashboard',
              routes: [
                {
                  name: 'analysis',
                  path: '/dashboard/analysis',

                  routes: [
                    {
                      name: 'analysis',
                      path: '/dashboard/analysis',
                      icon: 'icon-shoucang1',
                      component: './dashboard/analysis',
                    },
                    {
                      name: 'guicheng',
                      path: '/dashboard/analysis/town/guicheng',
                      icon: 'icon-shoucang1',
                      component: './dashboard/analysis/town/guicheng',
                      hidden: true,
                    },
                    {
                      name: 'lishui',
                      path: '/dashboard/analysis/town/lishui',
                      icon: 'icon-shoucang1',
                      component: './dashboard/analysis/town/lishui',
                    },
                    {
                      name: 'dali',
                      path: '/dashboard/analysis/town/dali',
                      icon: 'icon-shoucang1',
                      component: './dashboard/analysis/town/dali',
                    },
                    {
                      name: 'shishan',
                      path: '/dashboard/analysis/town/shishan',
                      icon: 'icon-shoucang1',
                      component: './dashboard/analysis/town/shishan',
                    },
                    {
                      name: 'danzao',
                      path: '/dashboard/analysis/town/danzao',
                      icon: 'icon-shoucang1',
                      component: './dashboard/analysis/town/danzao',
                    },
                    {
                      name: 'xiqiao',
                      path: '/dashboard/analysis/town/xiqiao',
                      icon: 'icon-shoucang1',
                      component: './dashboard/analysis/town/xiqiao',
                    },
                    {
                      name: 'jiujiang',
                      path: '/dashboard/analysis/town/jiujiang',
                      icon: 'icon-shoucang1',
                      component: './dashboard/analysis/town/jiujiang',
                    },
                  ]
                },
                {
                  name: 'monitor',
                  path: '/dashboard/monitor',
                  icon: 'icon-shoucang1',
                  component: './dashboard/monitor',
                },
                // {
                //   name: 'map',
                //   path: '/dashboard/map',
                //   component: './dashboard/map',
                // },
                {
                  name: 'historicaldata',
                  path: '/dashboard/historicaldata',
                  icon: 'icon-shoucang1',
                  component: './dashboard/historicaldata',
                },
                {
                  name: 'realtimedata',
                  path: '/dashboard/realtimedata',
                  icon: 'icon-shoucang1',
                  component: './dashboard/realtimedata',
                },
                {
                  name: 'trends',
                  path: '/dashboard/trends',
                  icon: 'icon-shoucang1',
                  component: './dashboard/trends',
                },
              ],
            },
            {
              path: '/patrol',
              icon: 'icon-xunjian2',
              name: 'patrol',
              routes: [

                {
                  name: 'task',
                  path: '/patrol/task',
                  icon: 'icon-shoucang1',
                  component: './patrol/task',
                },

                {
                  name: 'plan',
                  path: '/patrol/plan',
                  icon: 'icon-shoucang1',
                  component: './patrol/plan',
                },
              ],
            },

            {
              name: 'asset',
              icon: 'profile',
              path: '/asset',
              routes: [
                {
                  name: 'equipment',
                  path: '/asset/equipment',
                  icon: 'icon-shoucang1',
                  component: './asset/equipment',
                },
                {
                  name: 'maintainplan',
                  path: '/asset/maintainplan',
                  icon: 'icon-shoucang1',
                  component: './asset/maintainplan',
                },
                {
                  name: 'maintaintask',
                  path: '/asset/maintaintask',
                  icon: 'icon-shoucang1',
                  component: './asset/maintaintask',
                },
                {
                  name: 'accessory',
                  path: '/asset/accessory',
                  icon: 'icon-shoucang1',
                  component: './asset/accessory',
                },
                {
                  name: 'workorder',
                  path: '/asset/workorder',
                  icon: 'icon-shoucang1',
                  component: './asset/workorder',
                },
              ],
            },
            {
              name: 'alarm',
              icon: 'icon-baojing',
              path: '/alarm',
              routes: [
                {
                  name: 'alarmdata',
                  path: '/alarm/alarmdata',
                  icon: 'icon-shoucang1',
                  component: './alarm/alarmdata',
                },
              ],
            },
            {
              name: 'editor',
              icon: 'icon-baojing',
              path: '/editor',
              routes: [
                {
                  name: 'koni',
                  path: '/editor/koni',
                  icon: 'icon-shoucang1',
                  component: './editor/koni',
                },
                {
                  name: 'visu',
                  path: '/editor/visu',
                  icon: 'icon-shoucang1',
                  component: './editor/visu',
                }
              ],
            },
            {
              name: 'report',
              icon: 'icon-tongji',
              path: '/report',
              routes: [
                {
                  name: 'devicereport',
                  path: '/report/devicereport',
                  icon: 'icon-shoucang1',
                  component: './report/devicereport',
                },
                {
                  name: 'sitereport',
                  path: '/report/sitereport',
                  icon: 'icon-shoucang1',
                  component: './report/sitereport',
                },
                {
                  name: 'personareport',
                  path: '/report/personareport',
                  icon: 'icon-shoucang1',
                  component: './report/personareport',
                },
              ],
            },
            {
              name: 'exception',
              icon: 'warning',
              path: '/exception',
              routes: [
                {
                  name: '403',
                  path: '/exception/403',
                  component: './exception/403',
                },
                {
                  name: '404',
                  path: '/exception/404',
                  component: './exception/404',
                },
                {
                  name: '500',
                  path: '/exception/500',
                  component: './exception/500',
                },
              ],
            },

            {
              name: 'account',
              icon: 'user',
              path: '/account',
              routes: [
                {
                  name: 'center',
                  path: '/account/center',
                  component: './account/center',
                },
                {
                  name: 'settings',
                  path: '/account/settings',
                  component: './account/settings',
                },
              ],
            },
            {
              name: 'system',
              icon: 'setting',
              path: '/system',
              routes: [
                {
                  name: 'a1',
                  path: '/system/001',
                  component: './system/001',
                },
                {
                  name: 'a2',
                  path: '/system/002',
                  component: './system/002',
                },
                {
                  name: 'a3',
                  path: '/system/003',
                  component: './system/003',
                },
                {
                  name: 'custom',
                  path: '/system/custom',
                  component: './system/custom',
                },
              ],
            },
            {
              path: '/',
              redirect: '/dashboard/analysis',
              authority: ['admin', 'user'],
            },
            {
              component: '404',
            },
          ],
        },
      ],
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    'primary-color': primaryColor,
    'font-size-base': '14px',
    '@text-color': '#43425D',
  },
  define: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION:
      ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION || '', // preview.pro.ant.design only do not use in your production ; preview.pro.ant.design 专用环境变量，请不要在你的项目中使用它。
  },
  ignoreMomentLocale: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  disableRedirectHoist: true,
  cssLoaderOptions: {
    modules: true,
    getLocalIdent: (context, _, localName) => {
      if (
        context.resourcePath.includes('node_modules') ||
        context.resourcePath.includes('ant.design.pro.less') ||
        context.resourcePath.includes('global.less')
      ) {
        return localName;
      }

      const match = context.resourcePath.match(/src(.*)/);

      if (match && match[1]) {
        const antdProPath = match[1].replace('.less', '');
        const arr = slash(antdProPath)
          .split('/')
          .map(a => a.replace(/([A-Z])/g, '-$1'))
          .map(a => a.toLowerCase());
        return `antd-pro${arr.join('-')}-${localName}`.replace(/--/g, '-');
      }

      return localName;
    },
  },
  manifest: {
    basePath: '/',
  },
  history: 'hash', // chainWebpack: webpackPlugin,  // 删除换肤插件.

  /*

  */
};