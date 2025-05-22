import React from 'react'
import { SafeAreaView, ScrollView, Text, View, TouchableOpacity } from 'react-native'
import NavigationHeader from '@_components/common/NavigationHeader'
import SvgIcon from '@_components/SvgIcon'
import UserAvatarWithStatus from '@_components/main/UserAvatarStatus'
import InfoRowItem from '@_components/sosdetail/InfoRowItem'
import SosDetailBottomBar from '@_components/sosdetail/SosdetailBottomBar'
import SectionGray from '@_components/common/SectionGray'
import TimelineListBox from '@_components/sosdetail/Timelinelistbox'
import EmergencyContactListBox from '@_components/common/EmergencyContactlistbox'
import RequestInfoBox from '@_components/sosdetail/RequestInfo'
import { MemoList, ContactList, TimelineData, TimelineItem, ContactItem } from '@_types/SosDetail'
import UserCard from '@_components/common/UserCard'
const SosDetailScreen = ({ navigation }: { navigation: any }) => {
    const timelineData: TimelineItem[] = TimelineData

    const memoList = MemoList

    const contactList: ContactItem[] = ContactList

    return (
        <SafeAreaView className="flex-1 bg-white">

            <NavigationHeader
                title="SOS 요청 상세정보"
                type="onlyMenu"
                onMenuPress={() => {
                    navigation.navigate('Sidebar')
                }}
            />

            <ScrollView className="flex-1 bg-gray5 px-4 mb-[72px]">

                <View className="bg-white rounded-[8px] px-[16px] pt-[20px] pb-[24px] mt-6 mx-3 shadow-sm shadow-black/5">
                    <View className="flex-row items-start">
                        <UserAvatarWithStatus
                            imageSource={require('@_assets/images/img_user_ex_01.png')}
                            connected={true}
                        />
                        <View className="ml-4">
                            <View className="flex-row items-center">

                                <Text className="text-[21px] leading-[31.5px] font-bold text-gray90">홍길동</Text>
                                <Text className="ml-2 text-[12px] text-gray50">접속중</Text>
                            </View>
                            <Text className="mt-[6px] text-[15px] leading-[22.5px] text-gray90">010-1234-5678</Text>
                        </View>
                    </View>
                    <View className="h-[1px] bg-gray20 my-6" />
                    <InfoRowItem icon="Clock" label="마지막 접속시간" value="48시간 전" />
                    <InfoRowItem icon="Battery0Off" label="배터리 상태" value="0%" />
                    <InfoRowItem icon="GlobeGray" label="인터넷 접속 상태" value="미접속" />
                </View>


                <RequestInfoBox
                    datetime="2024.12.31(월) 오후 02:22"
                    location="인천 서구 도움로 42 행복아파트 123동 45호"
                />

                <TimelineListBox timelineData={timelineData} />
                <SectionGray title="메모" memoList={memoList} />
                <EmergencyContactListBox contactList={contactList} />
            </ScrollView>

            <SosDetailBottomBar phoneNumber={'01012345678'} />
        </SafeAreaView>
    )
}


export default SosDetailScreen