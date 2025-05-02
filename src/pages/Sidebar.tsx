import React from 'react'
import { View, Text, Alert } from 'react-native'
import NavigationHeader from '@_components/common/NavigationHeader'

type Props = {
    navigation: any
}

const Sidebar = ({ navigation }: Props) => {
    return (
        <View>
            <NavigationHeader
                title="Sidebar"
                type="withClose"
            />
            <Text>Sidebar</Text>
        </View>
    )
}

export default Sidebar