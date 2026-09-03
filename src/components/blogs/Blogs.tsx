'use client';
import {memo} from 'react';
import ArrowIcon from '@icons/ArrowIcon';
import Link from 'next/link';
import {useTranslation} from 'react-i18next';
import Image from 'next/image';
import useBlogs from '@hooks/useBlogs';
import Markdown from '@components/Markdown';

const Blogs = () => {
  const {t} = useTranslation();
  const {blogs} = useBlogs();

  return (
    <main className={'min-h-screen bg-gray-50 pt-28 pb-24 dark:bg-gray-950'}>
      <section className={'mx-auto max-w-4xl px-4 sm:px-6 lg:px-8'}>
        <div className={'mb-14 text-center'}>
          <div
            className={
              'mb-4 inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-300'
            }>
            {t('Blog')}
          </div>
          <h1
            className={
              'mx-auto max-w-3xl text-4xl leading-tight sm:text-5xl lg:text-6xl dark:text-white'
            }>
            {t('JavaScript, UI/UX i web development')}
          </h1>
          <p className={'mx-auto mt-5 max-w-2xl text-lg text-gray-600 dark:text-gray-400'}>
            {t(
              'Kratki tekstovi i praktična objašnjenja iz svakodnevnog rada na web sajtovima i aplikacijama.',
            )}
          </p>
        </div>

        <div className={'space-y-8'}>
          {blogs.map((blog, index) => (
            <article
              id={blog.id}
              key={blog.id ?? index}
              className={
                'group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900'
              }>
              <div className={'grid gap-0 lg:grid-cols-[1.2fr_0.8fr]'}>
                <div className={'relative min-h-72 overflow-hidden bg-gray-100 dark:bg-gray-800'}>
                  <Image
                    src={blog.landingImage}
                    alt={blog.title}
                    fill
                    sizes={'(max-width: 1024px) 100vw, 45vw'}
                    className={
                      'object-cover transition-transform duration-500 group-hover:scale-105'
                    }
                  />
                  <div
                    className={
                      'absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent'
                    }
                  />
                  <div className={'absolute right-5 bottom-5 left-5'}>
                    <div className={'mb-3 flex flex-wrap gap-2 text-xs font-semibold'}>
                      <span
                        className={'rounded-full bg-white/15 px-3 py-1 text-white backdrop-blur'}>
                        {new Date(blog.date).toLocaleDateString('sr-RS')}
                      </span>
                      <span
                        className={'rounded-full bg-white/15 px-3 py-1 text-white backdrop-blur'}>
                        {blog.author}
                      </span>
                    </div>
                    <h2 className={'max-w-2xl text-3xl leading-tight font-semibold text-white'}>
                      {blog.title}
                    </h2>
                  </div>
                </div>

                <div className={'flex flex-col justify-between p-6 sm:p-8'}>
                  <div>
                    <div
                      className={
                        'mb-4 inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-blue-700 uppercase dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-300'
                      }>
                      {t('Pročitaj više')}
                    </div>
                    <div
                      className={
                        'prose prose-gray prose-p:leading-relaxed dark:prose-invert max-w-none'
                      }>
                      <Markdown>{blog.shortDescription}</Markdown>
                    </div>
                  </div>

                  <Link
                    href={`/blogs/${blog.id}`}
                    className={
                      'group mt-8 inline-flex items-center gap-2 self-start rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200'
                    }>
                    {t('Otvori blog')}
                    <ArrowIcon
                      width={16}
                      height={16}
                      className={
                        'rotate-90 transition-transform duration-200 group-hover:translate-x-1'
                      }
                    />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default memo(Blogs);
