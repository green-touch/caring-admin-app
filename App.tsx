import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from '@_navigation/types';

import MainScreen from '@_pages/MainScreen';
import LoginScreen from '@_pages/LoginMain';
import Demo from '@_pages/Demo';
import Sidebar from '@_pages/Sidebar';
import ResetPassword from '@_pages/ResetPassword';
import HelpResult from '@_pages/HelpResult';
import SosDetailScreen from '@_pages/SosDetail';
import SosEmergencyDetailScreen from '@_pages/SosEmergencyDetail';
import UserDetail from '@_pages/ElderDetail';
import ElderListScreen from '@_pages/ElderListScreen';
const Stack = createNativeStackNavigator<RootStackParamList>();
const ListStack = createNativeStackNavigator();

const ElderListStackNavigator = () => (
  <ListStack.Navigator screenOptions={{ headerShown: false }}>
    <ListStack.Screen name="ElderList" component={ElderListScreen} />
    <ListStack.Screen name="User" component={UserDetail} />
  </ListStack.Navigator>
);

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
        <Stack.Screen name="User" component={UserDetail} />
        <Stack.Screen name="Elder" component={ElderListStackNavigator}/>
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="HelpResult" component={HelpResult} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
