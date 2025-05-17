import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import NavigationHeader from '@_components/common/NavigationHeader';
import InfoInput from '@_components/login/InfoInput';
import LoginButton from '@_components/login/LoginButton';
import SvgIcon from '@_components/SvgIcon';
import { useTimelineStore } from '../../zustand/store';
import SearchInput from '@_components/common/SearchInput';

// 더미 데이터 (이미지, 상태, 날짜 포함)
const RECENT_SOS = [
    { id: 1, name: '홍길동', image: null, status: '진행중', date: '2025.01.23' },
    { id: 2, name: '이름', image: null, status: '진행중', date: '2025.01.23' },
    { id: 3, name: '이름', image: null, status: '처리완료', date: '2025.01.23' },
];
const ELDER_LIST = [
    { id: 1, name: '홍길동', image: null, date: '2025.01.23' },
    { id: 2, name: '이름', image: null, date: '2025.01.23' },
    { id: 3, name: '이름', image: null, date: '2025.01.23' },
];

const TargetSelect = () => {
    const navigation = useNavigation<any>();
    const isFocused = useIsFocused();
    const [search, setSearch] = useState('');
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const { target, setTarget } = useTimelineStore();

    useEffect(() => {
        if (!isFocused) return;
        setSelectedId(null);
    }, [isFocused]);

    // 필터링
    const filteredList = ELDER_LIST.filter((elder) => elder.name.includes(search));

    // 선택 핸들러
    const handleSelect = (id: number) => setSelectedId(id);

    // 최초 마운트 시 이전 선택값 반영
    useEffect(() => {
        if (target) {
            const found = [...RECENT_SOS, ...ELDER_LIST].find((e) => e.name === target.name);
            if (found) setSelectedId(found.id);
        }
    }, [target]);

    // 설정하기 버튼
    const handleSubmit = () => {
        const selected = [...RECENT_SOS, ...ELDER_LIST].find((e) => e.id === selectedId);
        if (selected) {
            setTarget({ name: selected.name, image: selected.image, status: typeof (selected as any).status === 'string' ? (selected as any).status : undefined, date: selected.date });
            navigation.goBack();
        }
    };

    // 상태 색상
    const getStatusColor = (status: string) => {
        if (status === '진행중') return 'text-main900';
        if (status === '처리완료') return 'text-gray60';
        return 'text-gray60';
    };

    // 체크박스 렌더
    const renderCheck = (checked: boolean) => (
        <View className={`w-7 h-7 rounded-full items-center justify-center border-[1px] border-gray40 ${checked ? 'border-[1px] border-gray40' : ""}`}>
            {checked && <SvgIcon name="RadioChecked" />}
        </View>
    );

    // 아바타 렌더
    const renderAvatar = (image: any) => (
        image ? (
            <Image source={image} className="w-12 h-12 rounded-full mr-4" />
        ) : (
            <SvgIcon name="User_On" size={48} className="mr-4" />
        )
    );

    return (
        <View className="flex-1 bg-white">
            <NavigationHeader title="타임라인 대상" type="withMenu" />
            <View className="flex-1 px-4 pt-2 pb-0 bg-white">
                <SearchInput
                    placeholder="노인 이름 검색"
                    value={search}
                    onChange={setSearch}
                    style={{ marginBottom: 16, marginTop: 8 }}
                />
                <ScrollView className="flex-1">
                    <Text className="text-base text-gray100 font-[15px] mb-2 mt-3">최근 긴급 SOS 요청자</Text>
                    {RECENT_SOS.map((elder) => (
                        <TouchableOpacity
                            key={elder.id}
                            className="flex-row items-center py-3"
                            onPress={() => handleSelect(elder.id)}
                            activeOpacity={0.8}
                        >
                            {renderAvatar(elder.image)}
                            <View className="flex-1 ml-4">
                                <View className="flex-row items-center mb-1">
                                    <Text className="text-lg font-bold text-gray100 mr-2">{elder.name}</Text>
                                    <Text className={`text-sm font-bold ${getStatusColor(elder.status)}`}>{elder.status}</Text>
                                </View>
                                <Text className="text-sm text-gray60">요청 날짜 : {elder.date}</Text>
                            </View>
                            {renderCheck(selectedId === elder.id)}
                        </TouchableOpacity>
                    ))}
                    {/* 노인 리스트 */}
                    <Text className="text-base text-gray90 font-medium mt-6 mb-2">노인 리스트</Text>

                    {filteredList.map((elder) => (
                        <TouchableOpacity
                            key={elder.id}
                            className="flex-row items-center py-3"
                            onPress={() => handleSelect(elder.id)}
                            activeOpacity={0.8}
                        >
                            {renderAvatar(elder.image)}
                            <View className="flex-1 ml-4">
                                <Text className="text-lg font-bold text-gray100 mb-1">{elder.name}</Text>
                                <Text className="text-sm text-gray60">요청 날짜 : {elder.date}</Text>
                            </View>
                            {renderCheck(selectedId === elder.id)}
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
            {/* 하단 버튼 고정 */}
            <View className="px-4 py-4 bg-white border-t border-gray10">
                <TouchableOpacity
                    className="w-full bg-main900 rounded-xl py-4 items-center"
                    disabled={!selectedId}
                    onPress={handleSubmit}
                    activeOpacity={!selectedId ? 1 : 0.8}
                >
                    <Text className="text-white text-lg font-bold">설정하기</Text>
                </TouchableOpacity>
            </View>
        </View >
    );
};

export default TargetSelect;
