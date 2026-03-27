'use client';
import {useEffect, useState} from 'react';
import MoonIcon from '@/icons/MoonIcon';
import SunIcon from '@/icons/SunIcon';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(() => {
      const isDarkMode = localStorage.getItem('theme') === 'dark';
      document.documentElement.classList.toggle('dark', isDarkMode);
      return isDarkMode;
    });
  }, []);

  const toggle = () => {
    setIsDark(v => {
      if (!v) {
        localStorage.setItem('theme', 'dark');
        document.documentElement.classList.add('dark');
      } else {
        localStorage.setItem('theme', 'light');
        document.documentElement.classList.remove('dark');
      }
      return !v;
    });
  };

  return (
    <button
      onClick={toggle}
      aria-label={'Toggle dark mode'}
      className={
        'flex items-center justify-center rounded-full text-gray-600 transition-colors duration-200 hover:cursor-pointer hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
      }>
      {isDark ? (
        <MoonIcon
          className={'fill-white dark:fill-gray-300'}
          width={24}
          height={24}
        />
      ) : (
        <SunIcon
          className={'fill-black dark:fill-gray-300'}
          width={24}
          height={24}
        />
      )}
    </button>
  );
};

export default ThemeToggle;
