import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import fonts from './theme/fonts';
import colors from './theme/colors';

const App = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>App</Text>
      <Text>
        <AntDesign name="home" size={26} color="blue" />
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
  textStyle: {
    color: colors.primary,
    fontSize: fonts.sizes.xl,
    fontWeight: 'bold',
  },
});

export default App;
