import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import {CommentType} from '../../types';

type CommentPropType = {
  comment: CommentType;
};

const Comment = ({comment}: CommentPropType) => {
  return (
    <View style={styles.comment}>
      <Text style={[styles.text, styles.commentText]}>
        <Text style={styles.boldText}> {comment.user.username} </Text>{' '}
        {comment.comment}
      </Text>
      <AntDesign
        name="hearto"
        size={12}
        style={styles.icon}
        color={colors.grey}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
  icon: {
    marginHorizontal: 5,
  },
  text: {
    color: colors.black,
    lineHeight: 18,
    fontSize: fonts.sizes.default,
  },
});

export default Comment;
