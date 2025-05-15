import React from 'react'
import { Text, View, TouchableOpacity, Linking, Alert } from 'react-native'

interface ContactItem {
  name: string
  relation: string
  phone: string
}

const EmergencyContactListBox = ({ contactList }: { contactList: ContactItem[] }) => {
    const handleCall = (number: string) => {
      Linking.openURL(`tel:${number}`).catch((err) => {
        Alert.alert('전화 앱을 열 수 없습니다', err.message)
      })
    }
    return (
   <View className="bg-white rounded-[10px] px-[16px] pt-[24px] pb-[24px] mt-4">
  <Text className="text-[19px] font-bold text-black mb-10">비상 연락망</Text>
  {contactList.length === 0 ? (
    <View className="w-full bg-gray5 rounded-[10px] px-[16px] py-[24px] items-center justify-center">
      <Text className="text-[15px] text-gray90">비상 연락망 정보가 없습니다</Text>
    </View>
  ) : (
    contactList.map((item, index) => (
      <View
        key={index}
        className={`flex-row justify-between items-center ${index !== contactList.length - 1 ? 'mb-10' : ''}`}
      >
        <View>
          <View className="flex-row items-end mb-2">
            <Text className="text-[17px] font-bold text-gray100 mr-2">{item.name}</Text>
            <Text className="text-[15px] text-gray50">{item.relation}</Text>
          </View>
          <Text className="text-[15px] text-gray90 mt-1">{item.phone}</Text>
        </View>
        <TouchableOpacity
          className="border border-[#152C4A] rounded-[8px] px-3 py-2"
          onPress={() => handleCall(item.phone)}
        >
          <Text className="text-[#152C4A] text-[15px] font-medium">전화걸기</Text>
        </TouchableOpacity>
      </View>
    ))
  )}
</View>

  )
}

export default EmergencyContactListBox