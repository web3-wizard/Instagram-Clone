import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {IUser} from '../../../types';
import fonts from '../../assets/theme/fonts';
import colors from '../../assets/theme/colors';
import {useNavigation} from '@react-navigation/native';

interface IUserListItem {
  user: IUser;
}

const UserListItem = ({user}: IUserListItem) => {
  const navigation = useNavigation();

  const navigateToUser = () => {
    navigation.navigate('UserProfile', {username: user.username});
  };

  return (
    <Pressable onPress={navigateToUser} style={styles.root}>
      <Image source={{uri: user.image}} style={styles.image} />

      <View>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.username}>{user.username}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    marginRight: 15,
  },
  name: {
    fontWeight: fonts.weights.bold,
    marginBottom: 5,
  },
  username: {
    color: colors.grey,
  },
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
});

export default UserListItem;
