const contactItems: ContactItem[] = [
  {
    title: 'Email',
    href: 'mailto:tijanadespic24@gmail.com',
    value: 'tijanadespic24@gmail.com',
    icon: 'mail',
    iconClassName: 'text-blue-500',
    containerClassName:
      'flex items-center gap-4 p-4 rounded-xl border border-blue-200 dark:border-gray-700 border-blue-500 bg-blue-50 dark:bg-blue-950/30',
    iconContainerClassName:
      'w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-xl flex items-center justify-center',
  },
  {
    title: 'Telefon',
    href: 'tel:+381653580793',
    value: '+381 65 358 0793',
    icon: 'phone',
    iconClassName: 'text-green-500',
    containerClassName:
      'flex items-center gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-700 border-green-500 bg-green-50 dark:bg-green-950/30',
    iconContainerClassName:
      'w-12 h-12 bg-green-100 dark:bg-green-900/40 rounded-xl flex items-center justify-center',
  },
  {
    title: 'Radno vreme',
    value: 'Pon - Pet, 9:00 - 18:00',
    icon: 'calendar',
    iconClassName: 'text-orange-500',
    containerClassName:
      'flex items-center gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-700 border-orange-500 bg-orange-50 dark:bg-orange-950/30',
    iconContainerClassName:
      'w-12 h-12 bg-orange-100 dark:bg-orange-900/40 rounded-xl flex items-center justify-center',
  },
];

export {contactItems};
