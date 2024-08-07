
import { StyleSheet, View,Image,Text,ScrollView} from 'react-native';
import { StatusBar } from 'expo-status-bar';

const image1 = require('../assets/images/1.png');
import Button from '../components/Button';

export default function DrawingScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.selectbotton}>
      
      <ScrollView style={{width:'80%'}} >
      
      <Button style={[styles.button,{width:'55%'},{height:'30%'}]} 
                            activeOpacity={0.4}
                            onPress={()=>{}}>
         <Text style={styles.buttonLabel} >Stage1</Text>
        </Button>
        <Button style={[styles.button,{width:'55%'},{height:'30%'}]} 
                            activeOpacity={0.4}
                            onPress={()=>{}}>
         <Text style={styles.buttonLabel} >Stage2</Text>
        </Button>
        <Button style={[styles.button,{width:'55%'},{height:'30%'}]} 
                            activeOpacity={0.4}
                            onPress={()=>{}}>
         <Text style={styles.buttonLabel} >Stage3</Text>
        </Button>
        <Button style={[styles.button,{width:'55%'},{height:'30%'}]} 
                            activeOpacity={0.4}
                            onPress={()=>{}}>
         <Text style={styles.buttonLabel} >Stage4</Text>
        </Button>
        <Button style={[styles.button,{width:'55%'},{height:'30%'}]} 
                            activeOpacity={0.4}
                            onPress={()=>{}}>
         <Text style={styles.buttonLabel} >Stage5</Text>
        </Button>
       
      </ScrollView>
     
      
      </View>

      <View style={styles.imagearea}>
         <Image style={styles.image} source={image1}></Image>
         <Text style={styles.text}> با توجه به شکل رو به رو .....</Text>

      </View>

      <View style={styles.sendimage}>
        <Button style={[styles.button,{width:'45%'},{height:'80%'}]} 
                            activeOpacity={0.4}
                            onPress={()=>{}}>
         <Text style={styles.buttonLabel} >Choose image</Text>
        </Button>
        <Button style={[styles.button,{width:'45%'},{height:'80%'}]} 
                            activeOpacity={0.4}
                            onPress={()=>{}}>
         <Text style={styles.buttonLabel} >Submite</Text>
        </Button>

      </View>
      
      <StatusBar style="auto" backgroundColor="deepskyblue" />
    </View>
  );
}


const styles = StyleSheet.create({
      container: {
              flex:1,
              flexDirection: 'column',
              justifyContent: 'space-between',
              //backgroundColor: 'lightblue',
              //justifyContent: 'center',
              padding: 10,
              //margin: 5,
      },
      selectbotton:{
            flex:2,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'pink',
            borderRadius: 25,
            margin:5,

      },
      imagearea:{
            flex:6,
            backgroundColor: 'lightblue',
            borderRadius: 35,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
      },
      image:{
            //flex:1,
            width: undefined,
            // Without height undefined it won't work
            height: '55%',
            // figure out your image aspect ratiofix
            aspectRatio: 1,
            borderRadius: 25, 
      },
      text: {
            fontSize: 22,
            lineHeight: 30,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color: 'hotpink',
      },
      sendimage:{
            flex:1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding:5,

      },
      button: {
            borderRadius: 25,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            backgroundColor: 'deepskyblue',
            //padding: 10,
            borderWidth: 2,
            margin:5,
            borderColor: "black",        
      },
      buttonLabel: {
            color: 'white',
            fontSize: 16,
            //fontWeight: 'bold',
            //paddingLeft:12,
            textAlign: 'center',
      }, 
      scrollView: {
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'pink',
            marginHorizontal: 20,
            width:'90%',
            borderRadius: 25,
            margin: 5,

          },

});