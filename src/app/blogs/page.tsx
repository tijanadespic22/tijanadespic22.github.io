import type {Metadata} from 'next';
import {memo} from 'react';
import Blogs from '@components/blogs/Blogs';
import blogs from '@data/blogs.json';

export const metadata: Metadata = {
  title: 'Blog — UI/UX Dizajn & Web Development | Tijana Despić',
  description:
    'Blog o JavaScriptu, UI/UX dizajnu i modernom web developmentu. Kratki vodiči, praktični saveti i objašnjenja za stvarne projekte.',
  alternates: {canonical: 'https://tijanadespic.hok.rs/blogs'},
  openGraph: {
    title: 'Blog — UI/UX Dizajn & Web Development | Tijana Despić',
    description:
      'Blog o JavaScriptu, UI/UX dizajnu i modernom web developmentu. Kratki vodiči, praktični saveti i objašnjenja za stvarne projekte.',
    url: 'https://tijanadespic.hok.rs/blogs',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog — UI/UX Dizajn & Web Development | Tijana Despić',
    description:
      'Blog o JavaScriptu, UI/UX dizajnu i modernom web developmentu. Kratki vodiči, praktični saveti i objašnjenja za stvarne projekte.',
  },
};

const BASE_URL = 'https://tijanadespic.hok.rs';

const BlogsPage = () => {
  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: blogs.slice(0, 3).map((blog, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `${BASE_URL}/blogs/${blog.id}`,
      name: blog.title,
      image: `${BASE_URL}${blog.landingImage}`,
      description: blog.shortDescription,
    })),
  };

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
        item: `${BASE_URL}/blogs`,
      },
    ],
  };

  return (
    <>
      <script
        type={'application/ld+json'}
        dangerouslySetInnerHTML={{__html: JSON.stringify(breadcrumbJsonLd)}}
      />
      <script
        type={'application/ld+json'}
        dangerouslySetInnerHTML={{__html: JSON.stringify(itemListJsonLd)}}
      />
      <Blogs />
    </>
  );
};

export default memo(BlogsPage);
