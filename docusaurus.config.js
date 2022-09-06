// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Sealman's React Book",
  tagline: 'The React book made by Sealman',
  url: 'https://react.sealman.tw',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/icon.png',
  organizationName: 'Sealman234', // Usually your GitHub org/user name.
  projectName: 'react-book', // Usually your repo name.
  i18n: {
    defaultLocale: 'zh-Hant-TW',
    locales: ['zh-Hant-TW'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleAnalytics: {
          trackingID: 'UA-153300681-2',
          anonymizeIP: true,
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          filename: 'sitemap.xml',
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: 'keywords',
          content: 'sealman, react, book, blog',
        },
      ],
      navbar: {
        title: "Sealman's React Book",
        logo: {
          alt: 'My Site Logo',
          src: 'img/icon.png',
        },
        items: [
          {
            href: 'https://www.sealman.tw',
            label: 'Blog',
            position: 'right',
          },
          {
            href: 'https://github.com/Sealman234',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: "Sealman's React Book",
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/Sealman234',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://www.sealman.tw',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Sealman234',
              },
            ],
          },
        ],
        copyright: `Copyright © 2019-${new Date().getFullYear()} Sealman. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
