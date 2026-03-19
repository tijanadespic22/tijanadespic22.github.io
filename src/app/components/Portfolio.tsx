import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "../data/portfolio";

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4">Izdvojeni Projekti</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Detaljne studije slučaja koje prikazuju proces, rešenja i rezultate
          </p>
        </div>

        <div className="flex gap-6 overflow-x-scroll pb-2 [scrollbar-width:auto] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-200 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-400 lg:block lg:space-y-12 lg:overflow-visible lg:pb-0 lg:[scrollbar-width:initial]">
          {caseStudies.map((project, index) => (
            <div
              key={project.id}
              className={`w-[75vw] max-w-[75vw] flex-shrink-0 rounded-2xl border border-gray-200 bg-white p-4 flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 lg:w-auto lg:max-w-none lg:flex-shrink lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:gap-12 items-center`}
            >
              {/* Image */}
              <div className="flex-1 w-full">
                <Link to={`/case-study/${project.id}`}>
                  <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-gray-200 cursor-pointer">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="text-white flex items-center gap-2">
                        Detaljnije <ArrowRight size={20} />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-4">
                <div className="inline-block px-3 py-1 bg-white rounded-full text-sm border border-gray-200">
                  {project.category}
                </div>
                <h3 className="text-3xl">{project.title}</h3>
                <p className="text-gray-600 leading-relaxed whitespace-normal break-words">
                  {project.description}
                </p>
                <div className="pt-2">
                  <div className="text-sm text-gray-500 mb-2">Ključni rezultati:</div>
                  <ul className="space-y-2">
                    {project.results.slice(0, 2).map((result, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
