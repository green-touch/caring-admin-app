import React from 'react'
import { SafeAreaView, ScrollView, Text, View, TouchableOpacity, Image, Clipboard } from 'react-native'
import NavigationHeader from '@_components/common/NavigationHeader'
import SvgIcon from '@_components/SvgIcon'
import LinearGradient from 'react-native-linear-gradient'
import SosDetailBottomBar from '@_components/sosdetail/SosdetailBottomBar'
import StatusBadge from '@_components/main/StatusBadge'
import TimelineListBox from '@_components/sosdetail/Timelinelistbox'
import EmergencyContactListBox from '@_components/sosdetail/EmergencyContactlistbox'
import ResidenceBox from '@_components/sosdetail/ResidenceBox'
import CurrentLocationBox from '@_components/sosdetail/currentLocationBox'
import SosRequestHeader from '@_components/sosdetail/SosRequesHeader'
import UserInfoCard from '@_components/sosdetail/UserInfoCardEmergency'
import { MemoList, TimelineData, TimelineItem, ContactItem, ContactList } from '@_types/SosDetail'
const SosEmergencyDetailScreen = ({ navigation }: { navigation: any }) => {
    
    const memoList = MemoList
    const userAddress = ['서울특별시 종로구 세종대로23길 희망아파트 A동 B호']

    const timelineData: TimelineItem[] = []
    const contactList: ContactItem[] = ContactList

    const handleCopy = () => {
        Clipboard.setString(userAddress[0])
    }

    return (
        <SafeAreaView className="flex-1 bg-white">
            <NavigationHeader
                title="SOS 요청"
                type="onlyMenu"
                onMenuPress={() => {
                    navigation.navigate('Sidebar')
                }}
            />

            <ScrollView className=" bg-gray5 " contentContainerStyle={{ paddingBottom: 125 }}>

                <SosRequestHeader requestTime="2024.12.31 PM 2:22" />



                <View className="flex-1 bg-gray5 px-4 mx-3" >
                    <UserInfoCard
                        name="홍길동"
                        phone="010-1234-5678"
                        lastAccessTime="48시간 전"
                        battery="0%"
                        memoList={memoList}
                        lastUpdateTime="2024.12.12 12:33"
                    />

                    <View className="mt-[24px] ">
                        <TimelineListBox timelineData={timelineData} />
                    </View>

                    <CurrentLocationBox />
                    <ResidenceBox />


                    <View className="mt-[24px]">
                        <EmergencyContactListBox contactList={contactList} />
                    </View>

                </View>
            </ScrollView>

            <SosDetailBottomBar phoneNumber={'01012345678'} />
        </SafeAreaView>
    )
}

export default SosEmergencyDetailScreen