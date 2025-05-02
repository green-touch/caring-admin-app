import NavigationHeader from '@_components/common/NavigationHeader'
import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'

const SosListScreen = ({ navigation }: { navigation: any }) => {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <NavigationHeader
                title="SOS 요청 리스트"
                type="onlyMenu"
                onMenuPress={() => {
                    navigation.navigate('Sidebar')
                }}
            />
            <View className="flex-1 items-center justify-center">
                <Text>SosListScreen</Text>
            </View>
        </SafeAreaView>
    )
}

export default SosListScreen