// File: src/pages/projects/_components/ShowcaseCard/index.tsx
// Showcase card component, used in the Projects page and homepage
// Renders a card with project image, title, description, tags, and links to website and source
// Uses IdealImage for optimized image loading
// Uses TagItem component to render tags with color labels
// Uses Docusaurus Link component for navigation
// Uses Docusaurus Heading component for titles
// Uses CSS modules for styling

import React from 'react';
import clsx from 'clsx';
// import Link from '@docusaurus/Link';
import { Link } from 'react-router-dom';
import {Tags, TagList, type TagType, type Project} from '../../../../data/projects';
import {sortBy} from '../../../../utils/jsUtils';
// import Heading from '@theme/Heading';
import styles from './styles.module.css';

// Helper to detect external URLs (http(s), mailto, tel, or protocol-relative)
const isExternalUrl = (u?: string) => {
  if (!u) return false;
  // Matches: http://, https://, // (protocol relative), mailto:, tel:, or starting with www.
  return /^(https?:|mailto:|tel:|\/\/)/i.test(u as string) || /^www\./i.test(u as string);
};

function TagItem({
  label,
  emoji,
  description,
  color,
}: {
  label: string;
  emoji?: React.ReactNode;
  description: string;
  color: string;
}) {
  return (
    <li className={styles.tag} title={description} style={{backgroundColor: color}}>
      <span className={styles.textLabel}>
        {emoji ? <span style={{marginRight: 6}}>{emoji}</span> : null}
        {label.toLowerCase()}
      </span>
    </li>
  );
}

function ShowcaseCardTag({tags}: {tags: TagType[]}) {
  const tagObjects = tags.map((tag) => ({tag, ...Tags[tag]}));

  // Keep same order for all tags
  const tagObjectsSorted = sortBy(tagObjects, (tagObject) =>
    TagList.indexOf(tagObject.tag),
  );

  return (
    <>
      {tagObjectsSorted.map((tagObject, index) => {
        const emoji = (() => {
          switch (tagObject.tag) {
            case 'python':
              return <img src="/img/projects/logo/python.png" aria-hidden="true" className={styles.tagIcon} />;
            case 'docker':
              return '🐳';
            case 'react':
              return '⚛️';
            case 'docusaurus':
              return <img src="/img/projects/logo/docusaurus.svg" aria-hidden="true" className={styles.tagIcon} />;
            case 'terraform':
              return '📦';
            case 'ansible':
              return '🤖';
            case 'latex':
              return '📐';
            case 'jinja':
              return <img src="/img/projects/logo/jinja.png" aria-hidden="true" className={styles.tagIcon} />;
            default:
              return '🔧';
          }
        })();
        return (
          <TagItem
            key={index}
            label={tagObject.label}
            description={tagObject.description}
            color={tagObject.color}
            emoji={emoji}
          />
        );
      })}
    </>
  );
}

function getCardImage(user: Project): string {
  if (user.preview) return user.preview;
  if (!user.website) return '/img/projects/personal-site.png';
  return `https://slorber-api-screenshot.netlify.app/${encodeURIComponent(
    user.website,
  )}/showcase`;
}

function ShowcaseCard({user}: {user: Project}) {
  const image = getCardImage(user);
  return (
    <li key={user.title} className="card shadow--md">
      <div className={clsx('card__image', styles.showcaseCardImage)}>
        <img src={image} alt={user.title} className={styles.showcaseCardImage} />
      </div>
      <div className="card__body">
        <div className={clsx(styles.showcaseCardHeader)}>
          <h4 className={styles.showcaseCardTitle}>
            {user.website && isExternalUrl(user.website) ? (
              <a
                href={user.website}
                className={styles.showcaseCardLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {user.title}
              </a>
            ) : (
              <Link to={user.website ?? '#'} className={styles.showcaseCardLink}>
                {user.title}
              </Link>
            )}
          </h4>
          {user.website && (
            isExternalUrl(user.website) ? (
              <a
                href={user.website}
                className={clsx('button button--primary button--sm')}
                style={{marginRight: '0.5rem'}}
                target="_blank"
                rel="noopener noreferrer"
              >
                🚀 live
              </a>
            ) : (
              <Link
                to={user.website}
                className={clsx('button button--primary button--sm')}
                style={{marginRight: '0.5rem'}}
              >
                🚀 live
              </Link>
            )
          )}
          {user.source && (
            // Source URLs are external (GitHub etc.) — render as anchor
            <a
              href={user.source}
              className={clsx(
                'button button--secondary button--sm',
                styles.showcaseCardSrcBtn,
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              🐙 source
            </a>
          )}
        </div>
        <p className={styles.showcaseCardBody}>{user.description}</p>
      </div>
      <ul className={clsx('card__footer', styles.cardFooter)}>
        <ShowcaseCardTag tags={user.tags} />
      </ul>
    </li>
  );
}

export default React.memo(ShowcaseCard);
