import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Post from '../components/post/Post';
import {PostType} from '../types';

const data: PostType = {
  id: '1',
  createdAt: '10 June 2022',
  image:
    'https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  description:
    'Lorem ipsum dolor sit amet, consectetur im laborum dolorem est. Assumenda explicabo saepe consequatur impedit laborum minus laboriosam, laudantium sunt, aperiam ullam non repellat !',
  user: {
    username: 'dey_rahul',
    image:
      'https://images.unsplash.com/photo-1533642974560-485588217279?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Nnw1MzkwMTZ8fGVufDB8fHx8fA%3D%3D',
  },
  nofComments: 11,
  nofLikes: 33,
  comments: [
    {
      id: '1',
      comment: 'Hello there',
      user: {
        username: 'p_tarafder',
      },
    },
    {
      id: '2',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      user: {
        username: 'unknown_55',
      },
    },
  ],
};

const data1: PostType = {
  id: '2',
  createdAt: '10 June 2022',
  image:
    'https://unsplash.com/photos/JvUVo08dndQ/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjg1ODA2MjQzfA&force=true',
  description:
    'Lorem ipsum dolor sit amet, consectetur im laborum dolorem est. Assumenda explicabo saepe consequatur impedit laborum minus laboriosam, laudantium sunt, aperiam ullam non repellat !',
  user: {
    username: 'dey_rahul',
    image:
      'https://unsplash.com/photos/xua0NYSuTF4/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjg1ODA2MjY3fA&force=true&w=640',
  },
  nofComments: 0,
  nofLikes: 0,
  comments: [],
};

const FeedScreen = () => {
  return (
    <ScrollView style={styles.feed}>
      <Post post={data} />
      <Post post={data1} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  feed: {
    flex: 1,
  },
});

export default FeedScreen;
