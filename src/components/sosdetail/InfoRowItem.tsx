import React from 'react'
import { View, Text } from 'react-native'
import SvgIcon from '@_components/SvgIcon'
import { IconName } from '@_types/icon'

interface Props {
  icon: IconName
  label: string
  value: string
}

const InfoRowItem = ({ icon, label, value }: Props) => {
  return (
    <View className="flex-row items-center justify-between w-full mb-6">
      <View className="flex-row items-center">
        <SvgIcon name={icon} size={20} />
        <Text className="ml-2 text-[14px] text-gray70">{label}</Text>
      </View>
      <Text className="text-[14px] font-semibold text-gray90">{value}</Text>
    </View>
  )
}

export default InfoRowItem
