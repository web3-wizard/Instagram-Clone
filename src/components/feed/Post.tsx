import React, {useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import fonts from '../../assets/theme/fonts';
import colors from '../../assets/theme/colors';
import Comment from '../comment/Comment';
import {PostType} from '../../../types';

import DoublePressable from '../custom/DoublePressable';
import Carousel from './Carousel';
import VideoPlayer from './VideoPlayer';

type PostPropType = {
  post: PostType;
};

const Post = ({post}: PostPropType): JSX.Element => {
  const [isLiked, setIsLiked] = useState(false);
  const [isDescExpanded, setIsDescExpanded] = useState(false);

  const toggleLike = () => {
    setIsLiked(v => !v);
  };

  const toggleDesc = () => {
    setIsDescExpanded(v => !v);
  };

  let content = null;
  // set image to content
  if (post.image) {
    content = (
      <DoublePressable onDoublePress={toggleLike}>
        <Image
          source={{
            uri: post.image,
          }}
          style={styles.image}
        />
      </DoublePressable>
    );
  } else if (post.images) {
    content = <Carousel images={post.images} onDoublePress={toggleLike} />;
  } else if (post.video) {
    content = (
      <DoublePressable onDoublePress={toggleLike}>
        <VideoPlayer uri={post.video} />
      </DoublePressable>
    );
  }

  return (
    <View style={styles.post}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: post.user.image,
          }}
          style={styles.avator}
        />
        <Text style={styles.username}> {post.user.username} </Text>
        <Entypo
          name="dots-three-horizontal"
          size={24}
          style={styles.dotIcon}
          color={colors.black}
        />
      </View>

      {/* Content */}
      {content}

      {/* Footer */}
      <View style={styles.footer}>
        {/* Like Comment Share Icons  */}
        <View style={styles.iconContainer}>
          <Pressable onPress={toggleLike}>
            <AntDesign
              name={isLiked ? 'heart' : 'hearto'}
              size={24}
              style={styles.icon}
              color={isLiked ? colors.accent : colors.black}
            />
          </Pressable>

          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="send"
            size={24}
            style={styles.icon}
            color={colors.black}
          />

          <Feather
            name="bookmark"
            size={24}
            style={styles.dotIcon}
            color={colors.black}
          />
        </View>

        {/* Likes text */}
        {post.nofLikes ? (
          <Text style={styles.text}>
            Liked by <Text style={styles.boldText}> p_tarafdar </Text> and{' '}
            <Text style={styles.boldText}>
              {' '}
              {post.nofLikes?.toString()} others{' '}
            </Text>
          </Text>
        ) : (
          <Text>No Likes</Text>
        )}

        {/* Post Description */}
        <Text style={styles.text} numberOfLines={isDescExpanded ? 0 : 3}>
          <Text style={styles.boldText}> {post.user.username} </Text>{' '}
          {post.description}
        </Text>
        <Text onPress={toggleDesc} style={styles.greyText}>
          {isDescExpanded ? 'show less' : 'show more'}
        </Text>

        {/* Comments */}
        {post.comments.length > 0 ? (
          <>
            <Text style={styles.greyText}>
              View all {post.nofComments?.toString()} comments
            </Text>
            {/* render frist comment */}
            <Comment comment={post.comments[0]} />
          </>
        ) : (
          <Text>No Comment</Text>
        )}

        {/* Post Time */}
        <Text style={styles.greyText}>{post.createdAt}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avator: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  boldText: {
    fontWeight: fonts.weights.bold,
  },
  dotIcon: {
    marginLeft: 'auto',
    marginRight: 5,
  },
  footer: {
    padding: 10,
  },
  greyText: {
    color: colors.grey,
    lineHeight: 20,
  },
  header: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 5,
  },
  iconContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  post: {},
  username: {
    marginLeft: 10,
    color: colors.black,
    fontSize: fonts.sizes.default,
    fontWeight: fonts.weights.bold,
  },
  text: {
    color: colors.black,
    lineHeight: 18,
    fontSize: fonts.sizes.default,
  },
});

export default Post;
