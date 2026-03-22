import {ReactNode} from 'react';
import './globals.css';
import Navigation from '@/components/Navigation';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={'scroll-smooth'}
      suppressHydrationWarning>
      <head></head>
      <body className="min-h-full flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
