// components/sosdetail/CurrentLocationBox.tsx
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import SvgIcon from '@_components/SvgIcon'
import AddressCopyBox from './AddressCopyBox'
const CurrentLocationBox = () => {
  const currentAddress = '인천 서구 도움6로 42 도움아파트 123동 45호'

  return (
    <View className="bg-white rounded-[8px] mt-[24px] px-[16px] pt-[24px] pb-[16px]">
      <View className="flex-row justify-between items-center mb-[12px]">
        <Text className="text-[19px] font-bold text-black">현재 위치</Text>
        <TouchableOpacity>
          <SvgIcon name="Refresh" size={22} />
        </TouchableOpacity>
      </View>
      <View className="bg-gray5 rounded-[10px] w-full h-[140px]" />
      <AddressCopyBox address={currentAddress} />
    </View>
  )
}

export default CurrentLocationBox
