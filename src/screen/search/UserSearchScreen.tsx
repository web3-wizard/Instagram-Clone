import React from 'react';
import {FlatList} from 'react-native';
import users from '../../assets/data/users.json';
import UserListItem from '../../components/search/UserListItem';

const UserSearchScreen = () => {
  return (
    <FlatList
      data={users}
      renderItem={({item}) => <UserListItem user={item} />}
    />
  );
};

export default UserSearchScreen;
