// ref: https://umijs.org/config/
import { resolve } from 'path';

export default {
  treeShaking: true,
  routes: [
    {
      path: '/admin',
      component: '../layouts/AdminLayout',
      routes: [
        {
          path: '/admin',
          routes: [
            {
              path: '/admin',
              name: 'admin',
              exact: true,
              component: './Admin'
            }, 
            {
              path: '/admin/user',
              routes: [
                {
                  path: '/admin/user/signin',
                  name: 'signIn',
                  component: './Admin/User/SignIn'
                }
              ]
            }, 
          ]
        }
      ],
    },
    {
      path: '/',
      component: '../layouts/BasicLayout',
      routes: [
        {
          path: '/',
          routes: [
            {
              path: '/',
              name: 'home',
              component: './Home'
            }, 
            {
              path: '/about',
              name: 'about',
              component: './About'
            },
            {
              path: '/news',
              name: 'news',
              component: './News',
            },
            {
              path: '/news/:id',
              name: 'newsDetail',
              component: './News/Detail',
            },
            {
              path: '/trading',
              name: 'trading',
              component: './Trading'
            },
            {
              path: '/programme',
              name: 'programme',
              component: './Programme'
            },
            {
              path: '/topic',
              name: 'topic',
              component: './Topic',
              routes: [
                // {
                //   path: '/topic/:id',
                //   name: 'topic',
                //   component: './Popic/Detail'
                // }
              ]
            }
          ]
        },
      ],
    },
    {
      component: './404'
    }
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: false,
        dva: true,
        dynamicImport: false,
        title: 'weim-front-end',
        dll: false,
        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
        locale: {
          enable: true,
          default: 'zh_MO',
          baseNavigator: true,
          baseSeparator: '_'
        }
      },
    ],
  ],
  alias: {
    '@': resolve(__dirname, 'src'),
    'utils': resolve(__dirname, 'src/utils'),
    'assets': resolve(__dirname, 'src/assets'),
    'models': resolve(__dirname, 'src/models'),
    'shared': resolve(__dirname, 'src/shared'),
    'services': resolve(__dirname, 'src/services'),
    'components': resolve(__dirname, 'src/components'),
    'configs': resolve(__dirname, 'src/configurations'),
  },
  theme: './src/themes/index.js',
};
