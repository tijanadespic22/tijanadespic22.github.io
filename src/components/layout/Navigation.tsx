'use client';
import {memo, useEffect, useState} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import CloseIcon from '@/icons/CloseIcon';
import MenuIcon from '@/icons/MenuIcon';
import ThemeToggle from '@/components/ThemeToggle';
import ScrollProgress from '@/components/ScrollProgress';
import {cn} from '@/utils/CN';

const homeLinks = [
  {href: '/', title: 'Početna', section: ''},
  {href: '/#services', title: 'Usluge', section: 'services'},
  {href: '/#projects', title: 'Projekti', section: 'projects'},
  {href: '/#packages', title: 'Paketi', section: 'packages'},
];

const pageLinks = [
  {href: '/projects', title: 'Svi projekti'},
  {href: '/about', title: 'O meni'},
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const pathname = usePathname();

  const isHome = pathname === '/';

  useEffect(() => {
    if (!isHome) return;

    const sections = homeLinks
      .filter(l => l.section !== '')
      .map(l => ({id: l.section, el: document.getElementById(l.section)}))
      .filter(s => s.el !== null) as {id: string; el: HTMLElement}[];

    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY < 80) {
        setActiveSection('');
        return;
      }

      let current = '';
      for (const s of sections) {
        if (s.el.offsetTop - window.innerHeight * 0.45 <= scrollY) {
          current = s.id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, {passive: true});
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      setActiveSection('');
    };
  }, [isHome]);

  const navLinkCls = (isActive: boolean) =>
    cn(
      'px-3 py-1.5 rounded-lg text-sm transition-colors',
      isActive
        ? 'bg-gray-100 dark:bg-gray-800 text-black dark:text-white font-medium'
        : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800',
    );

  const mobileLinkCls = (isActive: boolean) =>
    cn(
      'block w-full text-left py-1.5 px-2 rounded-lg text-sm transition-colors',
      isActive
        ? 'text-black dark:text-white font-medium bg-gray-100 dark:bg-gray-800'
        : 'text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white',
    );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="mx-auto px-4">
        <div className="flex flex-row justify-between items-center h-16">
          <Link
            href="/"
            className="text-xl font-semibold text-black dark:text-white">
            Tijana Despić
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {homeLinks.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className={navLinkCls(
                  isHome && (item.section === '' ? activeSection === '' : activeSection === item.section)
                )}>
                {item.title}
              </Link>
            ))}

            <div className="w-px h-4 bg-gray-300 dark:bg-gray-600 mx-2" />

            {pageLinks.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className={navLinkCls(pathname === item.href)}>
                {item.title}
              </Link>
            ))}

            <div className="w-px h-4 bg-gray-300 dark:bg-gray-600 mx-2" />

            <Link
              href="/#contact"
              className="bg-black dark:bg-white text-white dark:text-black px-5 py-2 rounded-full text-sm hover:bg-gray-800 dark:hover:bg-gray-200 transition">
              Kontakt
            </Link>

            <ThemeToggle />
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700 dark:text-gray-300"
              aria-label="Toggle menu">
              {isOpen ? (
                <CloseIcon
                  width={24}
                  height={24}
                />
              ) : (
                <MenuIcon
                  width={24}
                  height={24}
                />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-1 border-t border-gray-100 dark:border-gray-800">
            <p className="text-[10px] uppercase tracking-widest text-gray-400 dark:text-gray-500 px-2 pb-1">
              Na početnoj
            </p>
            {homeLinks.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className={mobileLinkCls(
                  isHome && (item.section === '' ? activeSection === '' : activeSection === item.section)
                )}
                onClick={() => setIsOpen(false)}>
                {item.title}
              </Link>
            ))}

            <div className="border-t border-gray-100 dark:border-gray-800 my-3" />

            <p className="text-[10px] uppercase tracking-widest text-gray-400 dark:text-gray-500 px-2 pb-1">
              Stranice
            </p>
            {pageLinks.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className={mobileLinkCls(pathname === item.href)}
                onClick={() => setIsOpen(false)}>
                {item.title}
              </Link>
            ))}

            <div className="border-t border-gray-100 dark:border-gray-800 my-3" />

            <Link
              href="/#contact"
              className="block bg-black dark:bg-white text-white dark:text-black px-6 py-2.5 rounded-full text-sm text-center hover:bg-gray-800 dark:hover:bg-gray-200 transition"
              onClick={() => setIsOpen(false)}>
              Kontakt
            </Link>
          </div>
        )}
      </div>
      <ScrollProgress />
    </nav>
  );
};

export default memo(Navigation);
