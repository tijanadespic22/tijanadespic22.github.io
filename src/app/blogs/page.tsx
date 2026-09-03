import type {Metadata} from 'next';
import {memo} from 'react';
import Blogs from '@components/blogs/Blogs';

export const metadata: Metadata = {
  title: 'Blog — UI/UX Dizajn & Web Development | Tijana Despić',
  description:
    'Blog o JavaScriptu, UI/UX dizajnu i modernom web developmentu. Kratki vodiči, praktični saveti i objašnjenja za stvarne projekte.',
  alternates: {canonical: 'https://tijanadespic.hok.rs/blogs'},
  openGraph: {
    title: 'Blog — UI/UX Dizajn & Web Development | Tijana Despić',
    description:
      'Blog o JavaScriptu, UI/UX dizajnu i modernom web developmentu. Kratki vodiči, praktični saveti i objašnjenja za stvarne projekte.',
    url: 'https://tijanadespic.hok.rs/blogs',
  },
};

const BlogsPage = () => {
  return (
    <>
      <Blogs />
    </>
  );
};

export default memo(BlogsPage);
