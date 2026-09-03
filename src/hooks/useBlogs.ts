import blogs from '@data/blogs.json';
import {useTranslation} from 'react-i18next';

const useBlogs = () => {
  const {
    i18n: {language: lang},
  } = useTranslation();
  return {
    blogs: blogs.map(blog => {
      const supportedLanguage = (blog?.languages as any)?.[lang] || {};
      return {
        ...blog,
        ...supportedLanguage,
      };
    }),
  };
};

export default useBlogs;
