import React, {useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Video from 'react-native-video';
import colors from '../../assets/theme/colors';

interface IVideoPlayer {
  uri: string;
}

const VideoPlayer = ({uri}: IVideoPlayer) => {
  const [muted, setMuted] = useState(true);

  return (
    <View>
      <Video
        source={{uri}}
        style={styles.video}
        resizeMode="cover"
        repeat
        muted={muted}
      />
      <Pressable style={styles.muteBtn} onPress={() => setMuted(v => !v)}>
        <Ionicons
          name={muted ? 'volume-mute' : 'volume-medium'}
          size={16}
          color={colors.white}
        />
      </Pressable>
    </View>
  );
};

export default VideoPlayer;

const styles = StyleSheet.create({
  video: {
    width: '100%',
    aspectRatio: 1,
  },
  muteBtn: {
    backgroundColor: colors.black,
    padding: 5,
    borderRadius: 25,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});
