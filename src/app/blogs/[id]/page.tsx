import type {Metadata} from 'next';
import blogs from '@data/blogs.json';
import {memo} from 'react';
import OneBlog from '@components/blogs/OneBlog';

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
  const canonical = `https://tijanadespic.hok.rs/blogs/${blog.id}`;
  const imageUrl = `https://tijanadespic.hok.rs${blog.landingImage}`;
  const description = blog.languages?.en?.shortDescription ?? blog.shortDescription;

  return {
    title: `${title} — Blog | Tijana Despić`,
    description,
    alternates: {canonical},
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
  return <OneBlog id={id} />;
};

export default memo(BlogPage);
