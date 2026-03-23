import {memo} from 'react';
import {cn} from '@/utils/CN';
import {servicesItems} from '@/components/data/services';
import Icon from '@/icons/Icon';

const Services = () => {
  return (
    <section
      id="services"
      className="py-24 bg-white dark:bg-gray-900">
      <div className="md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4 dark:text-white">Šta Nudim</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Kompletan spektar usluga od koncepta do implementacije
          </p>
        </div>

        <div className="mb-16 md:pt-8 pt-16 flex gap-6 overflow-x-scroll pb-2 [scrollbar-width:auto] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-200 dark:[&::-webkit-scrollbar-track]:bg-gray-700 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-400 dark:[&::-webkit-scrollbar-thumb]:bg-gray-500 lg:grid lg:grid-cols-3 lg:gap-12 lg:overflow-visible lg:pb-0 lg:[scrollbar-width:initial] lg:pt-0">
          {servicesItems.map((service, index) => (
            <div
              key={index}
              className={cn(
                'relative min-w-[90vw] lg:min-w-0 flex-1 rounded-2xl pt-14 px-8 pb-8 transition-all duration-300 overflow-visible hover:cursor-pointer hover:shadow-lg hover:scale-[1.2] hover:z-10',
                service.containerClassName,
                'rounded-2xl border border-gray-200 dark:border-gray-700',
              )}>
              {service?.iconName ? (
                <div
                  className={cn(
                    'absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 flex flex-row items-center justify-center rounded-full shadow-sm',
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
              <h3 className={cn('text-2xl mb-4', service.textClassName)}>{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
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
