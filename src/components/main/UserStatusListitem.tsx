import React from 'react'
import { View, Text } from 'react-native'
import SvgIcon from '@_components/SvgIcon'
import StatusBadge from '@_components/main/StatusBadge'
import UserAvatarWithStatus from './UserAvatarStatus'

interface Props {
  imageSource: any
  name: string
  connected: boolean
  status: string
  battery: string
  isFirst?: boolean
}

const UserStatusListItem = ({
  imageSource,
  name,
  connected,
  status,
  battery,
  isFirst = false,
}: Props) => {
  return (
    <View className={`relative ${isFirst ? 'mt-[20px]' : 'mt-[30px]'}`}>
      <View className="flex-row items-start pr-8">
        <UserAvatarWithStatus imageSource={imageSource} connected={connected} />

        <View className="flex-1 ml-4">
          <View className="flex-row gap-2 items-center">
            <Text className="font-bold text-[15px]">{name}</Text>
            <Text className="text-[12px] text-gray50">{connected ? '접속중' : '미접속'}</Text>
          </View>

          <View className="mt-2">
            <View className="flex-row items-center mb-2">
              <Text className="text-[14px] text-gray90 mr-1">상태 :</Text>
              <StatusBadge type="status" label={status} />
            </View>

            <View className="flex-row items-center">
              <Text className="text-[14px] text-gray90 mr-1">배터리 :</Text>
              <StatusBadge type="battery" label={battery} />
            </View>
          </View>
        </View>
      </View>

      <View className="absolute right-0 top-1/2 -translate-y-1/2">
        <SvgIcon name="ChevronRight" size={32} />
      </View>
    </View>
  )
}

export default UserStatusListItem
