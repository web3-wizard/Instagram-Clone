import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import FeedScreen from '../screen/FeedScreen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import colors from '../assets/theme/colors';
import {SearchTabParamList} from '../../types/navigator';
import UserSearchScreen from '../screen/search/UserSearchScreen';

const Tab = createMaterialTopTabNavigator<SearchTabParamList>();

const SearchTabNavigator = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {paddingTop: insets.top},
        tabBarIndicatorStyle: {backgroundColor: colors.primary},
      }}>
      <Tab.Screen name="Users" component={UserSearchScreen} />
      <Tab.Screen name="Posts" component={FeedScreen} />
    </Tab.Navigator>
  );
};

export default SearchTabNavigator;
