import useBlogs from '@hooks/useBlogs';

const useBlog = (id: string) => {
  const {blogs} = useBlogs();

  return blogs.find(blog => blog.id === id);
};

export default useBlog;
