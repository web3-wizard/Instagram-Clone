import {
  RootStackParamList,
  FeedStackParamList,
  BottomTabParamList,
  ProfileStackParamList,
} from '.';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
    interface RootParamList extends FeedStackParamList {}
    interface RootParamList extends ProfileStackParamList {}
    interface RootParamList extends BottomTabParamList {}
  }
}
