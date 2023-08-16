import React from 'react';
import {StyleSheet, FlatList, Image, View} from 'react-native';
import {UserPostType} from '../../../types';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../../assets/theme/colors';

interface IFeedGridView {
  data: UserPostType[];
  ListHeaderComponent?:
    | React.ComponentType<any>
    | React.ReactElement
    | null
    | undefined;
}

const GridItem = ({post}: {post: UserPostType}) => {
  return (
    <View style={styles.imageContainer}>
      <Image
        source={{uri: post.images ? post.images[0] : post.image}}
        style={styles.image}
      />
      {post.images && (
        <MaterialIcons
          name="collections"
          color={colors.white}
          size={16}
          style={styles.icon}
        />
      )}
    </View>
  );
};

const FeedGridView = ({data, ListHeaderComponent}: IFeedGridView) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => <GridItem post={item} />}
      keyExtractor={item => item.id}
      numColumns={3}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={ListHeaderComponent}
      style={styles.liststyle}
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  image: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    aspectRatio: 1,
    margin: 1,
    maxWidth: '33%',
  },
  liststyle: {
    marginHorizontal: -2,
  },
});

export default FeedGridView;
