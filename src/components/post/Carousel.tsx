import React, {useRef, useState} from 'react';
import {
  FlatList,
  Image,
  View,
  useWindowDimensions,
  StyleSheet,
  ViewabilityConfig,
  ViewToken,
  Text,
} from 'react-native';
import DoublePressable from '../custom/DoublePressable';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

interface ICarousel {
  images: string[];
  onDoublePress: () => void;
}

const Carousel = ({images, onDoublePress = () => {}}: ICarousel) => {
  const {width} = useWindowDimensions();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };

  const viewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: Array<ViewToken>}) => {
      if (viewableItems.length > 0) {
        setActiveImageIndex(viewableItems[0].index || 0);
      }
    },
  );

  return (
    <View>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <DoublePressable onDoublePress={onDoublePress}>
            <Image source={{uri: item}} style={[styles.image, {width}]} />
          </DoublePressable>
        )}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={viewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig}
      />
      <View style={styles.dotContainer}>
        {images.map((_, index) => (
          <View
            style={[
              styles.dot,
              activeImageIndex === index
                ? {backgroundColor: colors.primary}
                : {backgroundColor: colors.lightgrey},
            ]}
            key={index}
          />
        ))}
      </View>
      <View style={styles.textView}>
        <Text style={styles.text}>
          {activeImageIndex + 1}/{images.length}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dot: {
    width: 6,
    aspectRatio: 1,
    borderRadius: 3,
    marginHorizontal: 3,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    position: 'absolute',
    bottom: -25,
  },
  image: {
    aspectRatio: 1,
  },
  text: {
    color: colors.white,
    fontSize: fonts.sizes.sm,
  },
  textView: {
    width: 40,
    backgroundColor: colors.black,
    borderRadius: 15,
    margin: 5,
    padding: 5,
    alignItems: 'center',
    position: 'absolute',
    top: 5,
    right: 5,
  },
});

export default Carousel;
