export type ApiResponese = {
  success: boolean;
  data: Data;
};

export type Data = {
  posts: Post[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};

export type Post = {
  _id: string;
  title: string;
  content: string;
  author: string;
  cover: string;
  likes: string;
  comments: Comment[];
};

export type Comment = {
  _id: string;
  author: string;
  content: string;
  createdAt: string;
};
