// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'InfiShark Tech - Docs',
  tagline: 'Official BLEShark Nano Documentation',
  favicon: 'img/logo.svg',

  url: 'https://docs.infishark.com',
  baseUrl: '/',

  organizationName: 'infishark', // GitHub org
  projectName: 'nano-docs', // GitHub repo

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

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
          editUrl: 'https://github.com/infishark/nano-docs/edit/main/docs/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: '/start',
            to: '/docs/basics/getting-started',
          },
        ],
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/infishark-social-card.jpg',
      defaultMode: 'dark',
      disableSwitch: true,
      navbar: {
        title: 'InfiShark Tech - Docs',
        logo: {
          alt: 'InfiShark Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
        ],
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Company',
            items: [
              { label: 'Website', href: 'https://infishark.com' },
              { label: 'Shop', href: 'https://infishark.com/products/bleshark-nano' },
              { label: 'News', href: 'https://infishark.com/blogs/news' },
              { label: 'Docs', href: 'https://docs.infishark.com' },
              { label: 'Compliance', href: 'https://compliance.infishark.com' },
            ],
          },
          {
            title: 'Connect',
            items: [
              { label: 'GitHub', href: 'https://github.com/infishark/nano-docs' },
              { label: 'Instagram', href: 'https://instagram.com/infishark' },
              { label: 'YouTube', href: 'https://youtube.com/@infishark' },
            ],
          },
          {
            title: 'Legal',
            items: [
              { label: 'Privacy Policy', href: 'https://infishark.com/policies/privacy-policy' },
              { label: 'Contact Information', href: 'https://infishark.com/policies/contact-information' },
              { label: 'Shipping Policy', href: 'https://infishark.com/policies/shipping-policy' },
              { label: 'Refund Policy', href: 'https://infishark.com/policies/refund-policy' },
              { label: 'Terms of Service', href: 'https://infishark.com/policies/terms-of-service' },
              { label: 'Cancellation Policy', href: 'https://infishark.com/policies/subscription-policy' },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} InfiShark Technologies Inc. All rights reserved.`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
