import React from 'react';
import {StyleSheet, View} from 'react-native';

import colors from './theme/colors';

import CommentsScreen from './screen/CommentsScreen';

const App = () => {
  return (
    <View style={styles.app}>
      <CommentsScreen />
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
