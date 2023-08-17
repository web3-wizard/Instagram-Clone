// Posts
export type IUser = {
  id: string;
  name: string;
  username: string;
  image?: string;
  website?: string;
  bio?: string;
};

export type UserType = Pick<IUser, 'username' | 'image'>;

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

// navigations
export type RootStackParamList = {
  Home: undefined;
  Comments: {postId: string};
};

export type FeedStackParamList = {
  Feed: undefined;
  UserProfile: {username: string};
};

export type ProfileStackParamList = {
  Profile: undefined;
  EditProfile: undefined;
};

export type BottomTabParamList = {
  FeedStack: undefined;
  Search: undefined;
  Upload: undefined;
  Notifications: undefined;
  MyProfile: undefined;
};
