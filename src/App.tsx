import React from 'react';
import {StyleSheet, View} from 'react-native';
import FeedScreen from './screen/FeedScreen';

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
  },
});

export default App;
