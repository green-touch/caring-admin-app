// components/sosdetail/RequestInfoBox.tsx
import React from 'react'
import { View, Text } from 'react-native'

interface RequestInfoBoxProps {
  datetime: string
  location: string
}

const RequestInfoBox = ({ datetime, location }: RequestInfoBoxProps) => {
  return (
    <View className="bg-white rounded-[8px] px-[16px] pt-[24px] pb-[24px] mt-4 mx-1.5">
      <Text className="text-[19px] font-bold text-black">요청 날짜 및 장소</Text>

      <View className="mt-6">
        <Text className="text-[17px] font-medium text-black mb-[5px]">일시</Text>
        <Text className="text-[15px] mb-3 text-gray70">{datetime}</Text>
      </View>

      <View className="w-full h-[1px] bg-[#F0F0F0] my-[24px]" />

      <View>
        <Text className="text-[17px] font-medium text-black mb-[5px]">장소</Text>
        <Text className="text-[15px] text-gray70 mb-3">{location}</Text>
      </View>
    </View>
  )
}

export default RequestInfoBox
