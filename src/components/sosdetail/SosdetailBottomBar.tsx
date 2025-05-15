import React from 'react'
import { Text, TouchableOpacity, View, Alert, Linking } from 'react-native'

interface SosDetailBottomBarProps {
  phoneNumber: string
}

const SosDetailBottomBar = ({ phoneNumber }: SosDetailBottomBarProps) => {
  const handleCall = (number: string) => {
    Linking.openURL(`tel:${number}`).catch((err) => {
      Alert.alert('전화 앱을 열 수 없습니다', err.message)
    })
  }

  return (
    <View className="absolute bottom-0 left-0 right-0 border-t border-[#E4E4E4] bg-white flex-row justify-between px-[16px] py-4 shadow-md shadow-black/10">
      <TouchableOpacity
        className="w-[48%] border border-gray50 rounded-[8px] py-3 items-center"
        onPress={() => handleCall('119')}
      >
        <Text className="text-[17px] font-medium text-gray90">119 신고</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="w-[48%] bg-[#152C4A] rounded-[8px] py-3 items-center"
        onPress={() => handleCall(phoneNumber)}
      >
        <Text className="text-[17px] font-medium text-white">전화걸기</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SosDetailBottomBar
