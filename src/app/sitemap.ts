import type {MetadataRoute} from 'next';
import {BASE_URL} from '@constants/website';
import blogs from '@data/blogs.json';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blogs`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...blogs.map(blog => ({
      url: `${BASE_URL}/blogs/${blog.id}`,
      lastModified: new Date(blog.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
