'use client';
import useBlog from '@hooks/useBlog';
import {notFound} from 'next/navigation';
import Link from 'next/link';
import ArrowIcon from '@icons/ArrowIcon';
import Image from 'next/image';
import {FC, memo} from 'react';
import {useTranslation} from 'react-i18next';
import Markdown from '@components/Markdown';

const OneBlog: FC<{id: string}> = ({id}) => {
  const {t} = useTranslation();
  const blog = useBlog(id);

  if (!blog) notFound();

  const {title, description} = blog;

  return (
    <main className={'min-h-screen bg-gray-50 pt-28 pb-24 dark:bg-gray-950'}>
      <section className={'mx-auto max-w-4xl px-4 sm:px-6 lg:px-8'}>
        <Link
          href={'/blogs'}
          className={
            'mb-8 inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
          }>
          <ArrowIcon
            width={14}
            height={14}
            className={'-rotate-90 transition-transform duration-200'}
          />
          {t('Nazad na blog')}
        </Link>

        <article
          className={
            'overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-900'
          }>
          <div className={'relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800'}>
            <Image
              src={blog.landingImage}
              alt={blog.title}
              fill
              priority
              className={'object-cover'}
              sizes={'100vw'}
            />
          </div>

          <div className={'p-6 sm:p-10'}>
            <div className={'mb-4 flex flex-wrap gap-2 text-xs font-semibold'}>
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

            <h1 className={'mb-6 text-4xl leading-tight dark:text-white'}>{title}</h1>

            <div className={'prose prose-lg prose-gray dark:prose-invert max-w-none'}>
              <Markdown>{description}</Markdown>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default memo(OneBlog);
