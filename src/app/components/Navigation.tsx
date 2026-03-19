import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-semibold">
            Tijana Despić
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("usluge")} className="text-gray-700 hover:text-black transition">
              Usluge
            </button>
            <button onClick={() => scrollToSection("portfolio")} className="text-gray-700 hover:text-black transition">
              Projekti
            </button>
            <button
              onClick={() => scrollToSection("kontakt")} 
              className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
            >
              Kontakt
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <button 
              onClick={() => scrollToSection("usluge")} 
              className="block w-full text-left text-gray-700 hover:text-black transition"
            >
              Usluge
            </button>
            <button 
              onClick={() => scrollToSection("portfolio")} 
              className="block w-full text-left text-gray-700 hover:text-black transition"
            >
              Projekti
            </button>
            <button
              onClick={() => scrollToSection("kontakt")} 
              className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition w-full"
            >
              Kontakt
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
