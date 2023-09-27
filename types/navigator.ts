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

export type SearchTabParamList = {
  Users: undefined;
  Posts: undefined;
};
