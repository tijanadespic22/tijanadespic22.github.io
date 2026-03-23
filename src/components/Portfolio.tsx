'use client';
import {caseStudies} from './data/portfolio';
import ArrowIcon from '@/icons/ArrowIcon';
import {memo} from 'react';
import {cn} from '@/utils/CN';
import Link from 'next/link';

const Portfolio = () => {
  return (
    <section
      id="projects"
      className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4 dark:text-white">Izdvojeni Projekti</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Detaljne studije slučaja koje prikazuju proces, rešenja i rezultate
          </p>
        </div>

        <div className="flex gap-6 overflow-x-scroll pb-2 [scrollbar-width:auto] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-200 dark:[&::-webkit-scrollbar-track]:bg-gray-700 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-400 dark:[&::-webkit-scrollbar-thumb]:bg-gray-500 lg:block lg:space-y-12 lg:overflow-visible lg:pb-0 lg:[scrollbar-width:initial]">
          {caseStudies.map((project, index) => (
            <div
              key={project.id}
              className={cn(
                'w-[75vw] max-w-[75vw] shrink-0 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4 flex flex-col',
                {
                  'lg:flex-row': index % 2 === 0,
                  'lg:flex-row-reverse': index % 2 !== 0,
                },
                'gap-8 lg:w-auto lg:max-w-none lg:shrink lg:rounded-none lg:border-0 lg:bg-transparent lg:dark:bg-transparent lg:p-0 lg:gap-12 items-center',
              )}>
              {/* Image */}
              <div className="flex-1 w-full">
                <Link
                  href="/projects"
                  className="group relative overflow-hidden rounded-2xl aspect-4/3 bg-gray-200 dark:bg-gray-700 cursor-pointer block">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white flex items-center gap-2">
                      Detaljnije{' '}
                      <ArrowIcon
                        className="rotate-90 transition-transform duration-200 group-hover:translate-x-1"
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                </Link>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-4">
                <div className="inline-block px-3 py-1 bg-white dark:bg-gray-800 rounded-full text-sm border border-gray-200 dark:border-gray-700 dark:text-gray-300">
                  {project.category}
                </div>
                <h3 className="text-3xl dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed whitespace-normal wrap-break-word">
                  {project.description}
                </p>
                <div className="pt-2">
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    Ključni rezultati:
                  </div>
                  <ul className="space-y-2">
                    {project.results.slice(0, 2).map((result, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 shrink-0"></div>
                        <span className="text-gray-700 dark:text-gray-300">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dugme ka svim projektima */}
        <div className="text-center mt-16">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-7 py-3.5 rounded-full font-medium hover:border-gray-500 dark:hover:border-gray-400 transition-colors">
            Svi projekti
            <ArrowIcon
              className="rotate-90 transition-transform duration-200 group-hover:translate-x-1"
              width={18}
              height={18}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default memo(Portfolio);
