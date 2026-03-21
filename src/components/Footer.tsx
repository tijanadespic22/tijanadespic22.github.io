'use client';
import Link from 'next/link';
import Icon from '@/icons/Icon';
import {footerItems, footerServices, socialLinks} from '@/components/data/footer';
import {memo} from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl mb-4">Tijana Despić</h3>
            <p className="text-gray-400 mb-4">
              Specijalizovana za kreiranje modernih web sajtova i aplikacija koje kombinuju vrhunski
              dizajn sa besprekorno napisanim kodom.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition"
                  aria-label={link.name}>
                  <Icon
                    name={link.icon}
                    height={20}
                    width={20}
                  />
                </a>
              ))}
            </div>
          </div>
          <div className={'flex flex-row justify-between'}>
            <div>
              <h4 className="font-medium mb-4">Usluge</h4>
              <ul className="space-y-2 text-gray-400">
                {footerServices.map(service => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Navigacija</h4>
              <ul className="space-y-2 text-gray-400">
                {footerItems.map(item => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="hover:text-white transition">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
          <p>© {currentYear} Tijana Despić. Sva prava zadržana.</p>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
