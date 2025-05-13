// components/common/AddressCopyBox.tsx
import React from 'react'
import { View, Text, TouchableOpacity, Clipboard } from 'react-native'
import SvgIcon from '@_components/SvgIcon'

interface AddressCopyBoxProps {
  address: string
}

const AddressCopyBox = ({ address }: AddressCopyBoxProps) => {
  const handleCopy = () => {
    Clipboard.setString(address)
  }

  return (
    <View className="bg-gray5 rounded-[10px] px-[12px] py-[10px] flex-row justify-between items-center mt-[16px]">
      <Text className="text-[15px] text-black flex-1 leading-[22.5px]">
        {address}
      </Text>
      <TouchableOpacity onPress={handleCopy}>
        <SvgIcon name="Copy" size={18} />
      </TouchableOpacity>
    </View>
  )
}

export default AddressCopyBox
