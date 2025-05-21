
import React from 'react'
import { View, Text } from 'react-native'
import AddressCopyBox from './AddressCopyBox'

const ResidenceBox = () => {
  const residenceAddress = '서울특별시 종로구 세종대로23길 희망아파트 A동 B호'

  return (
    <View className="bg-white rounded-[8px] mt-[24px] px-[16px] pt-[24px] pb-[16px]">
      <Text className="text-[19px] font-bold text-black mb-[12px]">거주지</Text>
      <AddressCopyBox address={residenceAddress} />
    </View>
  )
}

export default ResidenceBox
