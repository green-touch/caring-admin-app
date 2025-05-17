import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import NavigationHeader from '@_components/common/NavigationHeader';
import SvgIcon from '@_components/SvgIcon';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import SearchInput from '@_components/common/SearchInput';
import { useTimelineStore } from '../../zustand/store';

const dummyLocations = [
    { id: '1', name: '행복의원', address: '인천 서구 도움로 42 123동 45호' },
    { id: '2', name: '도움병원', address: '인천 서구 도움로 42 123동 45호' },
    { id: '3', name: '장소명', address: '주소명' },
];

const renderCheck = (checked: boolean) => (
    <View className={`w-7 h-7 rounded-full items-center justify-center border-[1px] border-gray40 ${checked ? 'border-[1px] border-gray40' : ""}`}>
        {checked && <SvgIcon name="RadioChecked" />}
    </View>
);

const LocationSelect = () => {
    const navigation = useNavigation<any>();
    const { setLocation } = useTimelineStore();
    const [search, setSearch] = useState('');
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const filtered = dummyLocations.filter(
        l => l.name.includes(search) || l.address.includes(search)
    );

    const handleSubmit = () => {
        if (selectedId) {
            const selected = dummyLocations.find(l => l.id === selectedId);
            if (selected) {
                setLocation(selected);
                navigation.goBack();
            }
        }
    };

    return (
        <SafeAreaView className="flex-1 bg-white">
            <NavigationHeader title="장소 설정" type="withMenu" />
            <View className="border-b border-gray10" />
            <View className="px-4 py-3">
                <SearchInput
                    value={search}
                    onChange={setSearch}
                    placeholder="장소명, 주소 검색"
                />
            </View>
            <FlatList
                data={filtered}
                keyExtractor={item => item.id}
                removeClippedSubviews={false}
                extraData={selectedId}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        className="flex-row items-center px-4 py-3"
                        onPress={() => setSelectedId(item.id)}
                    >
                        <SvgIcon name="MapFilled" size={24} className="mr-4" color="#C4C4C4" />
                        <View className="flex-1 ml-4">
                            <Text className="font-bold text-base text-gray100">{item.name}</Text>
                            <Text className="text-sm text-gray40">{item.address}</Text>
                        </View>
                        {renderCheck(selectedId === item.id)}
                    </TouchableOpacity>
                )}
            />
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
        </SafeAreaView>
    );
};

export default LocationSelect;
