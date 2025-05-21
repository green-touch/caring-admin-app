import React from 'react'
import { View, Text, Alert, Image, TouchableOpacity, ScrollView } from 'react-native'
import NavigationHeader from '@_components/common/NavigationHeader'
import SvgIcon from "@_components/SvgIcon"
import AddTimelineBtn from '@_components/common/AddTimelineBtn'
type Props = {
  navigation: any
}

const Sidebar = ({ navigation }: Props) => {
  return (
    <ScrollView className="flex-1 bg-white relative">
      <NavigationHeader title="Sidebar" type="withClose" />


      <View className="absolute top-[230px] left-0 right-0 h-[430px] bg-gray5 z-0" />


      <View className="bg-white px-4 pt-6 pb-2 z-10">
        <View className="flex-row items-center gap-4 mb-4 ml-">
          <Image
            source={require('@_assets/images/img_user_center.png')}
            className="w-[52px] h-[52px] rounded-full bg-[#E4E4E4]"
            resizeMode="cover"
          />
          <View className="ml-1.5">
            <View className="flex-row items-center gap-x-2">
              <Text className="text-[19px] font-bold text-gray100">김철수</Text>
              <Text className="text-[13px] text-gray70">일반 관리자</Text>
            </View>
            <Text className="text-[15px] text-gray90 mt-[3px]">0123456789</Text>
          </View>
        </View>

        <AddTimelineBtn className='mb-4 mt-2' />
      </View>

      <View className="px-4 pt-6 pb-16 space-y-6 z-10">
        <View
          className="bg-white rounded-[8px] p-4 space-y-6 mt-5 mx-3"
          style={{
            shadowColor: '#000',
            shadowOffset: { width: 2, height: 2 },
            shadowOpacity: 0.0015,
            shadowRadius: 2,
            elevation: 0.5,
          }}
        >

          <View>
            <Text className="text-[17px] font-bold text-gray100 mb-5 mt-6">소속</Text>
            <View className="bg-gray5 rounded-[8px] px-4 py-6">
              <Text className="text-[17px] font-medium text-gray90 mb-[3px]">행복복지관</Text>
              <Text className="text-[15px] text-gray70 mt-1">서울 종로구 희망로 희망빌딩</Text>
            </View>
          </View>

          <View>
            <Text className="text-[17px] font-bold text-gray100 mb-5 mt-5">전화번호</Text>
            <View className="bg-gray5 rounded-[8px] px-4 py-6 flex-row gap-x-10">
              <View>
                <Text className="text-[15px] font-medium text-gray90 mb-[3px]">개인</Text>
                <Text className="text-[15px] text-gray90 mt-1">010-1234-5678</Text>
              </View>
              <View className='ml-5'>
                <Text className="text-[15px] font-medium text-gray90 mb-[3px]">업무용</Text>
                <Text className="text-[15px] text-gray90 mt-1">010-4567-8912</Text>
              </View>
            </View>
          </View>


          <View>
            <Text className="text-[17px] font-bold text-gray100 mb-5 mt-5">이메일</Text>
            <View className="bg-gray5 rounded-[8px] px-4 py-6">
              <Text className="text-[15px] text-gray90">caringcenter@gamil.com</Text>
            </View>
          </View>


          <TouchableOpacity
            className="flex-row items-center gap-2 pt-2 mt-6 mb-4"
            onPress={() => {
              navigation.navigate('ResetPassword')
            }}
          >
            <Text className="text-[17px] font-bold text-gray100">비밀번호 변경하기</Text>
            <SvgIcon name="ChevronRightBlack" size={16} />
          </TouchableOpacity>
        </View>
      </View>


      <View className="bg-white items-center pt-19 pb-6 z-10 mt-[-12px]">
        <Text className="text-[15px] text-gray50">로그아웃하기</Text>
      </View>
    </ScrollView>
  )
}

export default Sidebar