import type {Metadata} from 'next';
import {memo} from 'react';
import {BASE_URL} from '@constants/website';
import {getBlogs} from '@/services/Blog';
import BlogList from '@components/blogs/BlogList';

export const metadata: Metadata = {
  title: 'Blog - UI/UX Dizajn & Web Development Portfolio | Tijana Despić',
  description:
    'Blog postovi o UI/UX dizajnu, web developmentu, dizajn procesu i saveti za brendove i startape iz Srbije.',
  alternates: {canonical: 'https://tijanadespic.hok.rs/blog'},
  openGraph: {
    title: 'Blog — UI/UX Dizajn & Web Development Portfolio | Tijana Despić',
    description:
      'Blog postovi o UI/UX dizajnu, web developmentu, dizajn procesu i saveti za brendove i startape iz Srbije.',
    url: 'https://tijanadespic.hok.rs/blog',
  },
};

const BlogPage = async () => {
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
        name: 'Blog',
        item: `${BASE_URL}/blog`,
      },
    ],
  };

  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${BASE_URL}/blog`,
    url: `${BASE_URL}/blog`,
    name: 'Blog — UI/UX Dizajn & Web Development Portfolio | Tijana Despić',
    description:
      'Blog postovi i case studies Tijane Despić — UI/UX dizajn, web aplikacije, mobilni dizajn i logo dizajn za brendove i startape iz Srbije.',
    author: {'@type': 'Person', name: 'Tijana Despić', url: BASE_URL},
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: [] /*caseStudies.map((project, index) => ({
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
      })),*/,
    },
  };

  const blogs = await getBlogs();

  return (
    <main className={'min-h-screen bg-white pt-28 pb-24 dark:bg-gray-900'}>
      <script
        type={'application/ld+json'}
        dangerouslySetInnerHTML={{__html: JSON.stringify(breadcrumbJsonLd)}}
      />
      <script
        type={'application/ld+json'}
        dangerouslySetInnerHTML={{__html: JSON.stringify(collectionJsonLd)}}
      />
      <BlogList blogs={blogs} />
    </main>
  );
};

export default memo(BlogPage);
