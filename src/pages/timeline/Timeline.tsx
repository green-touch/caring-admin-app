import React, { useEffect, useRef } from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { useNavigation, useRoute, useIsFocused } from '@react-navigation/native';
import NavigationHeader from '@_components/common/NavigationHeader';
import InfoInput, { InfoTextarea } from '@_components/login/InfoInput';
import LoginButton from '@_components/login/LoginButton';
import SvgIcon from '@_components/SvgIcon';
import type { TimelineParams, TimelineTarget, TimelineLocation } from '@_types/timeline';
import PlatformSpecificButton from '@_components/PlatformSpecificButton';
import { useTimelineStore } from '../../zustand/store';

const CATEGORY_LIST = [
    { key: 'health', label: '긴급 요청 확인' },
    { key: 'sos', label: '119 이송 확인' },
    { key: 'guardian', label: '보호자 연결 확인' },
];

const RECENT_SOS = [
    { id: 1, name: '홍길동', image: null, status: '진행중', date: '2025.01.23' },
    // ...
];

const Divider = () => {
    return (
        <View className='w-full h-3 bg-gray5'></View>
    )
}

const getStatusColor = (status: string) => {
    if (status === '진행중') return 'text-main900';
    if (status === '처리완료') return 'text-gray60';
    return 'text-gray60';
};

const renderAvatar = (image: any) => (
    image ? (
        <Image source={image} className="w-12 h-12 rounded-full mr-4" />
    ) : (
        <SvgIcon name="User_On" size={48} className="mr-4" />
    )
);

const Timeline = () => {
    const navigation = useNavigation<any>();
    const route = useRoute();
    const isFocused = useIsFocused();
    const isFirstRender = useRef(true);

    const {
        title, setTitle,
        category, setCategory,
        target, setTarget,
        date, setDate,
        location, setLocation,
        content, setContent,
        reset
    } = useTimelineStore();

    useEffect(() => {
        if (isFirstRender.current) {
            reset();
            isFirstRender.current = false;
        }
    }, []);

    useEffect(() => {
        if (!isFocused) return;
        const params = route.params as TimelineParams;
        if (params?.target) setTarget(params.target);
        if (params?.date) setDate(params.date);
        if (params?.location) setLocation(params.location);
    }, [isFocused, route.params]);

    const handleCategory = (key: string) => setCategory(key);

    const handleSubmit = () => {
        const data = { title, category, target, date, location, content };
        console.log('제출 데이터:', data);
        reset();
    };

    return (
        <SafeAreaView className="flex-1 bg-white">
            <NavigationHeader
                title="타임라인 추가"
                type="withMenu"
            />
            <ScrollView className="flex-1 px-4 py-6">
                <Text className="text-xl text-gray100 font-bold mb-2">타임라인 제목</Text>
                <InfoInput
                    placeholder="제목(직접 작성하기)"
                    value={title}
                    handleInput={setTitle}
                />

                <ScrollView
                    className="mt-6 mb-6 overflow-x-auto "
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    contentContainerStyle={{ flexDirection: 'row', justifyContent: 'space-between' }}
                >
                    {CATEGORY_LIST.map((cat, index) => (
                        <TouchableOpacity
                            key={cat.key}
                            className={`flex-1 py-3 px-3 items-center border-[1px] rounded-[25px] ${index === 0 ? 'ml-0' : 'ml-3'} ${category === cat.key ? 'bg-main50 border-main500' : 'bg-white border-gray30'}`}
                            onPress={() => handleCategory(cat.key)}
                        >
                            <Text className={`text-base ${category === cat.key ? 'text-main500' : 'text-gray90'}`}>{cat.label}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                <Divider />
                <View className='flex flex-col w-full'>
                    <Text className='text-xl text-gray100 font-bold pt-6'>타임라인 대상</Text>
                    {
                        target && target.name ? (
                            (() => {
                                const info = RECENT_SOS.find(e => e.name === target.name);
                                return (
                                    <View className="flex-row items-center py-3">
                                        {renderAvatar(info?.image)}
                                        <View className="flex-1 ml-4">
                                            <View className="flex-row items-center mb-1">
                                                <Text className="text-lg font-bold text-gray100 mr-2">{target.name}</Text>
                                                {target.status && (
                                                    <Text className={`text-sm font-bold ${getStatusColor(target.status)}`}>{target.status}</Text>
                                                )}
                                            </View>
                                            {target.date && (
                                                <Text className="text-sm text-gray60">요청 날짜 : {target.date}</Text>
                                            )}
                                        </View>
                                    </View>
                                );
                            })()
                        ) : (
                            <View className='w-full bg-gray5 rounded-lg py-6 px-4 mt-4'>
                                <Text className='text-[15px] w-full text-center font-normal text-[#1D1D1D]'>타임라인 대상이 설정되지 않았습니다</Text>
                            </View>)
                    }
                    <TouchableOpacity>
                        <PlatformSpecificButton
                            style='w-full border-[1px] border-main900 py-3 rounded-lg mb-6 mt-5'
                            onPress={() => navigation.navigate('timeline/select/target')}>
                            <Text className='text-main900 font-medium text-sm w-full text-center'>타임라인 대상 설정하기</Text>
                        </PlatformSpecificButton>
                    </TouchableOpacity>
                </View>
                <Divider />
                <View className='flex flex-col gap-4 w-full'>
                    <Text className='text-xl text-gray100 font-bold pt-6'>타임라인 일시 및 장소</Text>
                    {
                        date ? (
                            <View className='w-full py-6'>
                                <Text className='text-black text-[17px] font-medium w-full text-left mb-1'>일시</Text>
                                <Text className='text-gray100 text-sm'>{date}</Text>
                            </View>
                        ) : (
                            <View className='w-full bg-gray5 rounded-lg py-6 px-4 mt-6'>
                                <Text className='text-[15px] w-full text-center font-normal text-[#1D1D1D]'>타임라인 일시가 설정되지 않았습니다</Text>
                            </View>
                        )
                    }
                    <PlatformSpecificButton
                        style='w-full border-[1px] border-main900 py-3 rounded-lg mt-'
                        onPress={() => navigation.navigate('timeline/select/date')}>
                        <Text className='text-main900 font-medium text-sm  w-full text-center'>날짜 설정</Text>
                    </PlatformSpecificButton>
                    <View className='border-[0.5px] border-gray10 w-full my-6'></View>
                    {
                        location && location.name ? (
                            <View className='w-full'>
                                <Text className='text-black text-[17px] font-medium w-full text-left mb-1'>장소</Text>
                                <Text className='text-gray100 text-sm'>{location.name}</Text>
                            </View>
                        ) : (
                            <View className='w-full bg-gray5 rounded-lg py-6 px-4'>
                                <Text className='text-[15px] w-full text-center font-normal text-[#1D1D1D]'>타임라인 장소가 설정되지 않았습니다</Text>
                            </View>
                        )
                    }
                    <PlatformSpecificButton
                        style='w-full border-[1px] border-main900 py-3 rounded-lg mb-6'
                        onPress={() => navigation.navigate('timeline/select/location')}>
                        <Text className='text-main900 font-medium text-sm  w-full text-center'>장소 설정</Text>
                    </PlatformSpecificButton>
                </View>
                <Text className='text-xl text-gray100 font-bold pt-9 mb-4'>내용</Text>
                <InfoTextarea
                    placeholder="세부 내용 (500자 내)"
                    value={content}
                    handleInput={setContent}
                />
                <LoginButton
                    buttonTitle="추가하기"
                    disabled={!!(title && category && target && date && location && content)}
                    onPress={handleSubmit}
                />
                <View className='h-20'></View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Timeline;
