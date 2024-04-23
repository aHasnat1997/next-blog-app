export type TBlog = {
  id: string;
  title: string;
  author: string;
  authorImage?: string;
  content: string;
  imageUrl: string;
  likes: number;
  createdAt: Date;
  updatedAt: Date;
};