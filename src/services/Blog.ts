import {BLOG_URL} from '@constants/website';

const getBlogs = async (): Promise<Page<Blog>> => {
  const response = await fetch(BLOG_URL);
  const data = await response.json();
  return data as Page<Blog>;
};

export {getBlogs};
