import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { RootStackParamList, MainTabParamList } from '@_navigation/types';

import MainScreen from '@_pages/MainScreen';
import LoginScreen from '@_pages/LoginScreen';
import SosListScreen from '@_pages/SosListScreen';
import ElderListScreen from '@_pages/ElderListScreen';
import Demo from '@_pages/Demo';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<MainTabParamList>();

const MainTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="SosList" component={SosListScreen} />
    <Tab.Screen name="ElderList" component={ElderListScreen} />
    <Tab.Screen name="Main" component={MainScreen} />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Demo" component={Demo} />
        <Stack.Screen name="Main" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
