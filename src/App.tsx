import React from 'react';
import {StyleSheet, View} from 'react-native';

import colors from './assets/theme/colors';

import EditProfileScreen from './screen/EditProfileScreen';

const App = () => {
  return (
    <View style={styles.app}>
      <EditProfileScreen />
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
