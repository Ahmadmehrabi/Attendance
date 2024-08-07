import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View,Text,Image,ScrollView} from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import Button from '../components/Button';


const PlaceholderLego = require('../assets/lego.jpg');

const ScreenStates = {
      Initial: 0,
      SegShow: 1,
      PathShow:2,
      AgeShow:3
    };


export default function ShowResults({leftPart,rightPart,heart,pathology,ageValue,isSeg,isAge}) {

      const [screenState, setScreenState] = useState(ScreenStates.Initial);

      const handleOnPathology = () => {
            setScreenState(ScreenStates.PathShow)
      }

      const handleOnSeg = () => {
            setScreenState(ScreenStates.SegShow)
      }


      const handleOnBack = () => {
            setScreenState(ScreenStates.Initial)
      }

      const handleOnAge = () => {
            setScreenState(ScreenStates.AgeShow)
      }

      return (
            <View style={styles.container}>  

              <View style={styles.head}>
                <Image source={PlaceholderLego} style={styles.lego} /> 
                <Text style={styles.titletext}> Artificial Assistant for medical care</Text>    
              </View>

              {screenState === ScreenStates.Initial && (
                  
                  <View style={styles.showresuls}>
                    <Button style={[styles.button,{width:'90%'},{height:'15%'}]} 
                            activeOpacity={0.4}
                            onPress={handleOnPathology}>

                      <MaterialIcons name="medical-services" size={35} color="black" />
                      <Text style={styles.buttonLabel} >Show the pathology</Text>
                    </Button>
                    
                    <Button style={[styles.button,{width:'90%'},{height:'15%'}]} 
                            activeOpacity={0.4}
                            onPress={handleOnSeg}
                            disabled={!isSeg}>

                      <FontAwesome name="image" size={25} color="black"/>
                      <Text style={styles.buttonLabel} >Show left and right parts and the heart</Text>
                    </Button>


                    <Button style={[styles.button,{width:'90%'},{height:'15%'}]} 
                            activeOpacity={0.4}
                            onPress={handleOnAge}
                            disabled={!isAge}>

                      <MaterialIcons name="medical-services" size={35} color="black" />
                      <Text style={styles.buttonLabel} >Show the Estimated Age</Text>
                    </Button>

                  <Button style={[styles.button,{width:'90%'},{height:'15%'},{flexDirection: 'row'}]} 
                            activeOpacity={0.4}
                            onPress={handleOnBack}>

                        <Ionicons name="md-chevron-back-circle" size={35} color="black" />
                        <Text style={styles.buttonLabel} >Back</Text>
                  </Button>

                  </View>
 
                  )}

              {screenState === ScreenStates.PathShow && (
                  <View style={[styles.showresuls,{flexDirection: 'row'}]}>

                    <View style={[{flex:1},
                                  {height:'80%'},
                                  {width:'60%'},
                                  {borderRadius: 35},
                                  {justifyContent: 'center'},
                                  {borderColor: 'blueviolet'},
                                  {alignItems: 'center'},
                                  {margin:20},
                                  {backgroundColor:'beige'}]}>
                    <ScrollView>
                      {Object.entries(pathology).map(([item,value])=>(
                        
                         <Text style={[styles.text,{color:value>0.6?'red':value>0.3?'orange':'green'}]}>
                              {item} {"====> "} 
                              {value>0.6?`Detected~~(${value})`:value>0.3?`Suspicious~~(${value})`:`Normal~~(${value})`}
                         </Text>
                        
                       ))}
                    </ScrollView>
                    </View>

                    <View style={[{flex:1},{justifyContent: 'center'},{alignItems: 'center'}]}>
                      <Button style={[styles.button,{width:'50%'},{height:'50%'},{flexDirection: 'row'}]} 
                            activeOpacity={0.4}
                            onPress={handleOnBack}>

                        <Ionicons name="md-chevron-back-circle" size={35} color="black" />
                        <Text style={styles.buttonLabel} >Back</Text>
                      </Button>

                    </View>

                  </View>
            )}

            {screenState === ScreenStates.SegShow && (
                  <View style={styles.showresuls}>

                   <View style={[{flex:6},{justifyContent: 'center'},{alignItems: 'center'},{flexDirection: 'row'}]}>
                    <Image 
                        style={styles.image}
                        source={{uri: `data:image/jpeg;base64,${rightPart}`}}
                        resizeMode='contain'>
                    </Image>

                    <Image 
                        style={styles.image}
                        source={{uri: `data:image/jpeg;base64,${heart}`}}
                        resizeMode='contain'>
                    </Image>

                    <Image 
                        style={styles.image}
                        source={{uri: `data:image/jpeg;base64,${leftPart}`}}
                        resizeMode='contain'>
                    </Image>

                  </View>

                  <Button style={[styles.button,{width:'80%'},{height:'8%'},{flexDirection: 'row'}]} 
                            activeOpacity={0.4}
                            onPress={handleOnBack}>

                        <Ionicons name="md-chevron-back-circle" size={35} color="black" />
                        <Text style={styles.buttonLabel} >Back</Text>
                  </Button>

                  </View>

                  
            )}


            {screenState === ScreenStates.AgeShow && (
                  <View style={[styles.showresuls,{flexDirection: 'row'}]}>

                    <View style={[{flex:1},{justifyContent: 'center'},{alignItems: 'center'}]}>
                      <Text style={styles.text}> Estimated Age = {ageValue} </Text>
                    </View>

                    <View style={[{flex:1},{justifyContent: 'center'},{alignItems: 'center'}]}>
                      <Button style={[styles.button,{width:'50%'},{height:'50%'},{flexDirection: 'row'}]} 
                            activeOpacity={0.4}
                            onPress={handleOnBack}>

                        <Ionicons name="md-chevron-back-circle" size={35} color="black" />
                        <Text style={styles.buttonLabel} >Back</Text>
                      </Button>

                    </View>
                    
                  </View>
            )}

              <StatusBar style="auto" backgroundColor="deepskyblue"/>
            </View>
      );        
}

//<Text style={styles.text}>Show Results</Text>

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
            flex:1.2,
            flexDirection: 'column',
            padding: 8,
            borderRadius: 35,
            backgroundColor: 'aquamarine',
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: 'blueviolet',
            borderWidth: 4,
            margin:8,
      },
      showresuls: {
            flex: 6.5,
            flexDirection: 'column',
            backgroundColor: 'rgb(190, 250, 95)',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 4,
            //borderRadius: 15,
            borderColor: 'blueviolet',
            margin: 1,
            padding:1
      },

      lego: {
            width: 50,
            height: 50,
            borderRadius: 15,
              //padding:10
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
            fontSize: 18,
            lineHeight: 25,
            fontWeight: 'bold',
            letterSpacing: 0.15,
            color: 'blue',
            textAlign: 'auto',
            //padding:3,
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
            fontSize: 18,
            fontWeight: 'bold',
            paddingLeft:15,
            textAlign: 'center',
      }, 
      
      image: {
            //flex:1,
            width: undefined,
            height: '100%',
            aspectRatio: 1,
      },

}); 



//<Button style={[styles.button,{width:'20%'},{height:'20%'}]} 
//activeOpacity={0.4}
//onPress={handleOnBack}>

//<Ionicons name="md-chevron-back-circle" size={35} color="black" />
//<Text style={styles.buttonLabel} >Back</Text>
//</Button>