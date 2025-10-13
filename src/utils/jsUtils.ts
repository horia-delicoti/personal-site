// File: src/utils/jsUtils.ts
// Utility function to sort an array of objects by a specific key
// Returns a new sorted array (does not mutate the input array)

// Why need this?
// Because we need to sort tags in a specific order, and also sort projects by name
// This is a generic utility function that can be reused in other parts of the codebase

// Example usage:
// const sortedProjects = sortBy(projects, project => project.title);
// const sortedTags = sortBy(tags, tag => tag.label);

export function sortBy<T>(arr: T[], getKey: (item: T) => string | number): T[] {
  return [...arr].sort((a, b) => {
    const ka = getKey(a);
    const kb = getKey(b);
    if (ka < kb) return -1;
    if (ka > kb) return 1;
    return 0;
  });
}


