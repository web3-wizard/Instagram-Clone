import React from 'react';
import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import {useForm, Control, Controller} from 'react-hook-form';
import user from '../assets/data/user.json';
import colors from '../assets/theme/colors';
import fonts from '../assets/theme/fonts';
import {IUser} from '../../types';

const URL_REGEX =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/i;

type IEditableUserField = 'name' | 'username' | 'website' | 'bio';
type IEditableUser = Pick<IUser, IEditableUserField>;

interface ICustomInput {
  control: Control<IEditableUser, object>;
  name: IEditableUserField;
  label: string;
  multiline?: boolean;
  rules?: object;
}

const CustomInput = ({
  control,
  name,
  label,
  multiline = false,
  rules = {},
}: ICustomInput) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <View style={styles.inputContainer}>
          <Text style={styles.label}>{label}</Text>
          <View style={styles.errorContainer}>
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              style={[
                styles.input,
                {borderColor: error ? colors.error : colors.border},
              ]}
              placeholder={label}
              multiline={multiline}
            />
            {error && (
              <Text style={styles.errorTxt}>
                {error.message || 'Something went wrong!'}
              </Text>
            )}
          </View>
        </View>
      )}
    />
  );
};

const EditProfileScreen = () => {
  const {control, handleSubmit} = useForm<IEditableUser>({
    defaultValues: {
      name: user.name,
      username: user.username,
      website: user.website,
      bio: user.bio,
    },
  });

  const onSubmit = (data: IEditableUser) => {
    console.log('On Submit! ', data);
  };

  return (
    <View style={styles.page}>
      <Image source={{uri: user.image}} style={styles.avatar} />
      <Text style={styles.txtButton}>Change profile photo</Text>

      <CustomInput
        control={control}
        name="name"
        label="Name"
        rules={{
          required: 'Name is required',
          minLength: {value: 3, message: 'Name must be length 3'},
        }}
      />
      <CustomInput
        control={control}
        name="username"
        label="Username"
        rules={{
          required: 'Username is required',
          minLength: {value: 3, message: 'Username must be length 3'},
        }}
      />
      <CustomInput
        control={control}
        name="website"
        label="Website"
        rules={{
          pattern: {value: URL_REGEX, message: 'Invalid url'},
        }}
      />
      <CustomInput
        control={control}
        name="bio"
        label="Bio"
        multiline={true}
        rules={{
          maxLength: {
            value: 200,
            message: 'Bio should be less than 200 character',
          },
        }}
      />

      <Text onPress={handleSubmit(onSubmit)} style={styles.txtButton}>
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
  errorContainer: {
    flex: 1,
  },
  errorTxt: {
    fontSize: fonts.sizes.md,
    color: colors.error,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginVertical: 5,
    paddingHorizontal: 5,
  },
  input: {
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
