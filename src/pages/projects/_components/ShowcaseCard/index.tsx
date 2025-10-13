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
import Link from '@docusaurus/Link';
import Image from '@theme/IdealImage';
import {Tags, TagList, type TagType, type Project} from '../../../../data/projects';
import {sortBy} from '../../../../utils/jsUtils';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

function TagItem({
  label,
  description,
  color,
}: {
  label: string;
  description: string;
  color: string;
}) {
  return (
    <li className={styles.tag} title={description}>
      <span className={styles.textLabel}>
        {/* emoji will be included by the caller in the label */}
        {label.toLowerCase()}
      </span>
      <span className={styles.colorLabel} style={{backgroundColor: color}} />
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
              return '🐍';
            case 'docker':
              return '🐳';
            case 'react':
            case 'docusaurus':
              return '⚛️';
            case 'terraform':
              return '📦';
            case 'ansible':
              return '🤖';
            case 'latex':
              return '📐';
            default:
              return '🔧';
          }
        })();
        return (
          <TagItem
            key={index}
            {...tagObject}
            // Prepend emoji to the label for visual cue
            label={`${emoji} ${tagObject.label}`}
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
        <Image img={image} alt={user.title} />
      </div>
      <div className="card__body">
        <div className={clsx(styles.showcaseCardHeader)}>
          <Heading as="h4" className={styles.showcaseCardTitle}>
            <Link href={user.website} className={styles.showcaseCardLink}>
              {user.title}
            </Link>
          </Heading>
          {user.website && (
            <Link
              href={user.website}
              className={clsx('button button--primary button--sm')}
              style={{marginRight: '0.5rem'}}
            >
              🚀 live
            </Link>
          )}
          {user.source && (
            <Link
              href={user.source}
              className={clsx(
                'button button--secondary button--sm',
                styles.showcaseCardSrcBtn,
              )}>
              🐙 source
            </Link>
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
