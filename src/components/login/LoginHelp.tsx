import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import SvgIcon from '@_components/SvgIcon'

const CautionList = [
    '• B기관에서 배정받은 사번이 없는 경우B 기관 담당자에게 요청해 주세요',
    '• B비밀번호를 분실한 경우B 기관 담당자에게 확인 요청해 주세요',
];

const LoginHelp = () => {
    return (
        <View className='flex flex-row items-center justify-center bg-gray5 rounded-lg py-6 px-4 mt-8'>
            <View className='flex-1 flex-col items-start justify-start gap-1'>
                {CautionList.map((line, i) => {
                    const parts = line.split(/B(.*?)B/);
                    return (
                        <Text key={i} className="text-base text-gray90 flex flex-row flex-wrap px-4">
                            {parts.map((part, idx) => {
                                const isHighlighted = idx % 2 === 1;
                                return (
                                    <Text
                                        key={idx}
                                        className={isHighlighted ? 'text-main700 font-bold' : 'text-gray90'}
                                    >
                                        {part}
                                    </Text>
                                );
                            })}
                        </Text>
                    );
                })}
            </View>
        </View>
    )
}

export default LoginHelp