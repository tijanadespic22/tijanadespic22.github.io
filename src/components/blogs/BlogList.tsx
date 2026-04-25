'use client';
import {FC, memo} from 'react';
import Link from 'next/link';
import dayjs from 'dayjs';
import {cn} from '@utils/CN';

type BlogListProps = {
  blogs: Page<Blog>;
};

const BlogList: FC<BlogListProps> = ({blogs}) => {
  return (
    <section className={'grid grid-cols-1 gap-4 p-8 md:grid-cols-2 lg:grid-cols-3'}>
      {[...blogs.data, ...blogs.data].map((blog, idx) => (
        <Link
          href={`/blog/${blog.slug}`}
          key={blog.slug + idx}
          className={cn(
            'relative flex flex-col rounded-lg bg-white shadow-lg dark:bg-gray-800',
            'group:hover z-10 duration-300',
          )}>
          <div
            className={
              'absolute top-4 left-4 z-20 flex flex-row gap-2 rounded-full bg-white/80 p-2 text-black dark:bg-gray-800/80 dark:text-white'
            }>
            {blog?.tags?.map(tag => (
              <span
                key={tag}
                className={'mr-2 last:mr-0'}>
                {tag}
              </span>
            ))}
          </div>
          <img
            src={blog?.coverImage?.medium}
            alt={blog.title}
            className={'h-64 w-full rounded-lg object-cover group-hover:scale-105'}
          />

          <div className={'flex flex-1 flex-col gap-4 p-4'}>
            <h2 className={'text-3xl font-bold text-black dark:text-white'}>{blog.title}</h2>
            <p className={'text-black/50 dark:text-white/50'}>{blog.shortDescription}</p>
            <div className={'mt-auto flex flex-row justify-end'}>
              <span className={'text-black/50 dark:text-white/50'}>
                {dayjs(blog.date).locale('sr').format('D. MMMM YYYY')}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default memo(BlogList);
