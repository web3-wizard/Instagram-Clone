import React from 'react';
import {StyleSheet, View} from 'react-native';

import colors from './assets/theme/colors';

// import FeedScreen from './screen/FeedScreen';
import ProfileScreen from './screen/ProfileScreen';
// import CommentsScreen from './screen/CommentsScreen';

const App = () => {
  return (
    <View style={styles.app}>
      <ProfileScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default App;
