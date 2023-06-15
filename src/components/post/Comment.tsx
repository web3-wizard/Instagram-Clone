import React, {useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import {CommentType} from '../../types';

type CommentPropType = {
  comment: CommentType;
  includeDetails?: boolean;
};

const Comment = ({comment, includeDetails = false}: CommentPropType) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLiked = () => {
    setIsLiked(v => !v);
  };

  return (
    <View style={styles.comment}>
      {includeDetails && (
        <Image source={{uri: comment.user.image}} style={styles.avatar} />
      )}

      <View style={styles.middleColumn}>
        <Text style={[styles.text, styles.commentText]}>
          <Text style={styles.boldText}>{comment.user.username}</Text>{' '}
          {comment.comment}
        </Text>
        {includeDetails && (
          <View style={styles.footer}>
            <Text style={styles.footerText}>2d</Text>
            <Text style={styles.footerText}>5 Likes</Text>
            <Text style={styles.footerText}>Reply</Text>
          </View>
        )}
      </View>

      <Pressable onPress={toggleLiked} hitSlop={5}>
        <AntDesign
          name={isLiked ? 'heart' : 'hearto'}
          size={12}
          style={styles.icon}
          color={isLiked ? colors.accent : colors.grey}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 25,
    marginRight: 5,
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
  footer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  footerText: {
    marginRight: 10,
  },
  icon: {
    marginHorizontal: 5,
  },
  middleColumn: {
    flex: 1,
  },
  text: {
    color: colors.black,
    lineHeight: 18,
    fontSize: fonts.sizes.default,
  },
});

export default Comment;
