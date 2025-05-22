import React from 'react'
import { SafeAreaView, ScrollView, Text, View, TouchableOpacity } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import NavigationHeader from '@_components/common/NavigationHeader'
import SvgIcon from '@_components/SvgIcon'
import SectionGray from '@_components/common/SectionGray'
import UserCard from '@_components/common/UserCard'
import EmergencyContactListBox from '@_components/common/EmergencyContactlistbox'
import { MemoList, ContactList } from '@_types/SosDetail'
import UserDetailStatusBox from '@_components/UserDetailStatusBox'
import type { UserStatusMeta } from '@_types/UserList'

const UserDetail = ({ navigation }: { navigation: any }) => {
  const route = useRoute()
  const parentNavigation = useNavigation()
  const { name, connected, imageSource } = route.params as {
    name: string
    connected: boolean
    imageSource: any
  }

  const batteryStatus = { level: 18, isCharging: false }
  //임시
  const statusMeta: Record<string, UserStatusMeta & { icon: string; color: string; message: string }> = {
    NORMAL: {
      icon: 'CheckCircle',
      color: '#155615',
      message: '안전한 상태입니다!',
      bgcolor: '#F8F8F8',
      boxtextcolor: '#000000',
      batterytext: '양호',
      boxbatteryicon: 'Battery85Green',
      boxtimeicon: 'ClockGreen',
      ringFill: '#1C711C',
      ringBg: '#F0F0F0',
      ringText: '#1C711C',
      screenOffDuration: '접속중',
    },
    WARNING: {
      icon: 'AlertCircle',
      color: '#6B5900',
      message: '경고 상태입니다!',
      bgcolor: '#FFFBE6',
      boxtextcolor: '#000000',
      batterytext: '경고',
      boxbatteryicon: 'AlertCircle',
      boxtimeicon: 'AlertCircle',
      ringFill: '#B59700',
      ringBg: '#FFFFFF',
      ringText: '#6B5900',
      screenOffDuration: '12시간 전',
    },
    DANGER: {
      icon: 'AlertTriangle',
      color: '#640000',
      message: '위험 상태입니다!',
      bgcolor: '#FDE6E6',
      boxtextcolor: '#830000',
      batterytext: '위험',
      boxbatteryicon: 'AlertTriangle',
      boxtimeicon: 'AlertTriangle',
      ringFill: '#D90000',
      ringBg: '#FBCACA',
      ringText: '#D90000',
      screenOffDuration: '48시간 전',
    },
    OFFLINE: {
      icon: 'grayWifi',
      color: '#1D1D1D',
      message: '오프라인 상태입니다!',
      bgcolor: '#F8F8F8',
      boxtextcolor: '#1D1D1D',
      batterytext: '양호',
      boxbatteryicon: 'Battery75Off',
      boxtimeicon: 'Clock',
      ringFill: '#717171',
      ringBg: '#E5E5E5',
      ringText: '#717171',
      screenOffDuration: '48시간 전',
    },
  }

  const status = statusMeta['DANGER']
  const shadowStyle = {
    shadowColor: '#888888',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.01,
    shadowRadius: 2,
    elevation: 1,
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <NavigationHeader
        title="노인 상세 정보"
        type="withMenu"
        onMenuPress={() => {
          navigation.navigate('Sidebar')
        }}
      />
      <ScrollView className="flex-1 bg-gray5 px-4 ">
        <UserCard name={name} phone="010-1234-5678" connected={connected} imageSource={imageSource} />

        <View className="bg-white rounded-[8px] px-[16px] pt-[20px] pb-[24px] mt-6 mx-3">
          <Text className="text-[19px] leading-[28.5px] font-bold text-gray90">현재 상태</Text>
          <View className="mt-3 flex-row items-center gap-[4px]">
            <SvgIcon name={status.icon as any} size={20} color={status.color} />
            <Text className="text-[15px] font-medium" style={{ color: status.color }}>{status.message}</Text>
          </View>

          <UserDetailStatusBox
            connected={connected}
            status={status}
            batteryLevel={batteryStatus.level}
            shadowStyle={shadowStyle}
          />

          <Text className="mt-4 mb-4 text-[15px] text-gray70 text-center">
            마지막 업데이트 : 2024.12.12 12:33
          </Text>
          <View className="items-center">
            <TouchableOpacity className="w-full px-[16px] h-[50px] rounded-[10px] border border-main900 mt-3 items-center justify-center">
              <Text className="text-[15px] text-main900 font-medium">업데이트 요청하기</Text>
            </TouchableOpacity>
          </View>
        </View>

        <SectionGray title="거주지" memoList={['서울특별시 종로구 세종대로 23길 희망아파트 A동 B호']} />
        <SectionGray title="메모" memoList={MemoList} />
        <EmergencyContactListBox contactList={ContactList} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default UserDetail
