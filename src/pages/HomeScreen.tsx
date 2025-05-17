import React from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import NavigationHeader from '@_components/common/NavigationHeader'
import SvgIcon from "@_components/SvgIcon"
import AddTimelineButton from '@_components/main/AddTimelineBtn'
import StatusBadge from '@_components/main/StatusBadge'
import UserStatusListItem from '@_components/main/UserStatusListitem'
const HomeScreen = ({ navigation }: { navigation: any }) => {
  const userList = [
    { name: '홍길동', connected: true, status: '정상', battery: '경고' },
    { name: '김영희', connected: false, status: '정상', battery: '경고' },
    { name: '이름', connected: false, status: '정상', battery: '정상' },
    { name: '이름', connected: true, status: '정상', battery: '정상' },
    { name: '이름', connected: true, status: '정상', battery: '경고' },
    { name: '이름', connected: false, status: '정상', battery: '정상' },
    { name: '이름', connected: true, status: '정상', battery: '경고' },
    { name: '이름', connected: false, status: '정상', battery: '정상' },
    { name: '이름', connected: true, status: '정상', battery: '경고' },
    { name: '이름', connected: false, status: '정상', battery: '정상' },
  ]

  return (
    <SafeAreaView className="flex-1 bg-white">
      <NavigationHeader
        title="홈"
        type="withLogo"
        onMenuPress={() => navigation.navigate('Sidebar')}
      />

      <View className="w-full bg-main50 py-2 px-[107px] flex-row items-center justify-center gap-1">
        <SvgIcon name="HouseHeartBlue" size={15} />
        <Text className="text-sm text-main700">
          <Text className="font-bold">행복 복지관</Text> 소속
        </Text>
      </View>

      <View className="w-full bg-gray5 px-4 py-4">
        <View className="bg-gray5 rounded-bl-[8px] rounded-br-[8px] px-4 py-3">
          <View className="flex-row items-center gap-x-1 mb-1">
            <Text className="text-[21px] leading-[32px] font-bold text-main600">현재 10명</Text>
            <Text className="text-[21px] leading-[32px] font-medium text-gray90">을 담당 중입니다!</Text>
          </View>
          <Text className="text-[15px] leading-[23px] text-gray70">나의 네트워크 상태 : 양호</Text>
        </View>
      </View>

      <View className="flex-1 bg-gray5 px-4">
        <View className="mt-1 mb-4">
          <AddTimelineButton onPress={() => navigation.navigate('timeline')} />
        </View>

        <View className="flex-1 bg-white rounded-[8px] px-4 pt-6 pb-4 shadow-sm shadow-black/5 mt-10 mx-3">
          <Text className="text-base font-bold mb-4 mt-2 text-[18px]">상태 리스트</Text>

          <ScrollView contentContainerStyle={{ paddingBottom: 24 }} showsVerticalScrollIndicator={false}>
            {userList.map((user, index) => {
              const imageSource =
                index === 0
                  ? require('@_assets/images/img_user_ex_01.png')
                  : index === 1
                    ? require('@_assets/images/img_user_ex_02.png')
                    : require('@_assets/images/img_user_empty.png')

              return (
                <UserStatusListItem
                  key={index}
                  imageSource={imageSource}
                  name={user.name}
                  connected={user.connected}
                  status={user.status}
                  battery={user.battery}
                  isFirst={index === 0}
                />
              )
            })}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
