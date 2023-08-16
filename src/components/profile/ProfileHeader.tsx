import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import user from '../../assets/data/user.json';
import fonts from '../../assets/theme/fonts';
import colors from '../../assets/theme/colors';
import Button from '../../components/custom/Button';

const ProfileHeader = () => {
  return (
    <View style={styles.root}>
      <View style={styles.headerRow}>
        {/* Profile Image */}
        <Image source={{uri: user.image}} style={styles.avatar} />

        {/* Posts, Followers and Following number */}
        <View style={styles.numberContainer}>
          <Text style={styles.numberTxt}>26</Text>
          <Text>Posts</Text>
        </View>

        <View style={styles.numberContainer}>
          <Text style={styles.numberTxt}>26</Text>
          <Text>Followers</Text>
        </View>

        <View style={styles.numberContainer}>
          <Text style={styles.numberTxt}>26</Text>
          <Text>Following</Text>
        </View>
      </View>

      {/* User's name & bio */}
      <Text style={styles.name}>{user.name}</Text>
      <Text>{user.bio}</Text>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <Button
          text="Edit Profile"
          onPress={() => console.warn('Edit Button Press')}
        />
        <Button
          text="Contact Me"
          onPress={() => console.warn('Contact Me Press')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 100,
    aspectRatio: 1,
    borderRadius: 50,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  name: {
    fontWeight: fonts.weights.semi,
    color: colors.black,
  },
  numberContainer: {
    alignItems: 'center',
  },
  numberTxt: {
    fontSize: fonts.sizes.md,
    fontWeight: fonts.weights.full,
    color: colors.black,
  },
  root: {
    padding: 10,
  },
});

export default ProfileHeader;
