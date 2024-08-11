import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function MainScreen() {
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();

  const handleCodeScanned = (data) => {
    alert(data);
  }

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} barcodeScannerSettings={{ barCodeTypes: ['qr'] }} onBarcodeScanned={handleCodeScanned}>

      </CameraView>

      <View style={styles.info}>
      <Text>Salam</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'green',
    margin: 64,
  },

  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});


//          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
//            <Text style={styles.text}>Flip Camera</Text>
//          </TouchableOpacity>