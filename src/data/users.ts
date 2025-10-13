// Compatibility shim: map old `users` API to the new `projects` data
// Why do I need this? 
// Because the Docusaurus showcase components (ShowcaseCard, ShowcaseCards, etc.) expect a `users` data file with a specific structure.
// Instead of rewriting all the components to use `projects`, we create this shim to map `users` to `projects`.
// This way, we can leverage the existing showcase components without modification, while still using our `projects` data.
// This is especially useful if you want to use the showcase components for a projects page, as they provide useful features like filtering and searching out of the box.

import type {Project} from './projects';
import {projects, Tags as ProjectTags, TagList as ProjectTagList, type TagType as ProjectTagType} from './projects';

export type User = Project;

export const Tags = ProjectTags;

export type TagType = ProjectTagType;

export const TagList: TagType[] = ProjectTagList;

// sortedUsers previously existed; keep the same name for compatibility
export const sortedUsers: User[] = projects;

export default sortedUsers;
