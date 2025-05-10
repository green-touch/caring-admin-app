import React from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import { InfoType } from '@_types/findInfo';

import NavigationHeader from '@_components/common/NavigationHeader'
import SvgIcon from '@_components/SvgIcon';
import LoginButton from '@_components/login/LoginButton';

interface ResultConfigItem {
    title: string;
    subTitle: string[];
    resultDetail: string[];
}

const resultConfig: Record<InfoType, ResultConfigItem> = {
    'id': {
        title: '회원번호 찾기',
        subTitle: ['회원번호 찾기가', '완료되었습니다.'],
        resultDetail: ['의 회원번호'],
    },
    'password': {
        title: '비밀번호 찾기',
        subTitle: ['비밀번호가 성공적으로', '변경되었습니다.'],
        resultDetail: ['로그인 화면으로 돌아가', '새로운 비밀번호로 로그인해 주세요.']
    }
}
const HelpResult = ({ navigation }: { navigation: any }) => {

    const mode = "password";


    return (
        <SafeAreaView className="flex-1 w-full bg-gray-100">
            <NavigationHeader title={resultConfig[mode].title} />
            <View className='w-full h-full flex bg-white items-center justify-start pt-[30px] px-4'>
                <SvgIcon name="CheckedBlue" />
                <Text className='text-2xl font-bold text-gray90 text-center mt-2'>{resultConfig[mode].subTitle.join('\n')}</Text>
                <View className={`flex flex-col w-full items-center justify-center mt-6 mb-8 bg-gray5 pt-6`}>
                    {/*추후 회원 조회 API로 회원번호 조회가 가능해지면 조회 추가*/}
                    <Text className='text-xl text-gray90 text-center w-full'>{resultConfig[mode].resultDetail.join('\n')}</Text>
                </View>
                <LoginButton buttonTitle='로그인 하러가기' onPress={() => {
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Login' }],
                    });
                }} />
            </View>
        </SafeAreaView>
    )
}

export default HelpResult