import React from 'react';
import {useRoute, useNavigation, RouteProp} from '@react-navigation/native';
import user from '../assets/data/user.json';
import ProfileHeader from '../components/profile/ProfileHeader';
import FeedGridView from '../components/feed/FeedGridView';
import {FeedStackParamList} from '../../types/navigator';

const ProfileScreen = () => {
  const route = useRoute<RouteProp<FeedStackParamList, 'UserProfile'>>();
  const navigation = useNavigation();
  const username =
    route.params?.username === undefined ? 'My Profile' : route.params.username;
  navigation.setOptions({title: username});

  return <FeedGridView data={user.posts} ListHeaderComponent={ProfileHeader} />;
};

export default ProfileScreen;
