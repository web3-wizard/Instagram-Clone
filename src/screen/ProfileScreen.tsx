import React from 'react';
import {useRoute, useNavigation, RouteProp} from '@react-navigation/native';
import user from '../assets/data/user.json';
import ProfileHeader from '../components/profile/ProfileHeader';
import FeedGridView from '../components/feed/FeedGridView';
import {RootStackParamList} from '../../types';

const ProfileScreen = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'UserProfile'>>();
  const navigation = useNavigation();
  const {username} = route.params;
  navigation.setOptions({title: username});

  return <FeedGridView data={user.posts} ListHeaderComponent={ProfileHeader} />;
};

export default ProfileScreen;
