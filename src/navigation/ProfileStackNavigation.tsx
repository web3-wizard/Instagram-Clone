import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProfileStackParamList} from '../../types/navigator';
import ProfileScreen from '../screen/ProfileScreen';
import EditProfileScreen from '../screen/EditProfileScreen';
const Stack = createNativeStackNavigator<ProfileStackParamList>();

const ProfileStackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{title: 'My Profile'}}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{title: 'Edit Profile'}}
      />
    </Stack.Navigator>
  );
};

export default ProfileStackNavigation;
