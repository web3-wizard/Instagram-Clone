import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Post from '../components/post/Post';

const FeedScreen = () => {
  return (
    <ScrollView style={styles.feed}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  feed: {
    flex: 1,
  },
});

export default FeedScreen;
