import * as React from 'react';
import { Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Fontisto} from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


import MainScreen from './components/main';
import InfoScreen from './components/info';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            if (route.name === 'Check Attendance') {

              return <FontAwesome5 name={'user-check'} size={size} color={color} />; 

            } else if (route.name === 'All class info') {
              
              return <Fontisto name={'info'} size={size} color={color} />;

            } 
          },
          
          
          tabBarActiveTintColor: 'blueviolet',
          tabBarInactiveTintColor: 'pink',
        })}
      >
        <Tab.Screen name="Check Attendance" component={MainScreen} />
        <Tab.Screen name="All class info" component={InfoScreen} />
      
      </Tab.Navigator>
    </NavigationContainer>
  );
}
