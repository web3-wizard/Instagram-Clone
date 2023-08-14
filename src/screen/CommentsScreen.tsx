import React, {useState} from 'react';
import {
  Alert,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import comments from '../assets/data/comments.json';
import Comment from '../components/comment/Comment';
import colors from '../assets/theme/colors';
import fonts from '../assets/theme/fonts';

const CommentsScreen = () => {
  const [inputText, setInputText] = useState('');
  const handlePost = () => {
    if (inputText.trim()) {
      comments.push({
        id: 'c2' + inputText.length,
        comment: inputText,
        user: {
          id: 'u1',
          image: 'https://source.unsplash.com/random/?girl',
          username: 'unknown_51',
        },
      });
      setInputText('');
      Alert.alert('Success ', 'You commented on this post.');
    } else {
      Alert.alert('Error ', 'Please write your comment first.');
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={comments}
        renderItem={({item}) => (
          <Comment comment={item} includeDetails={true} />
        )}
      />
      <View style={styles.footer}>
        <Image source={{uri: comments[0].user.image}} style={styles.image} />
        <TextInput
          placeholder="Write your comment"
          style={styles.input}
          value={inputText}
          onChangeText={e => setInputText(e)}
          multiline={true}
        />
        <Text onPress={handlePost} style={styles.button}>
          Post
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    color: colors.primary,
    marginLeft: 'auto',
    marginRight: 5,
    fontWeight: fonts.weights.bold,
    position: 'absolute',
    right: 10,
    bottom: 15,
  },
  container: {
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    borderTopWidth: 0.9,
    borderTopColor: colors.border,
    padding: 5,
  },
  image: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 20,
  },
  input: {
    flex: 1,

    borderColor: colors.border,
    borderWidth: 0.7,
    borderRadius: 25,

    paddingVertical: 5,
    paddingHorizontal: 10,
    marginLeft: 5,
    paddingRight: 45,
  },
});

export default CommentsScreen;
