'use client';

import {memo} from 'react';
import {useTranslation} from 'react-i18next';
import data from '@data/suggestion.json';
import {cn} from '@utils/CN';

const Suggestion = () => {
  const {t} = useTranslation();
  return (
    <section
      className={'flex flex-col gap-2 bg-white px-4 py-24 dark:bg-gray-900'}
      id={'suggestion'}>
      <h2 className={'text-center text-4xl font-semibold'}>{t('Šta klijenti kažu')}</h2>
      <div
        className={
          'relative flex gap-4 overflow-x-auto scroll-smooth p-4 px-20 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
        }>
        {data.map((item, index) => (
          <div
            key={index}
            className={cn(
              'flex min-h-30 max-w-full shrink-0 flex-col gap-2 rounded-lg border border-gray-200 p-4 shadow-md md:max-w-1/3',
              'dark:border-gray-800 dark:bg-gray-950',
            )}>
            <p className={'text-sm text-gray-700 italic dark:text-gray-400'}>
              {'"'}
              {item.description}
              {'"'}
            </p>
            <p className={'text-lg font-semibold text-black dark:text-white'}>{item.name}</p>
            <p className={'text-sm text-gray-700/50 dark:text-gray-400'}>{item.position}</p>
          </div>
        ))}
      </div>
      <p className={'px-4 text-center text-sm text-gray-500 dark:text-gray-400'}>
        {t('Prevuci horizontalno da vidiš još utisaka')}
      </p>
    </section>
  );
};

export default memo(Suggestion);
