// File: src/pages/projects/_components/ShowcaseCards/index.tsx
// Renders the list of project cards, with a header and a search bar
// Uses the useFilteredProjects hook to get the filtered list of projects
// If no projects match the filter, shows a "No result" message
// The header and search bar are always visible
// Favorites UI removed — we render the filtered projects list only

import type {ReactNode} from 'react';
import clsx from 'clsx';
import type {User} from '../../../../data/users';
import Heading from '@theme/Heading';
import ShowcaseCard from '../ShowcaseCard';
import {useFilteredProjects} from '../_utils';

import styles from './styles.module.css';
import ShowcaseSearchBar from '../ShowcaseSearchBar';

// favorites UI removed — we render the filtered projects list only

function HeadingNoResult() {
  return <Heading as="h2">No result</Heading>
}

function HeadingAllSites() {
  return (
    <Heading as="h2">Projects</Heading>
  );
}

function CardList({heading, items}: {heading?: ReactNode; items: User[]}) {
  return (
    <div className="container">
      {heading}
      <ul className={clsx('clean-list', styles.cardList)}>
        {items.map((item) => (
          <ShowcaseCard key={item.title} user={item} />
        ))}
      </ul>
    </div>
  );
}

function NoResultSection() {
  return (
    <section className="margin-top--lg margin-bottom--xl">
      <div className="container padding-vert--md text--center">
        <HeadingNoResult />
      </div>
    </section>
  );
}

export default function ShowcaseCards() {
  const filteredProjects = useFilteredProjects();

  return (
    <section className="margin-top--lg margin-bottom--xl">
      {/* Header + search bar always visible */}
      <div className={`container ${styles.headerRow}`}>
        <HeadingAllSites />
        <ShowcaseSearchBar />
      </div>

      {/* If no search/filter is applied, show no result section */}
      {filteredProjects.length === 0 ? (
        <NoResultSection />
      ) : (
        <CardList items={filteredProjects} />
      )}
  </section>
  );
}
