import Icon from '@_components/SvgIcon';
import React from 'react';
import { Text, View } from 'react-native';

const LoginScreen = () => {
    return (
        <View className="flex-1 h-full justify-center items-center bg-white">
            <Text className="text-xl text-black">LoginScreen</Text>
            <Icon name="Refresh" size={24} color="black" />
        </View>
    );
};

export default LoginScreen;