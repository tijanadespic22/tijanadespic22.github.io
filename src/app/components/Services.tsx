import {Palette, Code2, Figma, Layout, Smartphone, Zap, Codesandbox, MapPinIcon} from "lucide-react";

export function Services() {
  return (
    <section id="usluge" className="py-24 bg-white">
      <div className="md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4">Šta Nudim</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Kompletan spektar usluga od koncepta do implementacije
          </p>
        </div>

        <div className="mb-16 flex gap-6 overflow-x-scroll pb-2 [scrollbar-width:auto] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-200 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-400 lg:grid lg:grid-cols-3 lg:gap-12 lg:overflow-visible lg:pb-0 lg:[scrollbar-width:initial]">
          {/* UI/UX Dizajn */}
          <div className="group w-[75vw] max-w-[75vw] flex-shrink-0 p-8 rounded-2xl border-2 border-gray-200 hover:border-pink-500 transition-all hover:shadow-xl lg:min-w-0 lg:w-auto lg:max-w-none lg:flex-shrink">
            <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-pink-500 transition">
              <Codesandbox className="group-hover:text-white transition" size={28} />
            </div>
            <h3 className="text-2xl mb-4">Logo Dizajn</h3>
            <p className="text-gray-600 mb-6 whitespace-normal break-words">
              Izrada profesionalnog i jedinstvenog logotipa koji savršeno predstavlja vaš biznis. Svaki dizajn je pažljivo osmišljen da ostavi snažan vizuelni utisak i izgradi prepoznatljiv identitet.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                </div>
                <span className="text-gray-700">
                    Custom Logo Design & Branding
                </span>
              </li>
                <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">
                    Logo Redesign & Modernization
                </span>
                </li>
                <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">
                    Brand Identity & Style Guides
                </span>
                </li>
                 <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">
                    Logo Animation & Motion Graphics
                </span>
                </li>

            </ul>
          </div>
          {/* UI/UX Dizajn */}
          <div className="group w-[75vw] max-w-[75vw] flex-shrink-0 p-8 rounded-2xl border-2 border-gray-200 hover:border-blue-500 transition-all hover:shadow-xl lg:min-w-0 lg:w-auto lg:max-w-none lg:flex-shrink">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500 transition">
              <Palette className="group-hover:text-white transition" size={28} />
            </div>
            <h3 className="text-2xl mb-4">UI/UX Dizajn</h3>
            <p className="text-gray-600 mb-6 whitespace-normal break-words">
              Kreiram intuitivna i vizuelno privlačna korisnička iskustva koja rešavaju stvarne probleme. Od istraživanja korisnika do finalnog dizajna, svaki detalj je pažljivo osmišljen.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
                <span className="text-gray-700">User Research & Personas</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
                <span className="text-gray-700">Wireframing & Prototyping</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
                <span className="text-gray-700">Visual Design & Brand Identity</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
                <span className="text-gray-700">Design Systems & Style Guides</span>
              </li>
            </ul>
          </div>
          {/* Web Development */}
          <div className="group w-[75vw] max-w-[75vw] flex-shrink-0 p-8 rounded-2xl border-2 border-gray-200 hover:border-purple-500 transition-all hover:shadow-xl lg:min-w-0 lg:w-auto lg:max-w-none lg:flex-shrink">
            <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500 transition">
              <Code2 className="group-hover:text-white transition" size={28} />
            </div>
            <h3 className="text-2xl mb-4">Izrada Web Sajtova</h3>
            <p className="text-gray-600 mb-6 whitespace-normal break-words">
              Razvijam moderne, brze i responsive web sajtove koristeći najnovije tehnologije. Svaki projekat je optimizovan za performanse i SEO sa čistim, održivim kodom.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                </div>
                <span className="text-gray-700">Frontend Development (React, Next.js)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                </div>
                <span className="text-gray-700">Responsive & Mobile-First Design</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                </div>
                <span className="text-gray-700">API Integration & Backend</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                </div>
                <span className="text-gray-700">Performance Optimization & SEO</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl mb-8 text-center">Alati & Tehnologije</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="flex flex-col items-center gap-3 p-4 bg-white rounded-xl hover:shadow-md transition">
              <Figma size={32} />
              <span className="text-sm text-gray-600">Figma</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-4 bg-white rounded-xl hover:shadow-md transition">
              <Code2 size={32} />
              <span className="text-sm text-gray-600">React</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-4 bg-white rounded-xl hover:shadow-md transition">
              <Layout size={32} />
              <span className="text-sm text-gray-600">Next.js</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-4 bg-white rounded-xl hover:shadow-md transition">
              <Smartphone size={32} />
              <span className="text-sm text-gray-600">Tailwind CSS</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-4 bg-white rounded-xl hover:shadow-md transition">
              <Zap size={32} />
              <span className="text-sm text-gray-600">TypeScript</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-4 bg-white rounded-xl hover:shadow-md transition">
              <Code2 size={32} />
              <span className="text-sm text-gray-600">Node.js</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-4 bg-white rounded-xl hover:shadow-md transition">
              <Code2 size={32} />
              <span className="text-sm text-gray-600">Java</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-4 bg-white rounded-xl hover:shadow-md transition">
              <MapPinIcon size={32} />
              <span className="text-sm text-gray-600">Maps</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-4 bg-white rounded-xl hover:shadow-md transition">
              <Code2 size={32} />
              <span className="text-sm text-gray-600">Strapi</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
