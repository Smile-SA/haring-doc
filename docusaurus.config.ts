/* eslint-disable sort-keys */

import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';

import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
  title: 'React Front Kit',
  tagline: 'Frontend made easy',
  favicon: 'img/favicon.ico', // TODO: update

  url: 'https://smile-sa.github.io',
  baseUrl: '/react-front-kit-doc/',

  organizationName: 'Smile-SA',
  projectName: 'react-front-kit-doc',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/Smile-SA/react-front-kit-doc/blob/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    algolia: {
      appId: 'DDS84I62YB',
      apiKey: '8d863728adfc1afe75e4a43f7387cdf7',
      indexName: 'react-front-kit',
      contextualSearch: false,
      searchParameters: {},
      searchPagePath: 'search',
    },
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'React Front Kit',
      logo: {
        alt: 'React Front Kit Logo',
        src: 'img/logo.svg', // TODO: update
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/Smile-SA/react-front-kit',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://smile-sa.github.io/react-front-kit',
          label: 'Storybook',
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
              label: 'Guide',
              to: '/docs/category/guide',
            },
            {
              label: 'Components',
              to: '/docs/category/components',
            },
            {
              label: 'Layouts',
              to: '/docs/category/layouts',
            },
            {
              label: 'Shared Types',
              to: '/docs/category/shared-types',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/smile',
            },
            {
              label: 'X',
              href: 'https://twitter.com/GroupeSmile',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'React Front Kit GitHub',
              href: 'https://github.com/Smile-SA/react-front-kit',
            },
            {
              label: 'React Front Kit Storybook',
              href: 'https://smile-sa.github.io/react-front-kit',
            },
            {
              label: 'Mantine',
              href: 'https://mantine.dev/',
            },
            {
              label: 'Smile',
              href: 'https://www.smile.eu/fr',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Smile SA, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
