import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Typewriter } from 'react-simple-typewriter';
import { FaLinkedin, FaGithub, FaEnvelope, FaGoodreadsG } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import styles from './index.module.css';

export default function Home() {
  // Access Docusaurus site config to keep content and links consistent across the site
  const {siteConfig} = useDocusaurusContext();
  return (
    // Use Docusaurus Layout for SEO, meta tags, and consistent site structure
    <Layout title="Portfolio" description="Horia Delicoti's personal website">
      <main>
        <section className={styles.heroSection}>
          {/* Personal greeting and branding for immediate visitor engagement */}
          <span className={styles.introText}>Hi, my name is</span>
          <h1 className={styles.name}>{siteConfig.title}.</h1>
          {/* Typewriter effect to showcase skills and personality in a dynamic way */}
          <h2 className={styles.typewriter}>
            <Typewriter
              words={siteConfig.customFields.typewriterWords}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={40}
              delaySpeed={1200}
            />
          </h2>
          {/* Short professional summary for clarity and SEO */}
          <p className={styles.description}>
            {siteConfig.customFields.description}
          </p>
          <div className={styles.buttonRow}>
            {/* Downloadable CV for recruiters and collaborators */}
            <a
              href="/files/Horia_Delicoti_CV.pdf"
              className={styles.cvButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
            <div className={styles.socials}>
              {/* Social/contact icons for quick access to professional profiles and communication */}
              <a
                href={siteConfig.customFields.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={styles.socialIcon}
              >
                <FaLinkedin size={28} />
              </a>
              <a
                href={siteConfig.customFields.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className={styles.socialIcon}
              >
                <FaGithub size={28} />
              </a>
              <a
                href={siteConfig.customFields.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
                className={styles.socialIcon}
              >
                <SiLeetcode size={28} />
              </a>
              <a
                href={siteConfig.customFields.goodreads}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Goodreads"
                className={styles.socialIcon}
              >
                <FaGoodreadsG size={28} />
              </a>
              <a
                href={`mailto:${siteConfig.customFields.email}`}
                aria-label="Email"
                className={styles.socialIcon}
              >
                <FaEnvelope size={28} />
              </a>
            </div>
          </div>
        </section>
      </main>
      {/* Custom footer for copyright and attribution, reinforcing site ownership and open source status */}
      <footer className={styles.customFooter}>
        {siteConfig.customFields.footerNote.replace('{new Date().getFullYear()}', new Date().getFullYear())}
      </footer>
    </Layout>
  );
}