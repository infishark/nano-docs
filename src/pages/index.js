import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function Home() {

const quickLinks = [
  {
    title: 'Basics',
    emoji: '📖',
    to: '/docs/basics/getting-started',
    description:
      'Get your BLEShark Nano set up, understand charging, and learn how firmware updates work.'
  },
  {
    title: 'Shiver',
    emoji: '🔗',
    to: '/docs/shiver/overview',
    description:
      'Link multiple Nanos into a shared mesh to run commands, sync files, and coordinate across paired devices.'
  },
  {
    title: 'Pentesting',
    emoji: '📡',
    to: '/docs/pentesting/blespam',
    description:
      'Wi-Fi and Bluetooth tools: BLE and AP spam, deauth, handshake capture, evil portals, and more.'
  },
  {
    title: 'Infrared',
    emoji: '📺',
    to: '/docs/infrared/remote',
    description:
      'Capture and emulate IR remotes used in TVs, sound systems, and more.'
  },
  {
    title: 'Apps',
    emoji: '📲',
    to: '/docs/apps/mini-keypad',
    description:
      'Built-in apps: Mini Keypad, Scroller, TxtViewer, Stopwatch, Timer, and more.'
  },
  {
    title: 'Bad-BT',
    emoji: '😈',
    to: '/docs/bad-bt',
    description:
      'Emulate a Bluetooth keyboard and run DuckyScript payloads, with an on-device editor.'
  },
  {
    title: 'Games',
    emoji: '👾',
    to: '/docs/games',
    description:
      'Malware Hunter, Flappy Bird, Invaders, Pong, Breakout, T-Rex, Racing, and more.'
  },
  {
    title: 'Developers',
    emoji: '🖥️',
    to: '/docs/developers/captive-portal',
    description:
      'Information for developers who want to build custom captive portals for the Nano.'
  },
  {
    title: 'Misc',
    emoji: '🔌',
    to: '/docs/misc/emergency-mode',
    description:
      'Everything else: Emergency Mode, Shortcut Guide, Screensaver, and more.'
  },
  {
    title: 'Settings',
    emoji: '⚙️',
    to: '/docs/settings',
    description:
      'Edit settings on-device with Config -> Settings, or manage files with Config -> Transfer.'
  },
];

  return (
    <Layout
      title="Homepage"
      description="Official BLEShark Nano documentation"
    >
      <div className={styles.heroBanner}>
        <img
          src="/img/logo.svg"
          alt="InfiShark Logo"
          className={styles.heroLogo}
        />
        <h1 className={styles.heroTitle}>Welcome to InfiShark Docs</h1>
        <p className={styles.heroSubtitle}>
          Explore the official documentation for the BLEShark Nano.
        </p>
        <div className={styles.quickLinks}>
          {quickLinks.map(({ title, emoji, to, description }) => (
            <Link key={to} to={to} className={styles.linkCard}>
              <div className={styles.cardHeader}>
                <span className={styles.cardHeaderEmoji}>{emoji}</span>
                <h3 className={styles.cardTitle}>{title}</h3>
              </div>
              <p className={styles.cardDesc}>{description}</p>
              <div className={styles.cardArrow}>→</div>
            </Link>
          ))}
        </div>
         <div className={styles.buttons}>
          <a
            href="https://infishark.com"
            target="_blank"
            rel="noopener"
            className={styles.docButton}
          >
            🌐 Visit Website
          </a>
          <a
            href="https://github.com/infishark"
            target="_blank"
            rel="noopener"
            className={styles.docButton}
          >
            💻 GitHub
          </a>
          <a
            href="https://infishark.com/discord"
            target="_blank"
            rel="noopener"
            className={styles.docButton}
          >
            💬 Discord
          </a>
        </div>
      </div>
    </Layout>
  );
}
