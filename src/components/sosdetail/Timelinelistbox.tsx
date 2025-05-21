// components/common/TimelineList.tsx
import React from 'react'
import { Text, View } from 'react-native'
import SvgIcon from '@_components/SvgIcon'

interface TimelineItem {
  title: string
  time: string
  location: string
}

const TimelineList = ({ timelineData }: { timelineData: TimelineItem[] }) => {
  return (
    <View className="bg-white rounded-[8px] px-[16px] pt-[24px] pb-[24px] mt-4 ">
      <View className="flex-row justify-between items-center mb-10">
        <Text className="text-[19px] font-bold text-black">타임라인</Text>
        <SvgIcon name="Plus" size={20} />
      </View>

      {timelineData.length === 0 ? (
        <View className="w-full bg-gray5 rounded-[10px] px-[16px] py-[24px] items-center justify-center">
          <Text className="text-[15px] text-gray90">타임라인이 설정되지 않았습니다</Text>
        </View>
      ) : (
        <View>
             <View className="mt-[15px]"/>
{timelineData.map((item, index, arr) => (
  <View key={index} className="flex-row relative mb-0 min-h-[120px]">
    <View className="w-[20px] items-center relative">
      <SvgIcon name="CheckedBlue" size={14} />
      {index < arr.length - 1 && (
        <View
          className="absolute h-full left-1/2 -translate-x-1/2 bg-[#3396FF]"
          style={{ width: 2 }}
        />
      )}
    </View>
    <View className="ml-4 flex-1">
      <Text className="text-[17px] font-medium text-black mb-[2px]">{item.title}</Text>
      <View className="flex-row items-center mb-[2px]">
        <SvgIcon name="ClockFilled" size={14} />
        <Text className="ml-2 text-[15px] text-gray70">{item.time}</Text>
      </View>
      <View className="flex-row items-center">
        <SvgIcon name="MapFilled" size={14} />
        <Text className="ml-2 text-[15px] text-gray70">{item.location}</Text>
      </View>
    </View>
  </View>
))}

        </View>
      )}
    </View>
  )
}

export default TimelineList
