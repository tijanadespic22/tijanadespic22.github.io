type Blog = {
  title: string;
  slug: string;
  shortDescription: string;
  date: string;
  categories: string[];
  tags: string[];
  coverImage: {
    url: string;
    large: string;
    small: string;
    medium: string;
    thumbnail: string;
  };
};
