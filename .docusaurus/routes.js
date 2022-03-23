
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
    component: ComponentCreator('/','4d6'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/','96c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/bonus/tostring-typeof-instanceof',
        component: ComponentCreator('/bonus/tostring-typeof-instanceof','97b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/functions-extras/bind-call-apply',
        component: ComponentCreator('/functions-extras/bind-call-apply','e92'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/functions-extras/callback-function',
        component: ComponentCreator('/functions-extras/callback-function','a71'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/functions-extras/closure',
        component: ComponentCreator('/functions-extras/closure','fac'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/functions-extras/function-factory',
        component: ComponentCreator('/functions-extras/function-factory','151'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/functions-extras/functional-programming',
        component: ComponentCreator('/functions-extras/functional-programming','eae'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/object-oriented-javascript-and-prototypal-inheritance/built-in-function-constructor',
        component: ComponentCreator('/object-oriented-javascript-and-prototypal-inheritance/built-in-function-constructor','c1e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/object-oriented-javascript-and-prototypal-inheritance/classes',
        component: ComponentCreator('/object-oriented-javascript-and-prototypal-inheritance/classes','f88'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/object-oriented-javascript-and-prototypal-inheritance/function-constructor',
        component: ComponentCreator('/object-oriented-javascript-and-prototypal-inheritance/function-constructor','2bf'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/object-oriented-javascript-and-prototypal-inheritance/object-create',
        component: ComponentCreator('/object-oriented-javascript-and-prototypal-inheritance/object-create','e2b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/object-oriented-javascript-and-prototypal-inheritance/prototype',
        component: ComponentCreator('/object-oriented-javascript-and-prototypal-inheritance/prototype','2f6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/objects-and-functions/arguments-spread',
        component: ComponentCreator('/objects-and-functions/arguments-spread','e36'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/objects-and-functions/function-object',
        component: ComponentCreator('/objects-and-functions/function-object','ff2'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/objects-and-functions/iife-safe-code',
        component: ComponentCreator('/objects-and-functions/iife-safe-code','141'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/objects-and-functions/object-literal',
        component: ComponentCreator('/objects-and-functions/object-literal','f0c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/objects-and-functions/this',
        component: ComponentCreator('/objects-and-functions/this','b5b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/objects-and-functions/value-reference',
        component: ComponentCreator('/objects-and-functions/value-reference','bb1'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/react-basics-working-with-components/introducing-jsx',
        component: ComponentCreator('/react-basics-working-with-components/introducing-jsx','a21'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/types-and-operators/operators',
        component: ComponentCreator('/types-and-operators/operators','641'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/types-and-operators/types',
        component: ComponentCreator('/types-and-operators/types','97f'),
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
