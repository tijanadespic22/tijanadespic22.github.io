const contactItems: ContactItem[] = [
  {
    title: 'Email',
    href: 'mailto:tijanadespic24@gmail.com',
    value: 'tijanadespic24@gmail.com',
    icon: 'mail',
    iconClassName: 'text-blue-500 group-hover:text-white transition',
    containerClassName:
      'flex items-center gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition group',
    iconContainerClassName:
      'w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-xl flex items-center justify-center group-hover:bg-blue-500 transition',
  },
  {
    title: 'Telefon',
    href: 'tel:+381653580793',
    value: '+381 65 358 0793',
    icon: 'phone',
    iconClassName: 'text-green-500 group-hover:text-white transition',
    containerClassName:
      'flex items-center gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-green-500 hover:bg-green-50 dark:hover:bg-green-950/30 transition group',
    iconContainerClassName:
      'w-12 h-12 bg-green-100 dark:bg-green-900/40 rounded-xl flex items-center justify-center group-hover:bg-green-500 transition',
  },
  {
    title: 'Radno vreme',
    href: '',
    value: 'Pon - Pet, 9:00 - 18:00',
    icon: 'calendar',
    iconClassName: 'text-orange-500 group-hover:text-white transition',
    containerClassName:
      'flex items-center gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-orange-500 hover:bg-orange-50 dark:hover:bg-orange-950/30 transition group',
    iconContainerClassName:
      'w-12 h-12 bg-orange-100 dark:bg-orange-900/40 rounded-xl flex items-center justify-center group-hover:bg-orange-500 transition',
  },
];

export {contactItems};
