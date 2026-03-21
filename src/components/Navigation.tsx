'use client';
import {memo, useState} from 'react';
import Link from 'next/link';
import CloseIcon from '@/icons/CloseIcon';
import MenuIcon from '@/icons/MenuIcon';

const NavItems = [
  {
    href: '/#services',
    title: 'Usluge',
    className: 'text-gray-700 hover:text-black transition',
    classNameMobile: 'block w-full text-left text-gray-700 hover:text-black transition',
  },
  {
    href: '/#projects',
    title: 'Projekti',
    className: 'text-gray-700 hover:text-black transition',
    classNameMobile: 'block w-full text-left text-gray-700 hover:text-black transition',
  },
  {
    href: '/#contact',
    title: 'Kontakt',
    className: 'bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition',
    classNameMobile:
      'bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition w-full',
  },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="mx-auto px-4">
        <div className="flex flex-row justify-between items-center h-16">
          <Link
            href="/"
            className="text-xl font-semibold text-black">
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
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
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
