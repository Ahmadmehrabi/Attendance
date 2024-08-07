import * as React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


import DrawingScreen from './components/Drawing';


function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function SetScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Set details!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            if (route.name === 'Drawing Artwork') {

              return <Fontisto name={'raspberry-pi'} size={size} color={color} />; 

            } else if (route.name === 'Telling Story') {
              
              return <MaterialIcons name={'record-voice-over'} size={size} color={color} />;

            } else if (route.name === 'Leaderboard') {
              
              return <Foundation name={'results-demographics'} size={size} color={color} />;
          }
          },
          
          
          tabBarActiveTintColor: 'blueviolet',
          tabBarInactiveTintColor: 'pink',
        })}
      >
        <Tab.Screen name="Drawing Artwork" component={DrawingScreen} />
        <Tab.Screen name="Telling Story" component={SettingsScreen} />
        <Tab.Screen name="Leaderboard" component={SetScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
