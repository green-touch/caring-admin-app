import React from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import NavigationHeader from '@_components/common/NavigationHeader'


const ElderListScreen = ({ navigation }: { navigation: any }) => {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <NavigationHeader
                title="노인 리스트"
                type="onlyMenu"
                onMenuPress={() => {
                    navigation.navigate('Sidebar')
                }}

            />
            <View className="flex-1 items-center justify-center">
                <Text>ElderListScreen</Text>
            </View>
        </SafeAreaView>
    )
}

export default ElderListScreen