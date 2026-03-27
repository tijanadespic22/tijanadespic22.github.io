import {caseStudies} from '@/components/data/portfolio';
import type {Metadata} from 'next';
import Projects from '@components/Projects';
import {memo} from 'react';

export const metadata: Metadata = {
  title: 'Projekti — UI/UX Dizajn & Web Development Portfolio',
  description:
    'Portfolio radova Tijane Despić — UI/UX dizajn, web aplikacije, mobilni dizajn i logo dizajn. Pogledaj case studies i rezultate projekata za brendove i startape iz Srbije.',
  alternates: {canonical: 'https://tijanadespic.hok.rs/projects'},
  openGraph: {
    title: 'Projekti — UI/UX Dizajn & Web Development Portfolio | Tijana Despić',
    description:
      'Portfolio radova Tijane Despić — UI/UX dizajn, web aplikacije, mobilni dizajn i logo dizajn za brendove i startape.',
    url: 'https://tijanadespic.hok.rs/projects',
  },
};

const BASE_URL = 'https://tijanadespic.hok.rs';

const ProjectsPage = () => {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Početna',
        item: BASE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Projekti',
        item: `${BASE_URL}/projects`,
      },
    ],
  };

  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${BASE_URL}/projects`,
    url: `${BASE_URL}/projects`,
    name: 'Projekti — UI/UX Dizajn & Web Development Portfolio | Tijana Despić',
    description:
      'Portfolio radova Tijane Despić — UI/UX dizajn, web aplikacije, mobilni dizajn i logo dizajn za brendove i startape iz Srbije.',
    author: {'@type': 'Person', name: 'Tijana Despić', url: BASE_URL},
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: caseStudies.map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'CreativeWork',
          name: project.title,
          description: project.description,
          image: `${BASE_URL}${project.thumbnail}`,
          keywords: project.technologies.join(', '),
          dateCreated: project.year,
          creator: {'@type': 'Person', name: 'Tijana Despić'},
        },
      })),
    },
  };

  return (
    <main className={"min-h-screen bg-white pt-28 pb-24 dark:bg-gray-900"}>
      <script
        type={"application/ld+json"}
        dangerouslySetInnerHTML={{__html: JSON.stringify(breadcrumbJsonLd)}}
      />
      <script
        type={"application/ld+json"}
        dangerouslySetInnerHTML={{__html: JSON.stringify(collectionJsonLd)}}
      />
      <Projects />
    </main>
  );
};

export default memo(ProjectsPage);
