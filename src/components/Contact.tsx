'use client';
import {DetailedHTMLProps, HTMLAttributes, memo, ReactNode, Suspense} from 'react';
import {Controller, useForm} from 'react-hook-form';
import SendIcon from '@/icons/SendIcon';
import Link, {LinkProps} from 'next/link';
import {contactItems} from '@/components/data/contact';
import Icon from '@/icons/Icon';
import {useSearchParams} from 'next/navigation';
import {sendMessage} from '@/services/Messanger';
import {useTranslation} from 'react-i18next';
import HeroParticles from '@components/home/HeroParticles';

const LinkWrapper = ({
  children,
  ...props
}: {children: ReactNode} & Partial<
  LinkProps | DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>) => {
  return (props as LinkProps)?.href ? (
    <Link {...(props as LinkProps)}>{children}</Link>
  ) : (
    <div {...(props as any)}>{children}</div>
  );
};

const ContactForm = () => {
  const searchParams = useSearchParams();
  const {t} = useTranslation();

  const {
    handleSubmit,
    control,
    formState: {isSubmitted},
  } = useForm<MailData>({
    defaultValues: {name: '', email: '', message: ''},
  });

  const onSubmit = (data: MailData) => {
    const selectedPackage = searchParams.get('package');
    sendMessage({...data, selectedPackage});
  };

  return (
    <div
      className={
        '-mx-4 rounded-2xl border border-gray-200 bg-gray-50 p-4 lg:mx-0 lg:p-8 dark:border-gray-700 dark:bg-gray-800'
      }>
      <h3 className={'mb-6 text-2xl dark:text-white'}>{t('Pošaljite Upit')}</h3>

      {isSubmitted ? (
        <div className={'py-12 text-center'}>
          <div
            className={
              'mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/40'
            }>
            <SendIcon
              height={32}
              width={32}
            />
          </div>
          <h4 className={'mb-2 text-xl dark:text-white'}>{t('Uspešno poslato!')}</h4>
          <p className={'text-gray-600 dark:text-gray-400'}>
            {t('Odgovoriću vam u najkraćem mogućem roku.')}
          </p>
        </div>
      ) : (
        <form
          className={'space-y-4'}
          onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name={'name'}
            control={control}
            rules={{required: true}}
            render={({field}) => (
              <div>
                <label
                  htmlFor={'name'}
                  className={'mb-2 block text-sm font-medium dark:text-gray-300'}>
                  {t('Ime i prezime *')}
                </label>
                <input
                  {...field}
                  className={
                    'w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100 dark:placeholder-gray-500'
                  }
                  placeholder={t('Vaše ime')}
                />
              </div>
            )}
          />
          <Controller
            name={'email'}
            control={control}
            rules={{required: true}}
            render={({field}) => (
              <div>
                <label
                  htmlFor={'email'}
                  className={'mb-2 block text-sm font-medium dark:text-gray-300'}>
                  {t('Email adresa *')}
                </label>
                <input
                  {...field}
                  type={'email'}
                  className={
                    'w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100 dark:placeholder-gray-500'
                  }
                  placeholder={t('vas@email.com')}
                />
              </div>
            )}
          />
          <Controller
            name={'message'}
            control={control}
            rules={{required: true}}
            render={({field}) => (
              <div>
                <label
                  htmlFor={'message'}
                  className={'mb-2 block text-sm font-medium dark:text-gray-300'}>
                  {t('Poruka *')}
                </label>
                <textarea
                  {...field}
                  rows={5}
                  className={
                    'w-full resize-none rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100 dark:placeholder-gray-500'
                  }
                  placeholder={t('Opišite vaš projekat...')}
                />
              </div>
            )}
          />
          <button
            type={'submit'}
            className={
              'group flex w-full items-center justify-center gap-2 rounded-full bg-black px-6 py-4 text-white transition hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200'
            }>
            {t('Pošalji Poruku')}
            <SendIcon
              className={'transition group-hover:translate-x-1'}
              height={20}
              width={20}
            />
          </button>
        </form>
      )}
    </div>
  );
};

const Contact = () => {
  const {t} = useTranslation();
  return (
    <section
      id={'contact'}
      className={'relative overflow-hidden py-24'}>
      <HeroParticles
        id={'home-contact-particles'}
        particleCount={200}
      />
      <div className={'mx-auto max-w-7xl px-4 lg:px-8'}>
        <div className={'relative z-10 mb-16 text-center'}>
          <h2 className={'mb-4 text-4xl sm:text-5xl dark:text-white'}>{t('Započnimo projekat')}</h2>
          <p className={'mx-auto max-w-2xl text-xl text-gray-600 dark:text-gray-400'}>
            {t('Imate ideju? Razgovarajmo o tome kako mogu pomoći da je oživite')}
          </p>
        </div>

        <div
          className={
            'relative z-10 flex flex-col gap-12 rounded-2xl bg-gray-50/50 p-6 lg:grid lg:grid-cols-2 dark:bg-gray-900/50'
          }>
          {/* Contact Info */}
          <div className={'space-y-8'}>
            <div>
              <h3 className={'mb-6 text-2xl dark:text-white'}>{t('Kontakt Informacije')}</h3>
              <div className={'space-y-4'}>
                {contactItems.map((item, index) => (
                  <LinkWrapper
                    key={'contact-item-' + index}
                    href={item.href}
                    className={item.containerClassName}>
                    <div className={item.iconContainerClassName}>
                      <Icon
                        name={item.icon}
                        height={24}
                        width={24}
                        className={item.iconClassName}
                      />
                    </div>
                    <div>
                      <div className={'text-sm text-gray-600 dark:text-gray-400'}>
                        {t(item.title)}
                      </div>
                      <div className={'font-medium dark:text-white'}>{t(item?.value)}</div>
                    </div>
                  </LinkWrapper>
                ))}
              </div>
            </div>
          </div>
          {/* Form u Suspense */}
          <Suspense
            fallback={
              <div
                className={
                  'h-96 animate-pulse rounded-2xl border border-gray-200 bg-gray-50 p-8 dark:border-gray-700 dark:bg-gray-800'
                }
              />
            }>
            <ContactForm />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default memo(Contact);
