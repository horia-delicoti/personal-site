// src/pages/projects/_components/ShowcaseSearchBar/index.tsx
// A simple search bar to filter projects by name
// Used in the Projects page
// Uses the useSearchName hook from _utils.tsx to read/write the search query param
// No i18n needed for the placeholder, as it's a simple input field

import {type ReactNode} from 'react';
import {useSearchName} from '../_utils.tsx';
import styles from './styles.module.css';

export default function ShowcaseSearchBar(): ReactNode {
  const [searchName, setSearchName] = useSearchName();
  return (
    <div className={styles.searchBar}>
      <input
        placeholder={'Search for site name...'}
        value={searchName}
        onInput={(e) => {
          setSearchName(e.currentTarget.value);
        }}
      />
    </div>
  );
}
