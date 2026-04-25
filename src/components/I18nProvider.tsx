'use client';
import {useEffect} from 'react';
import i18n from '@i18n/localeConfig';

export default function I18nProvider({children}: {children: React.ReactNode}) {
  useEffect(() => {
    const saved = localStorage.getItem('i18nextLng');
    if (saved && i18n.isInitialized && saved !== i18n.language) {
      i18n.changeLanguage(saved);
    }
  }, []);

  return <>{children}</>;
}

