
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/react-book/markdown-page',
    component: ComponentCreator('/react-book/markdown-page','9ee'),
    exact: true
  },
  {
    path: '/react-book/',
    component: ComponentCreator('/react-book/','558'),
    routes: [
      {
        path: '/react-book/',
        component: ComponentCreator('/react-book/','aeb'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react-book/advanced-redux/asynchronous-code-in-redux',
        component: ComponentCreator('/react-book/advanced-redux/asynchronous-code-in-redux','ff0'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react-book/an-alternativ-way-of-building-components/class-based-component-basic-usage',
        component: ComponentCreator('/react-book/an-alternativ-way-of-building-components/class-based-component-basic-usage','614'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react-book/an-alternativ-way-of-building-components/error-boundary',
        component: ComponentCreator('/react-book/an-alternativ-way-of-building-components/error-boundary','3bb'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react-book/an-alternativ-way-of-building-components/the-component-lifecycle',
        component: ComponentCreator('/react-book/an-alternativ-way-of-building-components/the-component-lifecycle','531'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react-book/building-a-multi-page-spa-with-react-router/introducing-react-router-v5',
        component: ComponentCreator('/react-book/building-a-multi-page-spa-with-react-router/introducing-react-router-v5','800'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react-book/building-a-multi-page-spa-with-react-router/upgrading-to-react-router-v6',
        component: ComponentCreator('/react-book/building-a-multi-page-spa-with-react-router/upgrading-to-react-router-v6','b85'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react-book/building-custom-react-hooks/using-custom-hooks',
        component: ComponentCreator('/react-book/building-custom-react-hooks/using-custom-hooks','aa3'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react-book/deploying-react-apps/upload-production-code-to-server',
        component: ComponentCreator('/react-book/deploying-react-apps/upload-production-code-to-server','7b3'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react-book/diving-into-redux/introducing-redux',
        component: ComponentCreator('/react-book/diving-into-redux/introducing-redux','64c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react-book/diving-into-redux/introducing-redux-toolkit',
        component: ComponentCreator('/react-book/diving-into-redux/introducing-redux-toolkit','293'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react-book/diving-into-redux/redux-with-class-based-components',
        component: ComponentCreator('/react-book/diving-into-redux/redux-with-class-based-components','24e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react-book/diving-into-redux/redux-with-functional-components',
        component: ComponentCreator('/react-book/diving-into-redux/redux-with-functional-components','ff2'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react-book/react-advance/introducing-react-context',
        component: ComponentCreator('/react-book/react-advance/introducing-react-context','a3a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react-book/react-advance/introducing-react-memo',
        component: ComponentCreator('/react-book/react-advance/introducing-react-memo','e7c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react-book/react-advance/introducing-use-callback',
        component: ComponentCreator('/react-book/react-advance/introducing-use-callback','abe'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react-book/react-advance/introducing-use-effect',
        component: ComponentCreator('/react-book/react-advance/introducing-use-effect','3da'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react-book/react-advance/introducing-use-imperative-handle',
        component: ComponentCreator('/react-book/react-advance/introducing-use-imperative-handle','d2f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react-book/react-advance/introducing-use-memo',
        component: ComponentCreator('/react-book/react-advance/introducing-use-memo','09a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react-book/react-advance/introducing-use-reducer',
        component: ComponentCreator('/react-book/react-advance/introducing-use-reducer','089'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react-book/react-basics/refs-and-forward-refs',
        component: ComponentCreator('/react-book/react-basics/refs-and-forward-refs','860'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react-book/react-basics/styling-react-components',
        component: ComponentCreator('/react-book/react-basics/styling-react-components','cda'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react-book/react-basics/working-with-portals',
        component: ComponentCreator('/react-book/react-basics/working-with-portals','646'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react-book/react-basics/working-with-state',
        component: ComponentCreator('/react-book/react-basics/working-with-state','243'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react-book/sending-http-request/using-the-star-wars-api',
        component: ComponentCreator('/react-book/sending-http-request/using-the-star-wars-api','336'),
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
