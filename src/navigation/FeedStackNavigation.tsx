import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ProfileScreen from '../screen/ProfileScreen';
import FeedScreen from '../screen/FeedScreen';

import {FeedStackParamList} from '../../types';

import instagram from '../assets/images/instagram.png';

const Stack = createNativeStackNavigator<FeedStackParamList>();

const FeedStackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Feed">
      <Stack.Screen
        name="Feed"
        component={FeedScreen}
        options={{headerTitle: FeedHeaderTitle, headerTitleAlign: 'center'}}
      />
      <Stack.Screen
        name="UserProfile"
        component={ProfileScreen}
        options={{title: 'Profile'}}
      />
    </Stack.Navigator>
  );
};

const FeedHeaderTitle = () => {
  return <Image source={instagram} resizeMode="contain" style={styles.logo} />;
};

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 40,
  },
});

export default FeedStackNavigation;
