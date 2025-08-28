import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import styles from './projects.module.css';

const GITHUB_USERNAME = 'horia-delicoti';
// List your repo names in the order you want them to appear
const PROJECT_ORDER = [
  // Example: 'my-cool-project', 'another-repo', ...
  // Fill in with your actual repo names, in order
  'infrastructure',
  'personal-site',
  'cybersecurity',
  'LinuxFromScratch',
  'dotfiles'
];

function ProjectCard({ repo }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
          <h3>{repo.name}</h3>
        </a>
        {repo.homepage && (
          <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className={styles.demo}>
            Demo
          </a>
        )}
      </div>
      <p className={styles.desc}>{repo.description}</p>
      <div className={styles.meta}>
        <span>★ {repo.stargazers_count}</span>
        <span>● {repo.language}</span>
        <span>Updated: {new Date(repo.updated_at).toLocaleDateString()}</span>
      </div>
    </div>
  );
}

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`)
      .then(res => res.json())
      .then(data => {
        // Only include repos in PROJECT_ORDER, and sort by that order
        const filtered = data
          .filter(repo => PROJECT_ORDER.includes(repo.name))
          .sort((a, b) => PROJECT_ORDER.indexOf(a.name) - PROJECT_ORDER.indexOf(b.name));
        setRepos(filtered);
        setLoading(false);
      });
  }, []);

  return (
    <Layout title="Projects" description="Open-source projects by Horia Delicoti">
      <div className={styles.container}>
        <h1>Projects</h1>
        {loading ? (
          <p>Loading projects…</p>
        ) : (
          <div className={styles.grid}>
            {repos.map(repo => (
              <ProjectCard key={repo.id} repo={repo} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
