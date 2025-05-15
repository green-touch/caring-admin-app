import React from 'react'
import { Text, View } from 'react-native'

const SectionGray = ({ title, memoList }: { title: string; memoList: string[] }) => {
  return (
    <View className="bg-white rounded-[10px] px-[16px] pt-[24px] pb-[24px] mt-4 ">
      <Text className="text-[19px] font-bold text-black mb-4">{title}</Text>
      {memoList.length === 0 ? (
        <View className="w-full bg-gray5 rounded-[10px] px-[16px] py-[24px] items-center justify-center">
          <Text className="text-[15px] text-gray90">{title} 정보가 없습니다</Text>
        </View>
      ) : (
        <View className="bg-gray5 rounded-[10px] p-4">
          {memoList.map((memo, idx) => (
            <Text key={idx} className="text-[15px] text-black leading-[22.5px] mb-[12px]">
              • {memo}
            </Text>
          ))}
        </View>
      )}
    </View>
  )
}

export default SectionGray
