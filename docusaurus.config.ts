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
          editUrl: 'https://github.com/Smile-SA/react-front-kit/blob/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
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
