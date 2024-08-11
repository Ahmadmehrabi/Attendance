import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { StyleSheet, Text, View} from 'react-native';


import Button from '../components/Button';

export default function MainScreen() {
  const [onsuccess, setOnsuccess] = useState(false);
  const [permission, requestPermission] = useCameraPermissions();

  const handleCodeScanned = (data) => {
    alert(data.type);
    setOnsuccess(true)
  }

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to scan the QR code</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }


  return (
    <>
    {onsuccess === false &&
    <View style={styles.container}>
      <CameraView style={styles.camera} barcodeScannerSettings={{ barCodeTypes: ['qr'] }} onBarcodeScanned={handleCodeScanned}>

      </CameraView>

      <View style={styles.info}>
      <Text style={styles.message}>Student info after scan</Text>
      </View>
    </View>
    }
    {onsuccess===true &&
        <View style={styles.container}>
        <View style={styles.camera} >
  
        </View>

        
  
        <View style={styles.info}>
        <Button style={[styles.button,{width:'90%'},{height:'35%'}]} 
                            activeOpacity={0.4}
                            onPress={()=>{}}
                            disabled={false}>

                    
                    <Text style={styles.text} >Next</Text>
                   </Button>

        </View>
      </View>
    }

    </>
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
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    justifyContent: 'center',

  },
  camera: {
    flex: 4,
  },
  info: {
    flex: 1,
    //flexDirection: 'row',
    //backgroundColor: 'khaki',
    margin: 5,
    borderRadius:20,
    justifyContent: 'center',
    alignItems: 'center',
    padding:10,
  },

  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  button: {
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: "#f194ff",
    //padding: 10,
    borderWidth: 3,
    margin:5,
    borderColor: "white",        
},
});


//          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
//            <Text style={styles.text}>Flip Camera</Text>
//          </TouchableOpacity>

//<Button title='Next' 
//color="#f194ff"
//onPress={()=>{}} >
//</Button>