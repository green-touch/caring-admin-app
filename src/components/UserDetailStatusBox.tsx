import React from 'react'
import { View, Text } from 'react-native'
import SvgIcon from '@_components/SvgIcon'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import { UserDetailStatusBoxProps } from '@_types/UserList'

const UserDetailStatusBox = ({ connected, status, batteryLevel, shadowStyle }: UserDetailStatusBoxProps) => {
  return (
    <View className="w-full flex-row mt-4 gap-[12px]">
   
      <View className="flex-1 flex-col gap-y-[16px]">
     
        <View
          style={{
            ...shadowStyle,
            backgroundColor: connected ? '#FFFFFF' : '#F5F5F5',
          }}
          className="h-[86px] border-[2px] border-gray5 rounded-[8px] px-[12px] pt-[8px] pb-[8px]"
        >
          <View className="flex-row items-center gap-[4px]">
            <View className="w-[24px] h-[24px] rounded-[4px] bg-white items-center justify-center">
              <SvgIcon name={connected ? 'GlobeOn' : 'GlobeGray'} size={18} />
            </View>
            <Text className="text-[13px] text-[#1D1D1D]">인터넷 연결</Text>
          </View>
          <Text
            className="text-[15px] font-bold mt-[6px]"
            style={{ color: connected ? '#1D1D1D' : '#8E8E8E' }}
          >
            {connected ? 'ON' : 'OFF'}
          </Text>
        </View>

        <View
          style={{
            ...shadowStyle,
            backgroundColor: status.bgcolor,
          }}
          className="h-[86px] border-[2px] border-gray5 rounded-[8px] px-[12px] pt-[8px] pb-[8px]"
        >
          <View className="flex-row items-center gap-[4px]">
            <View className="w-[24px] h-[24px] rounded-[4px] bg-white items-center justify-center">
              <SvgIcon name={status.boxtimeicon as any} size={18} color="#155615" />
            </View>
            <Text className="text-[13px] text-gray90">접속시간</Text>
          </View>
          <Text className="text-[15px] font-bold mt-[6px]" style={{ color: status.boxtextcolor }}>
            {status.screenOffDuration}
          </Text>
        </View>
      </View>

      <View
        style={{
          ...shadowStyle,
          backgroundColor: status.bgcolor,
        }}
        className="flex-1 h-[188px] border-[2px] border-gray5 rounded-[8px] px-[12px] pt-[8px]"
      >
        <View className="flex-row items-center gap-[4px]">
          <View className="w-[24px] h-[24px] rounded-[4px] bg-white items-center justify-center">
            <SvgIcon name={status.boxbatteryicon as any} size={18} color="#155615" />
          </View>
          <Text className="text-[13px] text-gray90">배터리</Text>
        </View>
        <Text
          className="text-[15px] font-bold mt-[6px] mb-2"
          style={{ color: status.boxtextcolor }}
        >
          {status.batterytext}
        </Text>
        <View className="items-center mt-5">
          <AnimatedCircularProgress
            size={80}
            width={10}
            fill={batteryLevel}
            tintColor={status.ringFill}
            backgroundColor={status.ringBg}
            rotation={0}
            lineCap="round"
          >
            {() => (
              <Text style={{ color: status.ringText }} className="text-[16px] font-bold">
                {`${batteryLevel}%`}
              </Text>
            )}
          </AnimatedCircularProgress>
        </View>
      </View>
    </View>
  )
}

export default UserDetailStatusBox
