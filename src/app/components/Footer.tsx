import { Linkedin, Twitter, Github, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl mb-4">Tijana Despić</h3>
            <p className="text-gray-400 mb-4">
              Specijalizovana za kreiranje modernih web sajtova i aplikacija koje kombinuju vrhunski dizajn sa besprekorno napisanim kodom.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:tijanadespic24@gmail.com"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div className={'flex flex-row justify-between'}>

            <div>
              <h4 className="font-medium mb-4">Usluge</h4>
              <ul className="space-y-2 text-gray-400">
                <li>UI/UX Dizajn</li>
                <li>Web Development</li>
                <li>Responsive Design</li>
                <li>Design Systems</li>
                <li>Konsultacije</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Navigacija</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#usluge" className="hover:text-white transition">Usluge</a>
                </li>
                <li>
                  <a href="#portfolio" className="hover:text-white transition">Portfolio</a>
                </li>
                <li>
                  <a href="#kontakt" className="hover:text-white transition">Kontakt</a>
                </li>
              </ul>
            </div>

          </div>
          </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
          <p>© {currentYear} Tijana Despić. Sva prava zadržana.</p>
        </div>
      </div>
    </footer>
  );
}
