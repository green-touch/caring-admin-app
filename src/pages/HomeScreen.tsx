import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import NavigationHeader from '@_components/common/NavigationHeader'


const HomeScreen = ({ navigation }: { navigation: any }) => {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <NavigationHeader
                title="홈"
                type="withLogo"
                onMenuPress={() => {
                    navigation.navigate('Sidebar')
                }}
            />
            <View className="flex-1 items-center justify-center">
                <Text>HomeScreen</Text>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen