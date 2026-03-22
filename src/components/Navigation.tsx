'use client';
import {memo, useState} from 'react';
import Link from 'next/link';
import CloseIcon from '@/icons/CloseIcon';
import MenuIcon from '@/icons/MenuIcon';
import ThemeToggle from '@/components/ThemeToggle';

const NavItems = [
  {
    href: '/#services',
    title: 'Usluge',
    className: 'text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition',
    classNameMobile: 'block w-full text-left text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition',
  },
  {
    href: '/#projects',
    title: 'Projekti',
    className: 'text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition',
    classNameMobile: 'block w-full text-left text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition',
  },
  {
    href: '/#contact',
    title: 'Kontakt',
    className: 'bg-black dark:bg-white text-white dark:text-black px-6 py-2 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition',
    classNameMobile:
      'bg-black dark:bg-white text-white dark:text-black px-6 py-2 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition w-full',
  },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="mx-auto px-4">
        <div className="flex flex-row justify-between items-center h-16">
          <Link
            href="/"
            className="text-xl font-semibold text-black dark:text-white">
            Tijana Despić
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NavItems.map((item, index) => (
              <Link
                key={'nav-items-' + index}
                href={item.href}
                className={item.className}>
                {item.title}
              </Link>
            ))}
            <ThemeToggle />
          </div>

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

        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            {NavItems.map((item, index) => (
              <Link
                key={'nav-items-' + index}
                href={item.href}
                className={item.classNameMobile}>
                {item.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default memo(Navigation);
