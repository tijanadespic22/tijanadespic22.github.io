'use client';
import {useState} from 'react';
import MoonIcon from '@/icons/MoonIcon';
import SunIcon from '@/icons/SunIcon';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(
    () => typeof window !== 'undefined' && localStorage.getItem('theme') === 'dark',
  );

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.removeItem('theme');
    }
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
