import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native';

import tw from 'tailwind-react-native-classnames';

import SvgIcon from '@_components/SvgIcon';
import ElderListStack from '@_navigation/ElderListStack';
import SosListScreen from '@_pages/SosListScreen';
import HomeScreen from './HomeScreen';

const Tab = createBottomTabNavigator();

function MainScreen({ navigation }: any): React.JSX.Element {
    return (
        <Tab.Navigator initialRouteName="홈">
            <Tab.Screen
                name="SOS 목록"
                component={SosListScreen}
                options={{
                    headerShown: false,
                    headerTitle: 'SOS 목록',
                    headerTitleStyle: tw`text-lg`,
                    headerTitleAlign: 'center',
                    headerStyle: tw`h-14 border-b border-[#E4E4E4]`,
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.goBack()} className="ml-2">
                            <SvgIcon name="Back2" size={32} />
                        </TouchableOpacity>
                    ),
                    tabBarIcon: ({ focused }) => (
                        <SvgIcon name={focused ? 'BellGrayActive' : 'BellGrayDisabled'} size={32} />
                    ),
                    tabBarStyle: tw`h-16`,
                    tabBarLabelStyle: tw`mt-1 text-sm`,
                    tabBarActiveTintColor: '#234A7C',
                    tabBarInactiveTintColor: '#8E8E8E',
                }}
            />
            <Tab.Screen
                name="홈"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <SvgIcon name={focused ? 'HomeActive' : 'HomeDisabled'} size={32} />
                    ),
                    tabBarStyle: tw`h-16`,
                    tabBarLabelStyle: tw`mt-1 text-sm`,
                    tabBarActiveTintColor: '#234A7C',
                    tabBarInactiveTintColor: '#8E8E8E',
                }}
            />
            <Tab.Screen
                name="노인 리스트"
                component={ElderListStack}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <SvgIcon name={focused ? 'ListActive' : 'ListDisabled'} size={32} />
                    ),
                    tabBarStyle: tw`h-16`,
                    tabBarLabelStyle: tw`mt-1 text-sm`,
                    tabBarActiveTintColor: '#234A7C',
                    tabBarInactiveTintColor: '#8E8E8E',
                }}
            />
        </Tab.Navigator>
    );
}

export default MainScreen;
