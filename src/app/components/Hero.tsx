import { ArrowRight } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("kontakt");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute inset-0 z-0 lg:visible hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

        <div className="flex lg:flex-row flex-col lg:items-center lg:justify-between">
          <div className="space-y-8 text-center">
            <div className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200">
              <span className="text-sm text-gray-600">UI/UX Dizajn & Web Development</span>
            </div>

            <h1 className="text-3xl sm:text-3xl lg:text-7xl max-w-4xl mx-auto">
              Transformišem ideje u{" "}
              <span className="relative">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                digitalna iskustva
              </span>
            </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Specijalizovana za kreiranje modernih logoa, web sajtova i aplikacija koje kombinuju vrhunski dizajn sa besprekorno napisanim kodom.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                  onClick={scrollToContact}
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:bg-gray-800 transition flex items-center gap-2"
              >
                Kontaktiraj Me
                <ArrowRight className="group-hover:translate-x-1 transition" size={20} />
              </button>

            </div>

            <div className="pt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600">
              <div className="text-center">
                <div className="text-3xl mb-1">50+</div>
                <div>Projekata</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-3xl mb-1">30+</div>
                <div>Zadovoljnih Klijenata</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-3xl mb-1">7+</div>
                <div>Godina Iskustva</div>
              </div>
            </div>
          </div>
            <img
                src="/cv.jpg"
                alt="Hero Image"
                className="w-1/4 h-auto rounded-2xl shadow-lg lg:visible hidden animate-float"
            />
        </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-gray-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
