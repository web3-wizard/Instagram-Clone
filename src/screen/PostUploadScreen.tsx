import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import {
  Camera,
  CameraType,
  FlashMode,
  VideoQuality,
  CameraPictureOptions,
  CameraRecordingOptions,
} from 'expo-camera';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import fonts from '../assets/theme/fonts';
import colors from '../assets/theme/colors';

const flashModes = [
  FlashMode.off,
  FlashMode.on,
  FlashMode.auto,
  FlashMode.torch,
];

const flashIcons = {
  [FlashMode.off]: 'flash-off',
  [FlashMode.on]: 'flash-on',
  [FlashMode.auto]: 'flash-auto',
  [FlashMode.torch]: 'highlight',
};

const PostUploadScreen = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [cameraType, setCameraType] = useState(CameraType.front);
  const [flash, setFlash] = useState(FlashMode.off);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  const camera = useRef<Camera>(null);

  useEffect(() => {
    const getPermission = async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const microphonePermission =
        await Camera.requestMicrophonePermissionsAsync();
      setHasPermission(
        cameraPermission.status === 'granted' &&
          microphonePermission.status === 'granted',
      );
    };
    getPermission();
  }, []);

  const flipCamera = () => {
    setCameraType(currentType =>
      currentType === CameraType.front ? CameraType.back : CameraType.front,
    );
  };

  const flipFlash = () => {
    const currentIndex = flashModes.indexOf(flash);
    const nextIndex =
      currentIndex === flashModes.length - 1 ? 0 : currentIndex + 1;
    setFlash(flashModes[nextIndex]);
  };

  const takePicture = async () => {
    if (!isCameraReady || !camera.current || isRecording) {
      return;
    }

    const options: CameraPictureOptions = {
      quality: 1,
      base64: false,
      skipProcessing: true,
    };
    const result = await camera.current.takePictureAsync(options);
    console.log(result);
  };

  const startRecording = async () => {
    if (!isCameraReady || !camera.current || isRecording) {
      return;
    }

    const options: CameraRecordingOptions = {
      quality: VideoQuality['720p'],
      maxDuration: 60,
      maxFileSize: 10 * 1024 * 1024,
      mute: false,
    };
    setIsRecording(true);
    try {
      const result = await camera.current.recordAsync(options);
      console.log(result);
    } catch (err: any) {
      console.log(err.message);
    } finally {
      setIsRecording(false);
    }
  };

  const stopRecording = () => {
    if (isRecording) {
      camera.current?.stopRecording();
      setIsRecording(false);
    }
  };

  if (hasPermission === null) {
    return <ActivityIndicator size={56} style={styles.loading} />;
  }

  if (hasPermission === false) {
    return (
      <View style={styles.loading}>
        <Text style={styles.loadingTxt}>
          Please give camera and microphone permission for working this features
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.page}>
      <Camera
        ref={camera}
        style={styles.camera}
        type={cameraType}
        ratio="4:3"
        flashMode={flash}
        onCameraReady={() => setIsCameraReady(true)}
      />

      <View style={[styles.buttonsContainer, {top: 25}]}>
        <MaterialIcons size={30} color={colors.white} name="close" />
        <Pressable onPress={flipFlash}>
          <MaterialIcons
            size={30}
            color={colors.white}
            name={flashIcons[flash]}
          />
        </Pressable>
        <MaterialIcons size={30} color={colors.white} name="settings" />
      </View>

      <View style={[styles.buttonsContainer, {bottom: 25}]}>
        <MaterialIcons size={30} color={colors.white} name="photo-library" />
        {isCameraReady && (
          <Pressable
            onPress={takePicture}
            onLongPress={startRecording}
            onPressOut={stopRecording}>
            <View
              style={[
                styles.circle,
                {backgroundColor: isRecording ? colors.accent : colors.white},
              ]}
            />
          </Pressable>
        )}
        <Pressable onPress={flipCamera}>
          <MaterialIcons
            size={30}
            color={colors.white}
            name="flip-camera-ios"
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  camera: {
    width: '100%',
    aspectRatio: 3 / 4,
  },
  circle: {
    width: 75,
    aspectRatio: 1,
    borderRadius: 75,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingTxt: {
    fontSize: fonts.sizes.md,
    fontWeight: fonts.weights.semi,
    color: colors.grey,
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.black,
  },
});

export default PostUploadScreen;
