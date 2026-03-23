'use client';
import {useEffect, useState} from 'react';
import MoonIcon from '@/icons/MoonIcon';
import SunIcon from '@/icons/SunIcon';

const ThemeToggle = () => {
  // Čitamo iz DOM-a jer je inline script već postavio ispravnu klasu
  const [isDark, setIsDark] = useState(
    () => typeof document !== 'undefined' && document.documentElement.classList.contains('dark'),
  );

  // Slušamo promene sistemske teme kad nema stored preferencije
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) setIsDark(e.matches);
    };
    media.addEventListener('change', handler);
    return () => media.removeEventListener('change', handler);
  }, []);

  const toggle = () => {
    setIsDark(v => {
      const next = !v;
      if (next) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return next;
    });
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="flex items-center justify-center rounded-full hover:cursor-pointer text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200">
      {isDark ? (
        <MoonIcon className={'fill-white dark:fill-gray-300'} width={24} height={24} />
      ) : (
        <SunIcon className={'fill-black dark:fill-gray-300'} width={24} height={24} />
      )}
    </button>
  );
};

export default ThemeToggle;
