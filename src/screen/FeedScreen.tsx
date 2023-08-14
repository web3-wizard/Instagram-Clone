import React from 'react';
import {FlatList} from 'react-native';
import Post from '../components/feed/Post';

import posts from '../assets/data/posts.json';

const FeedScreen = () => {
  return (
    <FlatList
      data={posts}
      renderItem={({item}) => <Post post={item} />}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default FeedScreen;
