// @ts-check
// Docusaurus configuration file
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// Main Docusaurus config object
/** @type {import('@docusaurus/types').Config} */
const config = {
  // Site title and tagline
  title: 'Horia Delicoti',
  tagline: 'Welcome to my DevOps Engineer website',
  favicon: 'img/profile-favicon.png', // Small icon that appears in browser tabs

  // Enable future Docusaurus v4 compatibility
  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Production URL and base path for the site
  url: 'https://horia.delicoti.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'horia-delicoti', // Usually your GitHub org/user name.
  projectName: 'personal-site', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Enable Mermaid diagrams in markdown files
  markdown: {
    mermaid: true,
  },

  // Enable the Mermaid theme plugin
  themes: ['@docusaurus/theme-mermaid'],

  // Internationalization settings
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Custom fields for use throughout the site (homepage, footer, etc)
  customFields: {
    tagline: "DevOps Engineer | Linux, Ansible, Terraform, CI/CD, Cloud",
    description: "DevOps Engineer focused on scalable, secure infrastructure and a cybersecurity enthusiast.",
    linkedin: "https://www.linkedin.com/in/horia-delicoti/",
    github: "https://github.com/horia-delicoti",
    leetcode: "https://leetcode.com/u/horia-delicoti/",
    goodreads: "https://goodreads.com/horia-delicoti",
    email: "horia.delicoti@gmail.com",
    typewriterWords: [
      "I love to code.",
      "I build and secure infrastructure.",
      "I automate everything.",
      "I love to solve problems.",
      "I care about privacy.",
      "I am a cybersecurity enthusiast."
    ],
    // Custom footer note (not used by default Docusaurus footer)
    footerNote: "Copyright © {new Date().getFullYear()} Horia Delicoti, Powered by Docusaurus.",
  },

  // Presets configure docs, blog, and theme
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js', // Sidebar config for docs
          // editUrl: '', // Uncomment and set to enable "Edit this page" links
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // editUrl: '', // Uncomment and set to enable "Edit this page" links
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css', // Path to custom CSS
        },
      }),
    ],
  ],

  plugins: [
    // "CTF" page plugin (docs-style)
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'ctf', // Must match docPluginId in navbar
        path: 'ctf', // Folder on disk
        routeBasePath: 'ctf', // URL path
        sidebarPath: './sidebars.js',
      },
    ],
    // Ideal Image plugin used by Docusaurus Showcase (@theme/IdealImage)
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640,  // min resized image's size. if original is lower, use that size.
        steps: 2,  // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
  ],

  // Theme configuration (navbar, code highlighting, etc)
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Navbar configuration
      navbar: {
        title: 'Horia Delicoti',
        logo: {
          alt: 'Horia Delicoti Logo',
          src: 'img/profile.jpeg',
        },
        items: [
          {to: '/about', label: 'About Me', position: 'right'},
          {to: '/blog', label: 'Blog', position: 'right'},
          {to: '/projects', label: 'Projects', position: 'right', activeBaseRegex: `/projects/`}, // Active when on Projects pages
          {to: '/ctf', label: 'CTF', position: 'right', activeBaseRegex: `/ctf/`}, // Active when on CTF pages
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: 'Wiki',
          },
          {
            href: 'https://github.com/horia-delicoti',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      // Prism code block themes
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash'],
      },
      // You can add a footer config here if you want to use the built-in Docusaurus footer
      // footer: {
      //   style: 'dark',
      //   copyright: `Copyright © ${new Date().getFullYear()} Horia Delicoti, Powered by Docusaurus.`,
      // },
    }),
};

export default config;
