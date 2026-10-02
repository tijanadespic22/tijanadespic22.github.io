'use client';
import useBlog from '@hooks/useBlog';
import {notFound} from 'next/navigation';
import Link from 'next/link';
import ArrowIcon from '@icons/ArrowIcon';
import Image from 'next/image';
import {FC, memo} from 'react';
import {useTranslation} from 'react-i18next';
import Markdown from '@components/Markdown';

type ContentImage = {
  src: string;
  alt: string;
  altEn: string;
};

const OneBlog: FC<{id: string}> = ({id}) => {
  const {
    t,
    i18n: {language},
  } = useTranslation();
  const blog = useBlog(id);

  if (!blog) notFound();

  const {title, description} = blog;
  const galleryHeading = language.startsWith('en')
    ? '## Selling with confidence'
    : '## Prodaja koja uliva poverenje';
  const galleryPosition = description.indexOf(galleryHeading);
  const hasInlineGallery = blog.contentImages?.length > 0 && galleryPosition >= 0;

  return (
    <main className={'min-h-screen bg-gray-50 pt-28 pb-24 dark:bg-gray-950'}>
      <section className={'mx-auto max-w-4xl px-4 sm:px-6 lg:px-8'}>
        <Link
          href={'/blogs'}
          aria-label={'Nazad na blog listu'}
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
          <div className={'relative aspect-[16/9] overflow-hidden bg-gray-100 dark:bg-gray-800'}>
            <Image
              src={blog.landingImage}
              alt={blog.landingImageAlt ?? blog.title}
              fill
              priority
              className={'object-cover'}
              sizes={'100vw'}
            />
            <div className={'absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent'} />
            <div className={'absolute bottom-5 left-5 right-5'}>
              <span className={'inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur'}>
                {'Blog'}
              </span>
              <h1 className={'mt-4 max-w-3xl text-4xl leading-tight text-white sm:text-5xl'}>
                {title}
              </h1>
            </div>
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

            <div
              className={
                'prose prose-lg prose-gray max-w-none dark:prose-invert prose-headings:scroll-mt-24 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 dark:prose-strong:text-white'
              }>
              {hasInlineGallery ? (
                <>
                  <Markdown>{description.slice(0, galleryPosition)}</Markdown>
                  <div className={'not-prose my-8 grid grid-cols-2 gap-3 sm:gap-5'}>
                    {blog.contentImages.map((image: ContentImage) => {
                      const alt = language.startsWith('en') ? image.altEn : image.alt;

                      return (
                        <figure
                          key={image.src}
                          className={'min-w-0'}>
                          <div className={'relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800'}>
                            <Image
                              src={image.src}
                              alt={alt}
                              fill
                              sizes={'(max-width: 640px) 45vw, 300px'}
                              className={'object-contain'}
                            />
                          </div>
                          <figcaption className={'mt-2 text-center text-xs leading-relaxed text-gray-600 dark:text-gray-400'}>
                            {alt}
                          </figcaption>
                        </figure>
                      );
                    })}
                  </div>
                  <Markdown>{description.slice(galleryPosition)}</Markdown>
                </>
              ) : (
                <Markdown>{description}</Markdown>
              )}
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default memo(OneBlog);
