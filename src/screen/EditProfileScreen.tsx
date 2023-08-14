import React from 'react';
import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import user from '../assets/data/user.json';
import colors from '../assets/theme/colors';
import fonts from '../assets/theme/fonts';

interface ICustomInput {
  label: string;
  multiline?: boolean;
}

const CustomInput = ({label, multiline = false}: ICustomInput) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={label}
        multiline={multiline}
      />
    </View>
  );
};

const EditProfileScreen = () => {
  const handleSubmit = () => {
    console.warn('On Submit!');
  };

  return (
    <View style={styles.page}>
      <Image source={{uri: user.image}} style={styles.avatar} />
      <Text style={styles.txtButton}>Change profile photo</Text>

      <CustomInput label="Name" />
      <CustomInput label="Username" />
      <CustomInput label="Website" />
      <CustomInput label="Bio" multiline={true} />

      <Text onPress={handleSubmit} style={styles.txtButton}>
        Submit
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: '30%',
    aspectRatio: 1,
    borderRadius: 100,
    marginTop: 25,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginVertical: 5,
    paddingHorizontal: 5,
  },
  input: {
    flex: 1,
    borderColor: colors.border,
    borderBottomWidth: 1,
  },
  label: {
    width: 75,
    color: colors.black,
  },
  page: {
    padding: 10,
    alignItems: 'center',
  },
  txtButton: {
    marginVertical: 10,
    color: colors.primary,
    fontSize: fonts.sizes.md,
    fontWeight: fonts.weights.semi,
  },
});

export default EditProfileScreen;
