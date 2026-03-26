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
      id="services"
      className="bg-white py-24 dark:bg-gray-900">
      <div className="mx-auto px-4 sm:px-6 md:max-w-7xl lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl sm:text-5xl dark:text-white">{t('Šta Nudim')}</h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600 dark:text-gray-400">
            {t('Kompletan spektar usluga od koncepta do implementacije')}
          </p>
        </div>

        <div className="mb-16 flex gap-6 overflow-x-scroll pt-16 pb-2 [scrollbar-width:auto] md:pt-8 lg:grid lg:grid-cols-3 lg:gap-12 lg:overflow-visible lg:pt-0 lg:pb-0 lg:[scrollbar-width:initial] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-400 dark:[&::-webkit-scrollbar-thumb]:bg-gray-500 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-200 dark:[&::-webkit-scrollbar-track]:bg-gray-700">
          {servicesItems.map((service, index) => (
            <div
              key={index}
              className={cn(
                'relative min-w-[90vw] flex-1 overflow-visible rounded-2xl px-8 pt-14 pb-8 transition-all duration-300 hover:z-10 hover:scale-[1.2] hover:cursor-pointer hover:shadow-lg lg:min-w-0',
                service.containerClassName,
                'rounded-2xl border border-gray-200 dark:border-gray-700',
              )}>
              {service?.iconName ? (
                <div
                  className={cn(
                    'absolute top-0 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-row items-center justify-center rounded-full p-4 shadow-sm',
                    service.iconContainerClassName,
                  )}>
                  <Icon
                    name={service.iconName}
                    width={40}
                    height={40}
                    className={'fill-black dark:fill-white'}
                  />
                </div>
              ) : null}
              <h3 className={cn('mb-4 text-2xl', service.textClassName)}>{t(service.title)}</h3>
              <p className="mb-6 text-gray-600 dark:text-gray-400">{t(service.description)}</p>
              <ul className="list-inside list-disc space-y-2 text-gray-600 dark:text-gray-400">
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
