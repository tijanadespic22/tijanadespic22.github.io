'use client';
import {memo, useEffect, useState} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import CloseIcon from '@/icons/CloseIcon';
import MenuIcon from '@/icons/MenuIcon';
import ThemeToggle from '@/components/ThemeToggle';
import ScrollProgress from '@/components/ScrollProgress';
import {cn} from '@/utils/CN';
import LogoIcon from '@/icons/LogoIcon';
import {useTranslation} from 'react-i18next';
import LocaleConfig from '@i18n/localeConfig';
import FlagSerbiaIcon from '@icons/FlagSerbiaIcon';
import FlagUkIcon from '@icons/FlagUkIcon';

const homeLinks = [
  {href: '/', title: 'Početna', section: ''},
  {href: '/#services', title: 'Usluge', section: 'services'},
  {href: '/#projects', title: 'Projekti', section: 'projects'},
  {href: '/#packages', title: 'Paketi', section: 'packages'},
];

const pageLinks = [
  {href: '/projects', title: 'Svi projekti'},
  {href: '/about', title: 'O meni'},
];

const Languages = [
  {code: 'sr', Icon: FlagSerbiaIcon, label: 'SR'},
  {code: 'en', Icon: FlagUkIcon, label: 'EN'},
];

const LangToggle = ({currentLang, mobile = false}: {currentLang: string; mobile?: boolean}) => (
  <div
    className={cn(
      'flex items-center overflow-hidden rounded-full border border-gray-200 text-sm dark:border-gray-700',
    )}>
    {Languages.map(({code, Icon, label}) => (
      <button
        key={code}
        onClick={() => LocaleConfig.changeLanguage(code)}
        className={cn(
          'flex items-center gap-1.5 px-3 py-1.5 transition-colors',
          'text-gray-600 hover:cursor-pointer dark:text-gray-400',
          {
            'bg-gray-900 font-medium text-white dark:bg-white dark:text-black':
              currentLang === code,
            'flex-1': mobile,
          },
        )}>
        <Icon
          width={16}
          height={16}
        />
        {label}
      </button>
    ))}
  </div>
);

const Navigation = () => {
  const {
    t,
    i18n: {language: lang},
  } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    if (!isHome) return;

    const sections = homeLinks
      .filter(l => l.section !== '')
      .map(l => ({id: l.section, el: document.getElementById(l.section)}))
      .filter(s => s.el !== null) as {id: string; el: HTMLElement}[];

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 80) {
        setActiveSection('');
        return;
      }
      let current = '';
      for (const s of sections) {
        if (s.el.offsetTop - window.innerHeight * 0.45 <= scrollY) current = s.id;
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, {passive: true});
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      setActiveSection('');
    };
  }, [isHome]);

  const navLinkCls = (isActive: boolean) =>
    cn(
      'px-3 py-1.5 rounded-lg text-sm transition-colors',
      isActive
        ? 'bg-gray-100 dark:bg-gray-800 text-black dark:text-white font-medium'
        : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800',
    );

  const mobileLinkCls = (isActive: boolean) =>
    cn(
      'block w-full text-left py-1.5 px-2 rounded-lg text-sm transition-colors',
      isActive
        ? 'text-black dark:text-white font-medium bg-gray-100 dark:bg-gray-800'
        : 'text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white',
    );

  return (
    <nav
      className={
        'fixed top-0 right-0 left-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-700 dark:bg-gray-900/80'
      }>
      <div className={'mx-auto px-4'}>
        <div className={'flex h-16 flex-row items-center justify-between'}>
          <Link
            href={'/'}
            className={
              'flex flex-row items-center gap-2 text-xl font-semibold text-black dark:text-white'
            }>
            <LogoIcon
              height={100}
              width={100}
            />
            <span>{'Tijana Despić'}</span>
          </Link>

          {/* Desktop */}
          <div className={'hidden items-center gap-1 md:flex'}>
            {homeLinks.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className={navLinkCls(
                  isHome &&
                    (item.section === '' ? activeSection === '' : activeSection === item.section),
                )}>
                {t(item.title)}
              </Link>
            ))}

            <div className={'mx-2 h-4 w-px bg-gray-300 dark:bg-gray-600'} />

            {pageLinks.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className={navLinkCls(pathname === item.href)}>
                {t(item.title)}
              </Link>
            ))}

            <div className={'mx-2 h-4 w-px bg-gray-300 dark:bg-gray-600'} />

            <Link
              href={'/#contact'}
              className={
                'rounded-full bg-black px-5 py-2 text-sm text-white transition hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200'
              }>
              {t('Kontakt')}
            </Link>

            <LangToggle currentLang={lang} />
            <ThemeToggle />
          </div>

          {/* Mobile toggle */}
          <div className={'flex items-center gap-2 md:hidden'}>
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={'p-2 text-gray-700 dark:text-gray-300'}
              aria-label={'Toggle menu'}>
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

        {/* Mobile menu */}
        {isOpen ? (
          <div className={'space-y-1 border-t border-gray-100 py-4 md:hidden dark:border-gray-800'}>
            <p
              className={
                'px-2 pb-1 text-[10px] tracking-widest text-gray-400 uppercase dark:text-gray-500'
              }>
              {t('Na početnoj')}
            </p>
            {homeLinks.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className={mobileLinkCls(
                  isHome &&
                    (item.section === '' ? activeSection === '' : activeSection === item.section),
                )}
                onClick={() => setIsOpen(false)}>
                {t(item.title)}
              </Link>
            ))}

            <div className={'my-3 border-t border-gray-100 dark:border-gray-800'} />

            <p
              className={
                'px-2 pb-1 text-[10px] tracking-widest text-gray-400 uppercase dark:text-gray-500'
              }>
              {t('Stranice')}
            </p>
            {pageLinks.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className={mobileLinkCls(pathname === item.href)}
                onClick={() => setIsOpen(false)}>
                {t(item.title)}
              </Link>
            ))}

            <div className={'my-3 border-t border-gray-100 dark:border-gray-800'} />

            <LangToggle
              currentLang={lang}
              mobile
            />

            <Link
              href={'/#contact'}
              className={
                'block rounded-full bg-black px-6 py-2.5 text-center text-sm text-white transition hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200'
              }
              onClick={() => setIsOpen(false)}>
              {t('Kontakt')}
            </Link>
          </div>
        ) : null}
      </div>
      <ScrollProgress />
    </nav>
  );
};

export default memo(Navigation);
