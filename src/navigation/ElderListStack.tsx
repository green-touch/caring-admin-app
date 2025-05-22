import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ElderListScreen from '@_pages/ElderListScreen'
import UserDetail from '@_pages/ElderDetail'

const Stack = createNativeStackNavigator()

const ElderListStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ElderList" component={ElderListScreen} />
      <Stack.Screen 
        name="UserDetail" 
        component={UserDetail} 
        options={{ 
          presentation: 'card', 
        }} 
      />
    </Stack.Navigator>
  )
}

export default ElderListStack
