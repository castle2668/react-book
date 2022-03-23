
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/','eca'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/','96c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/advanced-redux/asynchronous-code-in-redux',
        component: ComponentCreator('/advanced-redux/asynchronous-code-in-redux','678'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/an-alternativ-way-of-building-components/class-based-component-basic-usage',
        component: ComponentCreator('/an-alternativ-way-of-building-components/class-based-component-basic-usage','cec'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/an-alternativ-way-of-building-components/error-boundary',
        component: ComponentCreator('/an-alternativ-way-of-building-components/error-boundary','71b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/an-alternativ-way-of-building-components/the-component-lifecycle',
        component: ComponentCreator('/an-alternativ-way-of-building-components/the-component-lifecycle','b1e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/building-a-multi-page-spa-with-react-router/introducing-react-router-v5',
        component: ComponentCreator('/building-a-multi-page-spa-with-react-router/introducing-react-router-v5','c60'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/building-a-multi-page-spa-with-react-router/upgrading-to-react-router-v6',
        component: ComponentCreator('/building-a-multi-page-spa-with-react-router/upgrading-to-react-router-v6','92f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/building-custom-react-hooks/using-custom-hooks',
        component: ComponentCreator('/building-custom-react-hooks/using-custom-hooks','5eb'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/deploying-react-apps/upload-production-code-to-server',
        component: ComponentCreator('/deploying-react-apps/upload-production-code-to-server','119'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/diving-into-redux/introducing-redux',
        component: ComponentCreator('/diving-into-redux/introducing-redux','296'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/diving-into-redux/introducing-redux-toolkit',
        component: ComponentCreator('/diving-into-redux/introducing-redux-toolkit','cc3'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/diving-into-redux/redux-with-class-based-components',
        component: ComponentCreator('/diving-into-redux/redux-with-class-based-components','e49'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/diving-into-redux/redux-with-functional-components',
        component: ComponentCreator('/diving-into-redux/redux-with-functional-components','eb2'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react-advance/introducing-react-context',
        component: ComponentCreator('/react-advance/introducing-react-context','785'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react-advance/introducing-react-memo',
        component: ComponentCreator('/react-advance/introducing-react-memo','a17'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react-advance/introducing-use-callback',
        component: ComponentCreator('/react-advance/introducing-use-callback','799'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react-advance/introducing-use-effect',
        component: ComponentCreator('/react-advance/introducing-use-effect','352'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react-advance/introducing-use-imperative-handle',
        component: ComponentCreator('/react-advance/introducing-use-imperative-handle','4ea'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react-advance/introducing-use-memo',
        component: ComponentCreator('/react-advance/introducing-use-memo','cf8'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react-advance/introducing-use-reducer',
        component: ComponentCreator('/react-advance/introducing-use-reducer','323'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react-basics/refs-and-forward-refs',
        component: ComponentCreator('/react-basics/refs-and-forward-refs','9db'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react-basics/styling-react-components',
        component: ComponentCreator('/react-basics/styling-react-components','b07'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react-basics/working-with-portals',
        component: ComponentCreator('/react-basics/working-with-portals','8eb'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react-basics/working-with-state',
        component: ComponentCreator('/react-basics/working-with-state','d05'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/sending-http-request/using-the-star-wars-api',
        component: ComponentCreator('/sending-http-request/using-the-star-wars-api','71e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
