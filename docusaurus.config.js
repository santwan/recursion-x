// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Recursion X',
  tagline: 'where every solution calls for deeper logic',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://recursion-x.vercel.app',
  baseUrl: '/',

  organizationName: 'santwan',
  projectName: 'recursion-x',

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // ✅ Update this to YOUR repo so "Edit this page" links work
          editUrl: 'https://github.com/santwan/recursion-x/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // ✅ Update this to YOUR repo as well
          editUrl: 'https://github.com/santwan/recursion-x/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // ✅ Update with your own social card image when ready
      image: 'img/docusaurus-social-card.jpg',

      colorMode: {
        defaultMode: 'dark',             // ✅ default to dark (suits a DSA/dev site)
        respectPrefersColorScheme: true, // still respects system preference
      },

      navbar: {
        title: 'Recursion X',
        logo: {
          alt: 'Recursion X Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'DSA in Java',  // ✅ lowercase 'ava' — consistent casing
          },
          {
            href: 'https://github.com/santwan/recursion-x', // ✅ your repo, not facebook's
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
                label: 'DSA in Java',
                to: '/docs/12-recursion/01-overview',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'X',
                href: 'https://x.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/santwan/recursion-x', // ✅ your repo
              },
            ],
          },
        ],
        // ✅ Your name in the copyright
        copyright: `Copyright © ${new Date().getFullYear()} Recursion X · Built by santwan`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula, // dracula pairs well with your green palette
        additionalLanguages: ['java'],
      },
    }),
};

export default config;