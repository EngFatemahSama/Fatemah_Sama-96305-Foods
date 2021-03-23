import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator } from '@react-navigation/stack'
import { createBottumTobNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Stack = createStackNavigator()
const Top = createBottumTobNavigator()

import Home from './Screens/Home';
import Detail from './Screens/Detail';

export default function App() {
  return (
    <NavigationContainer>
      <Top.Navigator 
        initialRouteName = "Food"
        tobBarOptions ={{
          activeTintColor: "#841548"
        }}
      >
      <Top.Screen
      name = "Home"
      component={{HomeStack}}
      options={{
        tobBarLable: "Home",
        tobBarIcon: ({ color,size}) =>(
          <MaterialCommunityIcons
          name="home"
          color={color}
          size={size}
          />
        )
      }} 
      />
      </Top.Navigator>
    </NavigationContainer>
  );
}

function HomeStack(){
  return(
    <Stack.Navigator
  initialRouteName = "Home"
   screenOptions={{
     headerStyle: { backgroundColor: "#841548" },
     headerTintColor: {fontWeight: "bold"},

   }}
  >
    <Stack.screen
    name= "Home"
    component= {Home}
    options={{title:"Home Page"}}
    />

    <Stack.Screen
    name="Detail"
    component={Detail}
    />
    
  </Stack.Navigator>
  );
}

const styles = StyleSheet.create({

});
