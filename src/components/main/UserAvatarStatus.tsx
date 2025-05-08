import React from 'react'
import { View, Image } from 'react-native'

interface UserAvatarProps {
  imageSource: any
  connected: boolean
}

const UserAvatarWithStatus = ({ imageSource, connected }: UserAvatarProps) => {
  return (
    <View className="relative w-[54px] h-[54px] mt-1">
      <Image
        source={imageSource}
        className="w-[54px] h-[54px] rounded-full bg-[#E4E4E4]"
        resizeMode="cover"
      />
      <View
        className="absolute top-0 left-0 w-4 h-4 rounded-full border border-white z-10"
        style={{ backgroundColor: connected ? '#1C711C' : '#555555' }}
      />
    </View>
  )
}

export default UserAvatarWithStatus
