import React from 'react';
import {Image, FlatList} from 'react-native';

import user from '../assets/data/user.json';
import ProfileHeader from '../components/profile/ProfileHeader';

const ProfileScreen = () => {
  return (
    <>
      {/* Grid View Posts*/}
      <FlatList
        data={user.posts}
        renderItem={({item}) => (
          <Image
            source={{uri: item.image || item.images[0]}}
            style={{flex: 1, aspectRatio: 1, margin: 1, maxWidth: '33.33%'}}
          />
        )}
        keyExtractor={item => item.id}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<ProfileHeader />}
      />
    </>
  );
};

export default ProfileScreen;
