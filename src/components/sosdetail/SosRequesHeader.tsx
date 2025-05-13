// components/sosdetail/SosRequestHeader.tsx
import React from 'react'
import { View, Text } from 'react-native'
import SvgIcon from '@_components/SvgIcon'
import LinearGradient from 'react-native-linear-gradient'

interface SosRequestHeaderProps {
  requestTime: string
}

const SosRequestHeader = ({ requestTime }: SosRequestHeaderProps) => {
  return (
    <LinearGradient
      colors={["#A90000", "#CD3939"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      className="w-full h-[120px] rounded-b-[8px] px-[52px] pt-[20px] pb-[20px] justify-between"
    >
      <View className="flex-row items-center gap-[8px] justify-center">
        <SvgIcon name="Bell" size={25} />
        <Text className="text-white text-[24px] font-bold leading-[36px]">긴급 SOS 요청</Text>
      </View>

      <View className="mt-[10px] bg-[#820000] rounded-[4px] px-[10px] py-[2px] items-center self-center">
        <Text className="text-white text-[13px] font-normal leading-[18px]">
          요청시간 · <Text className="font-bold">{requestTime}</Text>
        </Text>
      </View>
    </LinearGradient>
  )
}

export default SosRequestHeader
