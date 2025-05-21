import React from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import NavigationHeader from '@_components/common/NavigationHeader'
import UserStatusListItem from '@_components/common/UserStatusListitem'

const ElderListScreen = ({ navigation }: { navigation: any }) => {
  const userList = [
    { name: '홍길동', connected: true, status: '정상', battery: '경고' },
    { name: '김영희', connected: false, status: '경고', battery: '경고' },
    { name: '이름1', connected: false, status: '정상', battery: '정상' },
    { name: '이름2', connected: true, status: '정상', battery: '정상' },
    { name: '이름3', connected: true, status: '경고', battery: '경고' },
    { name: '이름4', connected: false, status: '정상', battery: '정상' },
    { name: '이름5', connected: true, status: '정상', battery: '경고' },
    { name: '이름6', connected: false, status: '정상', battery: '정상' },
    { name: '이름7', connected: true, status: '위험', battery: '경고' },
    { name: '이름8', connected: false, status: '정상', battery: '정상' },
  ]

  const statusCount = {
    정상: userList.filter((u) => u.status === '정상').length,
    경고: userList.filter((u) => u.status === '경고').length,
    위험: userList.filter((u) => u.status === '위험').length,
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <NavigationHeader
          title="노인 리스트"
          type="onlyMenu"
          onMenuPress={() => {
            navigation.navigate('Sidebar')
          }}
        />

        <View className="w-full bg-gray5 px-4 py-4">
          <View className="bg-gray5 rounded-bl-[8px] rounded-br-[8px] px-4 py-3">
            <View className="flex-row items-center gap-x-1 mb-1">
              <Text className="text-[19px] leading-[32px] text-gray70">내가 관리하는 인원</Text>
            </View>
            <Text className="text-[24px] leading-[32px] font-bold text-main800">총 {userList.length}명</Text>

            <View className="flex-row justify-between mt-3 gap-[12px]">
              {(['정상', '경고', '위험'] as const).map((type) => {
                const textColor = '#1D1D1D'
                const countColor =
                  type === '정상'
                    ? '#047857'
                    : type === '경고'
                      ? '#B45309'
                      : '#8E8E8E'

                return (
                  <View
                    key={type}
                    className="bg-white rounded-[8px] px-[20px] py-[16px]"
                    style={{
                      flex: 1,
                      height: 80,
                      shadowColor: '#000',
                      shadowOpacity: 0.02,
                      shadowRadius: 6,
                      shadowOffset: { width: 2, height: 2 },
                    }}
                  >
                    <Text
                      className="text-[15px] leading-[22.5px] text-center"
                      style={{ color: textColor }}
                    >
                      {type}
                    </Text>
                    <Text
                      className="text-[18px] leading-[24px] font-bold text-center mt-[4px]"
                      style={{ color: countColor }}
                    >
                      {statusCount[type]}
                    </Text>
                  </View>
                )
              })}
            </View>
          </View>
        </View>

        <View className="flex-1 bg-gray5 px-4">
          <View className="mb-1" />
          <View className="flex-1 bg-white rounded-[8px] px-4 pt-3 pb-4 shadow-sm shadow-black/5 mt-1 mx-3">
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
                  onPress={() =>
                    navigation.navigate('User', {
                      name: user.name,
                      connected: user.connected,
                      imageSource: imageSource,
                    })
                  }
                />
              )
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ElderListScreen