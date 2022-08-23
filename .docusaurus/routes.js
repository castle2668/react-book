
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
    component: ComponentCreator('/','9ea'),
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
        path: '/class-based-components/error-boundary',
        component: ComponentCreator('/class-based-components/error-boundary','45a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/class-based-components/introduction',
        component: ComponentCreator('/class-based-components/introduction','17a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/class-based-components/the-component-lifecycle',
        component: ComponentCreator('/class-based-components/the-component-lifecycle','2a3'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/code-reuse/custom-hooks',
        component: ComponentCreator('/code-reuse/custom-hooks','2e1'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/code-reuse/high-order-component',
        component: ComponentCreator('/code-reuse/high-order-component','f5c'),
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
        path: '/react-advance/react-context',
        component: ComponentCreator('/react-advance/react-context','104'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react-advance/react-memo',
        component: ComponentCreator('/react-advance/react-memo','9b9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react-advance/sending-http-requests',
        component: ComponentCreator('/react-advance/sending-http-requests','36d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react-advance/usecallback',
        component: ComponentCreator('/react-advance/usecallback','780'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react-advance/useimperativehandle',
        component: ComponentCreator('/react-advance/useimperativehandle','747'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react-advance/usememo',
        component: ComponentCreator('/react-advance/usememo','47b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react-advance/usereducer',
        component: ComponentCreator('/react-advance/usereducer','2ce'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react-basics/forms-in-react',
        component: ComponentCreator('/react-basics/forms-in-react','c76'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react-basics/lifting-the-state-up',
        component: ComponentCreator('/react-basics/lifting-the-state-up','b3f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react-basics/portals',
        component: ComponentCreator('/react-basics/portals','843'),
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
        path: '/react-basics/useeffect',
        component: ComponentCreator('/react-basics/useeffect','072'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react-basics/useref-and-forwardref',
        component: ComponentCreator('/react-basics/useref-and-forwardref','06d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react-basics/usestate',
        component: ComponentCreator('/react-basics/usestate','6a2'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react-router/upgrade-to-v6',
        component: ComponentCreator('/react-router/upgrade-to-v6','824'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react-router/v5',
        component: ComponentCreator('/react-router/v5','9c4'),
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
