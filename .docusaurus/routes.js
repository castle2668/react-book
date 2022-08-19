
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/react/__docusaurus/debug',
    component: ComponentCreator('/react/__docusaurus/debug','95f'),
    exact: true
  },
  {
    path: '/react/__docusaurus/debug/config',
    component: ComponentCreator('/react/__docusaurus/debug/config','a08'),
    exact: true
  },
  {
    path: '/react/__docusaurus/debug/content',
    component: ComponentCreator('/react/__docusaurus/debug/content','1d5'),
    exact: true
  },
  {
    path: '/react/__docusaurus/debug/globalData',
    component: ComponentCreator('/react/__docusaurus/debug/globalData','0ac'),
    exact: true
  },
  {
    path: '/react/__docusaurus/debug/metadata',
    component: ComponentCreator('/react/__docusaurus/debug/metadata','ab7'),
    exact: true
  },
  {
    path: '/react/__docusaurus/debug/registry',
    component: ComponentCreator('/react/__docusaurus/debug/registry','fe1'),
    exact: true
  },
  {
    path: '/react/__docusaurus/debug/routes',
    component: ComponentCreator('/react/__docusaurus/debug/routes','ea1'),
    exact: true
  },
  {
    path: '/react/markdown-page',
    component: ComponentCreator('/react/markdown-page','dee'),
    exact: true
  },
  {
    path: '/react/',
    component: ComponentCreator('/react/','839'),
    routes: [
      {
        path: '/react/',
        component: ComponentCreator('/react/','f45'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react/advanced-redux/asynchronous-code-in-redux',
        component: ComponentCreator('/react/advanced-redux/asynchronous-code-in-redux','27d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react/an-alternativ-way-of-building-components/class-based-component-basic-usage',
        component: ComponentCreator('/react/an-alternativ-way-of-building-components/class-based-component-basic-usage','124'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react/an-alternativ-way-of-building-components/error-boundary',
        component: ComponentCreator('/react/an-alternativ-way-of-building-components/error-boundary','3a8'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react/an-alternativ-way-of-building-components/the-component-lifecycle',
        component: ComponentCreator('/react/an-alternativ-way-of-building-components/the-component-lifecycle','8c8'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react/building-a-multi-page-spa-with-react-router/introducing-react-router-v5',
        component: ComponentCreator('/react/building-a-multi-page-spa-with-react-router/introducing-react-router-v5','90c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react/building-a-multi-page-spa-with-react-router/upgrading-to-react-router-v6',
        component: ComponentCreator('/react/building-a-multi-page-spa-with-react-router/upgrading-to-react-router-v6','823'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react/building-custom-react-hooks/using-custom-hooks',
        component: ComponentCreator('/react/building-custom-react-hooks/using-custom-hooks','7e6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react/deploying-react-apps/upload-production-code-to-server',
        component: ComponentCreator('/react/deploying-react-apps/upload-production-code-to-server','958'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react/diving-into-redux/introducing-redux',
        component: ComponentCreator('/react/diving-into-redux/introducing-redux','d14'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react/diving-into-redux/introducing-redux-toolkit',
        component: ComponentCreator('/react/diving-into-redux/introducing-redux-toolkit','3f1'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react/diving-into-redux/redux-with-class-based-components',
        component: ComponentCreator('/react/diving-into-redux/redux-with-class-based-components','478'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react/diving-into-redux/redux-with-functional-components',
        component: ComponentCreator('/react/diving-into-redux/redux-with-functional-components','4c6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react/react-advance/introducing-react-context',
        component: ComponentCreator('/react/react-advance/introducing-react-context','bee'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react/react-advance/introducing-react-memo',
        component: ComponentCreator('/react/react-advance/introducing-react-memo','489'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react/react-advance/introducing-use-callback',
        component: ComponentCreator('/react/react-advance/introducing-use-callback','b59'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react/react-advance/introducing-use-effect',
        component: ComponentCreator('/react/react-advance/introducing-use-effect','cca'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react/react-advance/introducing-use-imperative-handle',
        component: ComponentCreator('/react/react-advance/introducing-use-imperative-handle','2a5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react/react-advance/introducing-use-memo',
        component: ComponentCreator('/react/react-advance/introducing-use-memo','4c3'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react/react-advance/introducing-use-reducer',
        component: ComponentCreator('/react/react-advance/introducing-use-reducer','42f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react/react-basics/refs-and-forward-refs',
        component: ComponentCreator('/react/react-basics/refs-and-forward-refs','cc4'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react/react-basics/styling-react-components',
        component: ComponentCreator('/react/react-basics/styling-react-components','9bc'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react/react-basics/working-with-portals',
        component: ComponentCreator('/react/react-basics/working-with-portals','994'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react/react-basics/working-with-state',
        component: ComponentCreator('/react/react-basics/working-with-state','a64'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react/sending-http-request/using-the-star-wars-api',
        component: ComponentCreator('/react/sending-http-request/using-the-star-wars-api','e2c'),
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
