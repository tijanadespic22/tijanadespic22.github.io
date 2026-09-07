import type {Metadata} from 'next';
import blogs from '@data/blogs.json';
import {memo} from 'react';
import OneBlog from '@components/blogs/OneBlog';
import {BASE_URL} from '@constants/website';

type Params = {id: string};

const getBlog = (id: string) => blogs.find(blog => blog.id === id);

export const generateStaticParams = () =>
  blogs.map(blog => ({
    id: blog.id,
  }));

export const generateMetadata = async ({params}: {params: Promise<Params>}): Promise<Metadata> => {
  const {id} = await params;
  const blog = getBlog(id);

  if (!blog) return {};

  const title = blog.languages?.en?.title ?? blog.title;
  const canonical = `${BASE_URL}/blogs/${blog.id}`;
  const imageUrl = `${BASE_URL}${blog.landingImage}`;
  const description = blog.languages?.en?.shortDescription ?? blog.shortDescription;

  return {
    title: `${title} — Blog | Tijana Despić`,
    description,
    alternates: {
      canonical,
      languages: {
        sr: canonical,
        en: canonical,
        'x-default': canonical,
      },
    },
    openGraph: {
      title: `${title} — Blog | Tijana Despić`,
      description,
      url: canonical,
      type: 'article',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} — Blog | Tijana Despić`,
      description,
      images: [imageUrl],
    },
  };
};

const BlogPage = async ({params}: {params: Promise<Params>}) => {
  const {id} = await params;
  const blog = getBlog(id);

  if (!blog) return null;

  const encodedUrl = `${BASE_URL}/blogs/${blog.id}`;
  const article = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blog.title,
    description: blog.shortDescription,
    image: `${BASE_URL}${blog.landingImage}`,
    datePublished: blog.date,
    dateModified: blog.date,
    author: {
      '@type': 'Person',
      name: blog.author,
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Person',
      name: 'Tijana Despić',
      url: BASE_URL,
    },
    mainEntityOfPage: encodedUrl,
    url: encodedUrl,
  };

  return (
    <>
      <script
        type={'application/ld+json'}
        dangerouslySetInnerHTML={{__html: JSON.stringify(article)}}
      />
      <OneBlog id={id} />
    </>
  );
};

export default memo(BlogPage);
