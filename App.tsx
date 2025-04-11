import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackParamList, MainTabParamList } from './src/navigation/types';

import SosListScreen from './src/\bscreens/SosListScreen';
import ElderListScreen from './src/\bscreens/ElderListScreen';
import MainScreen from './src/\bscreens/MainScreen';
import LoginScreen from './src/\bscreens/LoginScreen';


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
        <Stack.Screen name="Main" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}