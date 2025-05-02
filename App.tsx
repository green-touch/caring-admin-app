import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { RootStackParamList, MainTabParamList } from '@_navigation/types';

import MainScreen from '@_pages/MainScreen';
import LoginScreen from '@_pages/LoginMain';
import Demo from '@_pages/Demo';
import Sidebar from '@_pages/Sidebar';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          //animation: 'none'
        }}
        initialRouteName="Login"
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Demo" component={Demo} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Sidebar" component={Sidebar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
