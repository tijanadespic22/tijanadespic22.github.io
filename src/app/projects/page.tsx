import Link from 'next/link';
import Image from 'next/image';
import {caseStudies} from '@/components/data/portfolio';
import ArrowIcon from '@/icons/ArrowIcon';
import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Projekti — UI/UX Dizajn & Web Development Portfolio',
  description:
    'Portfolio radova Tijane Despić — UI/UX dizajn, web aplikacije, mobilni dizajn i logo dizajn. Pogledaj case studies i rezultate projekata za brendove i startape iz Srbije.',
  alternates: {canonical: 'https://tijanadespic.hok.rs/projects'},
  openGraph: {
    title: 'Projekti — UI/UX Dizajn & Web Development Portfolio | Tijana Despić',
    description:
      'Portfolio radova Tijane Despić — UI/UX dizajn, web aplikacije, mobilni dizajn i logo dizajn za brendove i startape.',
    url: 'https://tijanadespic.hok.rs/projects',
  },
};

const BASE_URL = 'https://tijanadespic.hok.rs';

export default function ProjectsPage() {
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
        name: 'Projekti',
        item: `${BASE_URL}/projects`,
      },
    ],
  };

  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${BASE_URL}/projects`,
    url: `${BASE_URL}/projects`,
    name: 'Projekti — UI/UX Dizajn & Web Development Portfolio | Tijana Despić',
    description:
      'Portfolio radova Tijane Despić — UI/UX dizajn, web aplikacije, mobilni dizajn i logo dizajn za brendove i startape iz Srbije.',
    author: {'@type': 'Person', name: 'Tijana Despić', url: BASE_URL},
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: caseStudies.map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'CreativeWork',
          name: project.title,
          description: project.description,
          image: `${BASE_URL}${project.thumbnail}`,
          keywords: project.technologies.join(', '),
          dateCreated: project.year,
          creator: {'@type': 'Person', name: 'Tijana Despić'},
        },
      })),
    },
  };

  return (
    <main className="bg-white dark:bg-gray-900 min-h-screen pt-28 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(breadcrumbJsonLd)}}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(collectionJsonLd)}}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="group inline-flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition mb-8">
            <ArrowIcon
              width={14}
              height={14}
              className="-rotate-90 transition-transform duration-200 group-hover:-translate-x-1"
            />
            Nazad na početnu
          </Link>
          <h1 className="text-5xl sm:text-6xl mb-4 dark:text-white">Projekti</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
            Izbor radova koji mogu javno da podelim — od brendiranja i UI/UX dizajna do izrade web aplikacija.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {caseStudies.map((project, index) => (
            <div
              key={project.id}
              className="group flex flex-col rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300">
              {/* Slika */}
              <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-700">
                <Image
                  src={project.thumbnail}
                  alt={`${project.title} — ${project.category}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={index === 0}
                />
              </div>

              {/* Info */}
              <div className="flex flex-col flex-1 p-5 gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
                    {project.category}
                  </span>
                </div>
                <h2 className="text-lg font-semibold dark:text-white leading-snug">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.slice(0, 3).map(tech => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-gray-50 dark:bg-gray-700 text-gray-400">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Napomena o poverljivosti */}
        <div className="mt-12 flex items-start gap-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6">
          <span className="text-2xl shrink-0">🔒</span>
          <div>
            <p className="font-semibold text-gray-800 dark:text-white mb-1">Deo portfolija ostaje povjerljiv</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Zbog ugovornih obaveza i zaštite poslovnih informacija klijenata, određeni projekti nisu javno dostupni.
              Ukoliko vas zanima detaljniji uvid u moj rad, slobodno me kontaktirajte — dodatne primere mogu podeliti direktno i diskretno.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-gray-500 dark:text-gray-400 mb-6">Imaš projekat na umu?</p>
          <Link
            href="/#contact"
            className="group inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition">
            Kontaktiraj Me
            <ArrowIcon
              width={18}
              height={18}
              className="rotate-90 transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </main>
  );
}
