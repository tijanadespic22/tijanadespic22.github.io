'use client';

import {memo} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import blogs from '@data/blogs.json';
import ArrowIcon from '@icons/ArrowIcon';
import Markdown from '@components/Markdown';
import {useTranslation} from 'react-i18next';

const Blogs = () => {
  const visibleBlogs = blogs.slice(0, 3);
  const {t} = useTranslation();

  return (
    <section
      className={'bg-white py-24 dark:bg-gray-900'}
      id={'blogs'}>
      <div className={'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'}>
        <div className={'mb-16 text-center'}>
          <div
            className={
              'mb-4 inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-300'
            }>
            {t('Blog')}
          </div>
          <h2 className={'mb-4 text-4xl sm:text-5xl dark:text-white'}>{t('Poslednji tekstovi')}</h2>
        </div>

        <div className={'grid gap-8 md:grid-cols-2 lg:grid-cols-3'}>
          {visibleBlogs.map(blog => (
            <article
              key={blog.id}
              className={
                'group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-950'
              }>
              <div className={'relative aspect-[16/10] overflow-hidden'}>
                <Image
                  src={blog.landingImage}
                  alt={blog.title}
                  fill
                  className={'object-cover transition-transform duration-500 group-hover:scale-105'}
                  sizes={'(max-width: 768px) 100vw, 33vw'}
                />
                <div
                  className={
                    'absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent'
                  }
                />
              </div>

              <div className={'flex h-full flex-col p-6'}>
                <div className={'mb-3 flex flex-wrap gap-2 text-xs font-semibold'}>
                  <span
                    className={
                      'rounded-full bg-blue-50 px-3 py-1 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300'
                    }>
                    {new Date(blog.date).toLocaleDateString('sr-RS')}
                  </span>
                  <span
                    className={
                      'rounded-full bg-gray-100 px-3 py-1 text-gray-700 dark:bg-gray-800 dark:text-gray-300'
                    }>
                    {blog.author}
                  </span>
                </div>

                <h3
                  className={
                    'mb-3 text-2xl leading-tight font-semibold text-gray-900 dark:text-white'
                  }>
                  {blog.title}
                </h3>

                <div className={'mb-6 flex-1'}>
                  <Markdown>{blog.shortDescription}</Markdown>
                </div>

                <Link
                  href={`/blogs/${blog.id}`}
                  className={
                    'group inline-flex items-center gap-2 self-start rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200'
                  }>
                  {'Otvori blog'}
                  <ArrowIcon
                    width={16}
                    height={16}
                    className={
                      'rotate-90 transition-transform duration-200 group-hover:translate-x-1'
                    }
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className={'mt-14 text-center'}>
          <Link
            href={'/blogs'}
            className={
              'group inline-flex items-center gap-2 rounded-full border border-gray-300 px-7 py-3.5 font-medium text-gray-700 transition-colors hover:border-gray-500 dark:border-gray-600 dark:text-gray-300 dark:hover:border-gray-400'
            }>
            {t('Vidi sve blogove')}
            <ArrowIcon
              width={18}
              height={18}
              className={'rotate-90 transition-transform duration-200 group-hover:translate-x-1'}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default memo(Blogs);
