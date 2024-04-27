export type TBlog = {
  id?: string;
  title: string;
  summary: string;
  userEmail: string;
  category: string;
  content: string;
  imageUrl: string;
  likes?: number;
  dislikes?: number;
  view?: number;
  createdAt?: Date;
  updatedAt?: Date;
};