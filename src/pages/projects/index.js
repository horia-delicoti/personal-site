// ========================================
// File: src/pages/projects/index.js
// Projects page - lists all projects using the Docusaurus Showcase components
// Uses the ShowcaseCards component to display projects in a card layout with search and filtering
// See: https://docusaurus.io/docs/showcase
// ========================================

// Import Docusaurus Layout component to wrap the page with site chrome (header/footer)
import Layout from '@theme/Layout';
// Import showcase components from the projects folder
import ShowcaseCards from './_components/ShowcaseCards';

// The main title that appears at the top of the page and in the browser tab
const TITLE = 'Projects';

// The Projects page component
// Uses the Layout component to wrap the content and the ShowcaseCards component to display projects
// The showSearch prop enables a search bar to filter projects by name or description
export default function Projects() {
  return (
    <Layout title={TITLE}>
      <main className="margin-vert--lg">
        <ShowcaseCards showSearch />
      </main>
    </Layout>
  );
}