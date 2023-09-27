import {
  RootStackParamList,
  FeedStackParamList,
  BottomTabParamList,
  ProfileStackParamList,
  SearchTabParamList,
} from './navigator';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
    interface RootParamList extends FeedStackParamList {}
    interface RootParamList extends ProfileStackParamList {}
    interface RootParamList extends BottomTabParamList {}
    interface RootParamList extends SearchTabParamList {}
  }
}
