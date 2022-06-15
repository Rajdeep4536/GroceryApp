import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Account from './src/screen/Account';
import Home from './src/screen/Home';
import Cart from './src/screen/Cart';
import Favourite from './src/screen/Favourite';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Favourite" component={Favourite}/>
   
    <Stack.Screen name="Cart" component={Cart} />
     
      <Stack.Screen name="Account" component={Account} />     
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})