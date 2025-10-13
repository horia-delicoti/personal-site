// src/data/projects.ts
// Define your project type here. This is used in the Projects page as well as the homepage
// to showcase some of your projects.

// Define your tags here, and then you can add them to your projects
// Later, you can filter projects by tag in the Projects page
// (you can also add more tags if needed)
export type TagType = keyof typeof Tags;

// Define your tags here
export const Tags = {
  terraform: { label: 'Terraform', description: 'IaC / Terraform', color: '#623ce4' },
  ansible: { label: 'Ansible', description: 'Configuration management', color: '#ee0000' },
  docker: { label: 'Docker', description: 'Containerization', color: '#2496ed' },
  docusaurus: { label: 'Docusaurus', description: 'Static site / React', color: '#2b6cb0' },
  react: { label: 'React', description: 'React.js', color: '#61dafb' },
  python: { label: 'Python', description: 'Python scripts', color: '#3572A5' },
  latex: { label: 'LaTeX', description: 'Documentation / typesetting', color: '#008080' },
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
    website: '',
    source: 'https://github.com/horia-delicoti/infrastructure',
    preview: '/img/projects/infrastructure.png', // local image under static/img/projects
    tags: ['ansible', 'docker'],
  },
  {
    title: 'Personal Site',
    description: 'This very website, built with Docusaurus and deployed on GitHub Pages.',
    website: 'https://horia.delicoti.com',
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
    description: 'My CV in LaTeX format.',
    source: 'https://github.com/horia-delicoti/cv',
    preview: '/img/projects/cv.png',
    tags: ['latex'],
  }
];
