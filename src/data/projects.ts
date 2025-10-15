// src/data/projects.ts
// Define your project type here. This is used in the Projects page as well as the homepage
// to showcase some of your projects.

// Define your tags here, and then you can add them to your projects
// Later, you can filter projects by tag in the Projects page
// (you can also add more tags if needed)
export type TagType = keyof typeof Tags;

// Define your tags here
export const Tags = {
  terraform: { label: 'Terraform', description: 'IaC / Terraform', color: '#9276efff' },
  ansible: { label: 'Ansible', description: 'Configuration management', color: '#f88585ff' },
  docker: { label: 'Docker', description: 'Containerization', color: '#2496ed' },
  docusaurus: { label: 'Docusaurus', description: 'Static site / React', color: '#7df9abff' },
  react: { label: 'React', description: 'React.js', color: '#61dafb' },
  python: { label: 'Python', description: 'Python scripts', color: '#60a6dfff' },
  latex: { label: 'LaTeX', description: 'Documentation / typesetting', color: '#08bebeff' },
  json_resume: { label: 'Json', description: 'Documentation / typesetting', color: '#41a2a2ff' },
  jinja: { label: 'Jinja', description: 'Template engine for Python', color: '#f27474ff' },
} as const;

export const TagList: TagType[] = ['terraform', 'ansible', 'docker', 'docusaurus', 'react', 'python', 'latex'];

// 👇 This is your new type
export type Project = {
  title: string;
  description: string;
  website?: string; // demo link (optional)
  source: string;   // GitHub link
  preview: string;  // local image path
  tags: TagType[];
};

// 👇 Example list of your projects
export const projects: Project[] = [
  {
    title: 'Infrastructure',
    description: 'Homelab and cloud infra using Ansible, and Docker.',
    source: 'https://github.com/horia-delicoti/infrastructure',
    preview: '/img/projects/infrastructure.png', // local image under static/img/projects
    tags: ['ansible', 'docker'],
  },
  {
    title: 'Personal Site',
    description: 'This very website, built with Docusaurus and deployed on GitHub Pages.',
    source: 'https://github.com/horia-delicoti/personal-site',
    preview: '/img/projects/personal-site.png',
    tags: ['docusaurus', 'react'],
  },
  {
    title: 'Cybersecurity',
    description: 'Security projects and research scripts.',
    source: 'https://github.com/horia-delicoti/cybersecurity',
    preview: '/img/projects/cybersecurity.png',
    tags: ['python'],
  },
  {
    title: 'CV',
    description: '📄Source code for my CV | Generated LaTeX PDF from JSON Resume data',
    source: 'https://github.com/horia-delicoti/cv',
    preview: '/img/projects/cv.png',
    tags: ['python', 'latex', 'jinja'],
  }
];
