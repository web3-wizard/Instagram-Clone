import React from 'react';
import {StyleSheet, View} from 'react-native';
import FeedScreen from './screen/FeedScreen';
import colors from './theme/colors';

const App = () => {
  return (
    <View style={styles.app}>
      <FeedScreen />
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
