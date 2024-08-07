import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,Image,Text,ImageBackground,ScrollView} from 'react-native';

//import Checkbox from 'expo-checkbox';
import { Checkbox } from 'react-native-paper';

import { FontAwesome } from '@expo/vector-icons';
import Button from '../components/Button';


const PlaceholderLego = require('../assets/lego.jpg');

export default function SelectImage({onSelection,onProcess,onReset,selected,isSeg,setIsSeg,isAge,setIsAge}) {

      if (selected === null) {
            return (
            <View style={styles.container}>  

              <View style={styles.head}>
                <Image source={PlaceholderLego} style={styles.lego} /> 
                <Text style={styles.titletext}> Artificial Assistant for medical care</Text>    
              </View>
          
                
              <View style={styles.selectarea}>

                  <View style={styles.selectoption}>
                    <Button style={[styles.button,{width:'90%'},{height:'40%'}]} 
                            activeOpacity={0.4}
                            onPress={onSelection}>

                    <FontAwesome name="upload" size={25} color="black"/>
                    <Text style={styles.buttonLabel} >Choose a CXR</Text>
                   </Button>

                   <Button style={[styles.button,{width:'90%'},{height:'40%'}]} 
                            activeOpacity={0.4}
                            onPress={()=>{}}
                            disabled={true}>

                    <FontAwesome name="refresh" size={25} color="black"/>
                    <Text style={styles.buttonLabel} >Reset</Text>
                   </Button>

                  </View>
                        
                  <View style={[styles.selectoption,{flexDirection:'row'}]}>
                        
                        <Checkbox.Item label={'Pathology'} status={'unchecked'} disabled={true} onPress={()=>{}} />
                        <Checkbox.Item label={'Segmantation'} status={'unchecked'} disabled={true} onPress={()=>{}} />
                        <Checkbox.Item label={'Estimate Age'} status={'unchecked'} disabled={true} onPress={()=>{}} />
                        
                  </View>


              </View>

          
              <View style={styles.showimage}>
                  <Text style={styles.text}>No Image selected</Text>
              </View>
          

              <View style={styles.buttoncont}>
                <Button style={[styles.button,{width:'80%'},{height:'85%'}]} 
                            activeOpacity={0.4}
                            onPress={()=>{}}
                            disabled={true}>

                  <FontAwesome name="medkit" size={25} color="black"/>
                  <Text style={styles.buttonLabel} >Process Image</Text>
                </Button>
              </View>
              <StatusBar style="auto" backgroundColor="deepskyblue"/>
            </View> 
            );

      }

      return (

      <View style={styles.container}>
          
            <View style={styles.head}>
              <Image source={PlaceholderLego} style={styles.lego} />
              <Text style={styles.titletext}> Artificial Assistant for medical care</Text> 
            </View>
                

            <View style={styles.selectarea}>

              <View style={styles.selectoption}>
                    <Button style={[styles.button,{width:'90%'},{height:'40%'}]} 
                            activeOpacity={0.4}
                            onPress={onSelection}
                            disabled={true}>

                    <FontAwesome name="upload" size={25} color="black"/>
                    <Text style={styles.buttonLabel} >Choose a CXR</Text>
                   </Button>

                   <Button style={[styles.button,{width:'90%'},{height:'40%'}]} 
                            activeOpacity={0.4}
                            onPress={onReset}>

                    <FontAwesome name="refresh" size={25} color="black"/>
                    <Text style={styles.buttonLabel} >Reset</Text>
                   </Button>

                  </View>
                        
                  <View style={[styles.selectoption,{flexDirection:'row'}]}>
                        
                        <Checkbox.Item label={'Pathology'} 
                                       status={'checked'} 
                                       onPress={()=>{}} />

                        <Checkbox.Item label={'Segmantation'}
                                       status={isSeg?'checked':'unchecked'}  
                                       onPress={()=>{setIsSeg(!isSeg)}} />

                        <Checkbox.Item label={'Estimate Age'} 
                                       status={isAge?'checked':'unchecked'} 
                                       onPress={()=>{setIsAge(!isAge)}} />
                        
                  </View>
            </View>
          


            <View style={styles.showimage}>
                  <Image style={styles.image} 
                         source={{uri:selected.uri}}>

                  </Image>

            </View>
          


            <View style={styles.buttoncont}>
              <Button style={[styles.button,{width:'80%'},{height:'85%'}]} 
                            activeOpacity={0.4}
                            onPress={onProcess}>

                  <FontAwesome name="medkit" size={25} color="black"/>
                  <Text style={styles.buttonLabel} >Process Image</Text>
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
              backgroundColor: 'lightblue',
              //justifyContent: 'center',
              padding: 10,
              //margin: 5,
      },
          
      head: {
            flex:1.3,
            flexDirection: 'column',
            padding: 8,
            borderRadius: 35,
            backgroundColor: 'aquamarine',
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: 'blueviolet',
            borderWidth: 4,
            marginTop:18,
      },
          
      buttoncont: {
            flex: 1.2,
            flexDirection: 'row',
            //backgroundColor: 'beige',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 5,
              //borderWidth: 5,
              //borderRadius: 15,
              //borderColor: 'blueviolet',
            //margin: 5,
      },

      selectarea:{
            flex:2,
            flexDirection:'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 5,

      },
          
      selectoption:{
            width:'50%',
            height:'95%',
            borderWidth: 5,
            borderRadius: 35,
            borderColor: 'blueviolet',
            backgroundColor: 'lightgoldenrodyellow',
            padding: 5,
            justifyContent: 'center',
            alignItems: 'center',
            margin:3,
      },

      showimage: {
            flex: 6.5,
            flexDirection: 'row',
            backgroundColor: 'rgb(190, 250, 95)',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 4,
            //borderRadius: 15,
            borderColor: 'blueviolet',
            //margin: 5,
            padding:1
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
          
      titletext: {
            fontSize: 16,
            //fontWeight: 'bold',
            letterSpacing: 0.25,
            color: 'navy',
            //padding:5,
            textAlign: 'center',
      },
          
      text: {
            fontSize: 28,
            lineHeight: 30,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color: 'fuchsia',
      },
          
      image: {
            //flex:1,
            width: undefined,
            // Without height undefined it won't work
            height: '98%',
            // figure out your image aspect ratiofix
            aspectRatio: 1,
      },
          
      lego: {
            width: 50,
            height: 50,
            borderRadius: 15,
            aspectRatio: 1,
            //padding:10
      },
          
      buttonLabel: {
            color: 'white',
            fontSize: 16,
            //fontWeight: 'bold',
            paddingLeft:12,
            textAlign: 'center',
      },   
      
      checkbox: {
            margin: 5,
            height: 20,
            width: 20,
      },

      check_text: {
            fontSize: 16,
            lineHeight: 12,
            //fontWeight: 'bold',
            letterSpacing: 0.25,
            color: 'white',
            padding:5,
      },
      section: {
            flexDirection: 'row',
            alignItems: 'center',
      },

      image_area: {
            flex:3,
            alignItems: 'center',
            justifyContent: 'center',
      },

      check_area: {
            flex:1,
            alignItems: 'flex-start',
            justifyContent: 'flex-end',
            padding:5,
            
      },
          
});