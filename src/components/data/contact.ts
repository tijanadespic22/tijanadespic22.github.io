const contactItems: ContactItem[] = [
  {
    title: 'Email',
    href: 'mailto:tijanadespic24@gmail.com',
    value: 'tijanadespic24@gmail.com',
    icon: 'mail',
    iconClassName: 'text-blue-500 group-hover:text-white transition',
    containerClassName:
      'flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition group',
    iconContainerClassName:
      'w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-500 transition',
  },
  {
    title: 'Telefon',
    href: 'tel:+381601533727',
    value: '+381 60 153 3727',
    icon: 'phone',
    iconClassName: 'text-green-500 group-hover:text-white transition',
    containerClassName:
      'flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:border-green-500 hover:bg-green-50 transition group',
    iconContainerClassName:
      'w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-500 transition',
  },
  {
    title: 'Radno vreme',
    href: '',
    value: 'Pon - Pet, 9:00 - 18:00',
    icon: 'calendar',
    iconClassName: 'text-orange-500 group-hover:text-white transition',
    containerClassName:
      'flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:border-orange-500 hover:bg-orange-50 transition group',
    iconContainerClassName:
      'w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center group-hover:bg-orange-500 transition',
  },
];

export {contactItems};
