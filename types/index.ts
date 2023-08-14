export type UserType = {
  username: string;
  image?: string;
};

export type CommentType = {
  id: string;
  comment: string;
  user: UserType;
};

export type PostType = {
  id: string;
  createdAt: string;
  image?: string;
  images?: string[];
  video?: string;
  description: string;
  user: UserType;
  nofComments?: Number;
  nofLikes?: Number;
  comments: CommentType[];
};

export type UserPostType = {
  id: string;
  createdAt: string;
  image?: string;
  images?: string[];
  video?: string;
  description: string;
};
