import React, {useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import fonts from '../../theme/fonts';
import colors from '../../theme/colors';

const Post = (): JSX.Element => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <View style={styles.post}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1533642974560-485588217279?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Nnw1MzkwMTZ8fGVufDB8fHx8fA%3D%3D',
          }}
          style={styles.avator}
        />
        <Text style={styles.username}> rahul_dey </Text>
        <Entypo
          name="dots-three-horizontal"
          size={24}
          style={styles.dotIcon}
          color={colors.black}
        />
      </View>

      {/* Content */}
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        }}
        style={styles.image}
      />

      {/* Footer */}
      <View style={styles.footer}>
        {/* Like Comment Share Icons  */}
        <View style={styles.iconContainer}>
          <Pressable onPress={() => setIsLiked(!isLiked)}>
            <AntDesign
              name={isLiked ? 'heart' : 'hearto'}
              size={24}
              style={styles.icon}
              color={isLiked ? 'red' : colors.black}
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
        <Text style={styles.text}>
          Liked by <Text style={styles.boldText}> p_tarafdar </Text> and{' '}
          <Text style={styles.boldText}> 66 others </Text>
        </Text>

        {/* Post Description */}
        <Text style={styles.text}>
          <Text style={styles.boldText}> rahul_dey </Text> Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Dicta, omnis. Natus enim laborum
          dolorem est. Assumenda explicabo saepe consequatur impedit laborum
          minus laboriosam, laudantium sunt, aperiam ullam non repellat nostrum!
        </Text>

        {/* Comments */}
        <Text style={styles.greyText}>View all 16 comments</Text>
        <View style={styles.comment}>
          <Text style={[styles.text, styles.commentText]}>
            <Text style={styles.boldText}> rahul_dey </Text> Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Numquam, rerum?
          </Text>
          <AntDesign
            name="hearto"
            size={12}
            style={styles.icon}
            color={colors.grey}
          />
        </View>

        {/* Post Time */}
        <Text style={styles.greyText}>19 December, 2021</Text>
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
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  commentText: {
    flex: 1,
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
    aspectRatio: 4 / 3,
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
