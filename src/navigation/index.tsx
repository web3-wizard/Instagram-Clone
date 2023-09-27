import React from 'react';

import {LinkingOptions, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RootStackParamList} from '../../types/navigator';
import BottomTabNavigation from './BottomTabNavigation';
import CommentScreen from '../screen/CommentScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Linking: LinkingOptions<RootStackParamList> = {
  prefixes: ['rahulmakeit://'],
  config: {
    initialRouteName: 'Home',
    screens: {
      Comments: 'comments',
      Home: {
        screens: {
          FeedStack: {
            initialRouteName: 'Feed',
            screens: {
              UserProfile: 'user/:username',
            },
          },
        },
      },
    },
  },
};

const Navigation = () => {
  return (
    <NavigationContainer linking={Linking}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: true}}>
        <Stack.Screen
          name="Home"
          component={BottomTabNavigation}
          options={{headerShown: false}}
        />

        <Stack.Screen name="Comments" component={CommentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
