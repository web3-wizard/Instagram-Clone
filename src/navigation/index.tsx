import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import FeedScreen from '../screen/FeedScreen';
import ProfileScreen from '../screen/ProfileScreen';

import instagram from '../assets/images/instagram.png';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Feed"
        screenOptions={{headerShown: true}}>
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
    </NavigationContainer>
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

export default Navigation;
