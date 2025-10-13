/**
 * Small utility hooks used by the Projects page components.
 *
 * Exports:
 * - useSearchName(): [value, setValue] hook backed by query string 'name'
 * - useTags(): [tags, setTags] hook backed by query string list 'tags'
 * - useOperator(): [operator, toggleOperator] stub (OR/AND toggle)
 * - useFilteredUsers(): returns projects filtered by name and tags
 * - useSiteCountPlural(): plural helper for displaying counts
 */

// Use projects data instead of users
// Keep using the compatibility users shim so existing showcase components don't break
import {useCallback, useMemo} from 'react';
import {translate} from '@docusaurus/Translate';
import {
  usePluralForm,
  useQueryString,
  useQueryStringList,
} from '@docusaurus/theme-common';
import {projects} from '../../../data/projects';

export function useSearchName() {
  return useQueryString('name');
}

export function useTags() {
  return useQueryStringList('tags');
}

type Operator = 'OR' | 'AND';

export function useOperator() {
  const [searchOperator, setSearchOperator] = useQueryString('operator');
  const operator: Operator = searchOperator === 'AND' ? 'AND' : 'OR';
  const toggleOperator = useCallback(() => {
    const newOperator = operator === 'OR' ? 'AND' : null;
    setSearchOperator(newOperator);
  }, [operator, setSearchOperator]);
  return [operator, toggleOperator] as const;
}

function filterUsers({
  users,
  tags,
  operator,
  searchName,
}: {
  users: any[];
  tags: string[];
  operator: Operator;
  searchName: string | null;
}) {
  let filtered = users;

  if (searchName) {
    const q = searchName.toLowerCase();
    filtered = filtered.filter(
      (user) =>
        (user.title && user.title.toLowerCase().includes(q)) ||
        (user.description && user.description.toLowerCase().includes(q)),
    );
  }

  if (!tags || tags.length === 0) {
    return filtered;
  }

  return filtered.filter((user) => {
    if (!user.tags || user.tags.length === 0) return false;
    if (operator === 'AND') {
      return tags.every((tag) => user.tags.includes(tag));
    }
    return tags.some((tag) => user.tags.includes(tag));
  });
}

export function useFilteredUsers() {
  const [tags] = useTags();
  const [searchName] = useSearchName();
  const [operator] = useOperator();
  return useMemo(
    () =>
      filterUsers({
        users: projects,
        tags: tags,
        operator,
        searchName,
      }),
    [tags, operator, searchName],
  );
}

// Compatibility alias: some components import `useFilteredProjects`
// Keep both names to avoid breaking imports.
export function useFilteredProjects() {
  return useFilteredUsers();
}

export function useSiteCountPlural() {
  const {selectMessage} = usePluralForm();
  return (sitesCount: number) =>
    selectMessage(
      sitesCount,
      translate(
        {
          id: 'showcase.filters.resultCount',
          description:
            'Pluralized label for the number of sites found on the showcase',
          message: '1 project|{sitesCount} projects',
        },
        {sitesCount},
      ),
    );
}
