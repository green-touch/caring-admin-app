import React from 'react'
import { View, Text, Image } from 'react-native'
import StatusBadge from '@_components/main/StatusBadge'

interface UserInfoCardProps {
  name: string
  phone: string
  lastAccessTime: string
  battery: string
  memoList: string[]
  lastUpdateTime: string
}

const UserInfoCard = ({
  name,
  phone,
  lastAccessTime,
  battery,
  memoList,
  lastUpdateTime,
}: UserInfoCardProps) => {
  return (
    <View className="bg-white rounded-[8px] px-[16px] pt-[24px] pb-[24px] mt-4 ">
      <View className="flex-row gap-[16px] items-center justify-center">
        <Image
          source={require('@_assets/images/img_user_ex_01.png')}
          className="w-[76px] h-[76px] rounded-full bg-gray20"
        />
        <View className="items-center">
          <View className="flex-row items-center gap-[8px]">
            <Text className="text-[21px] font-bold text-gray90">{name}</Text>
            <StatusBadge type="danger" label="위험" />
          </View>
          <Text className="text-[15px] text-gray70 leading-[22.5px] mt-[4px]">{phone}</Text>
        </View>
      </View>

      <View className="flex-row justify-between w-full mt-[24px] mb-5 border-gray10 pt-[16px]">
        <View className="flex-1 items-center">
          <Text className="text-[15px] text-black">마지막 접속시간</Text>
          <Text className="text-[19px] font-bold text-red800 mt-[5px]">{lastAccessTime}</Text>
        </View>
        <View className="w-[1px] bg-gray30 mx-[16px]" />
        <View className="flex-1 items-center">
          <Text className="text-[15px] text-black">배터리 상태</Text>
          <Text className="text-[19px] font-bold text-red800 mt-[5px]">{battery}</Text>
        </View>
      </View>

      <View className="w-full mt-[16px]">
        <View className="bg-gray5 rounded-[8px] px-[16px] py-[16px]">
          {memoList.map((memo, idx) => (
            <Text
              key={idx}
              className={`text-[15px] text-black ${idx < memoList.length - 1 ? 'mb-[10px]' : ''}`}
            >
              • {memo}
            </Text>
          ))}
        </View>
        <Text className="text-[13px] text-gray50 text-center mt-[16px]">
          마지막 업데이트 · {lastUpdateTime}
        </Text>
      </View>
    </View>
  )
}

export default UserInfoCard
