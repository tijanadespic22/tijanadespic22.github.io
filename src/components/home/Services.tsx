'use client';
import {memo} from 'react';
import {cn} from '@utils/CN';
import {servicesItems} from '@components/data/services';
import Icon from '@icons/Icon';
import {useTranslation} from 'react-i18next';

const Services = () => {
  const {t} = useTranslation();
  return (
    <section
      id={'services'}
      className={'bg-white py-24 dark:bg-gray-900'}>
      <div className={'mx-auto px-4 sm:px-6 md:max-w-7xl lg:px-8'}>
        <div className={'mb-16 text-center'}>
          <h2 className={'mb-4 text-4xl sm:text-5xl dark:text-white'}>{t('Ono što radim')}</h2>
          <p className={'mx-auto max-w-2xl text-xl text-gray-600 dark:text-gray-400'}>
            {t('Fokus na web development - od dizajna do lansiranja')}
          </p>
        </div>

        <div
          className={
            'mb-16 flex flex-col gap-6 overflow-visible pt-16 pb-2 [scrollbar-width:auto] md:pt-8 lg:grid lg:grid-cols-4 lg:gap-12 lg:overflow-visible lg:pt-0 lg:pb-0 lg:[scrollbar-width:initial] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-400 dark:[&::-webkit-scrollbar-thumb]:bg-gray-500 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-200 dark:[&::-webkit-scrollbar-track]:bg-gray-700'
          }>
          {servicesItems.map((service, index) => (
            <div
              key={index}
              className={cn(
                'flex flex-col gap-2 p-4',
                service.containerClassName,
                'rounded-2xl border border-gray-200 dark:border-gray-700',
              )}>
              {service?.iconName ? (
                <div className={'flex flex-row items-center'}>
                  <div
                    className={cn(
                      'rounded-2xl border border-purple-400 p-2',
                      service.iconContainerClassName,
                    )}>
                    <Icon
                      name={service.iconName}
                      width={40}
                      height={40}
                      className={'fill-black dark:fill-white'}
                    />
                  </div>
                </div>
              ) : null}
              <h3 className={cn('font-bold', service.textClassName)}>{t(service.title)}</h3>
              <p className={'text-sm text-gray-600 dark:text-gray-400'}>{t(service.description)}</p>
              <ul className={'list-inside list-disc space-y-2 text-gray-600 dark:text-gray-400'}>
                {service.features.map((feature, idx) => (
                  <li key={idx}>{t(feature)}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Services);
