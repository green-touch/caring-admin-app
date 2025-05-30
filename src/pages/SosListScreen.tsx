import AddTimelineBtn from '@_components/common/AddTimelineBtn';
import NavigationHeader from '@_components/common/NavigationHeader'
import SearchInput from '@_components/common/SearchInput';
import React, { useState } from 'react'
import { SafeAreaView, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import SvgIcon from '@_components/SvgIcon';
import { defaultSortOption, SortOptionType, sosListData } from '../types/sosFilter';
import SosBottomSheet from '@_components/sosList/SosBottomSheet';
import Filter from '@_components/sosList/Filter';
import SosListCard from '@_components/sosList/SosListCard';

type StatusType = '진행중' | '처리 완료';

interface SosListType {
    id: number;
    name: string;
    status: StatusType;
    requestDate: string;
    image: any;
}

const SosListScreen = ({ navigation }: { navigation: any }) => {

    const [sosList, setSosList] = useState<SosListType[]>(sosListData);
    const [search, setSearch] = useState('');
    const [isFilterSheetVisible, setFilterSheetVisible] = useState(false);
    const [filterType, setFilterType] = useState<'status' | 'time'>('status');
    const [selectedSortOption, setSelectedSortOption] = useState<SortOptionType[]>(defaultSortOption);

    const handleSearch = (text: string) => {
        setSearch(text);
    }

    const selectedIndex = filterType === 'time' ? 0 : 1;

    return (
        <SafeAreaView className="flex-1 bg-white">
            <NavigationHeader
                title="SOS 요청 리스트"
                type="onlyMenu"
                onMenuPress={() => {
                    navigation.navigate('Sidebar')
                }}
            />
            <ScrollView className="px-4 py-10">
                <View className="w-full flex flex-col text-left mb-5">
                    <Text className="text-lg font-normal text-gray70">긴급 SOS 요청자</Text>
                    <Text className="text-2xl font-bold text-main800">총 {sosList.length}명</Text>
                </View>
                <View className="mb-5">
                    <AddTimelineBtn onPress={() => navigation.navigate('timeline')} />
                </View>
                <View className='w-full flex flex-col'>
                    <SearchInput placeholder='노인 이름 검색' value={search} onChange={handleSearch} />
                    <Filter selectedSortOption={selectedSortOption} setFilterType={setFilterType} setFilterSheetVisible={setFilterSheetVisible} />
                </View>
                <View className='w-full flex flex-col'>
                    {
                        sosList.map((item) => (
                            <SosListCard key={item.id} item={item} />
                        ))
                    }
                </View>
                <View className='h-10'></View>
            </ScrollView>
            <SosBottomSheet
                isFilterSheetVisible={isFilterSheetVisible}
                setFilterSheetVisible={setFilterSheetVisible}
                filterType={filterType}
                selectedSortOption={selectedSortOption}
                setSelectedSortOption={setSelectedSortOption}
                selectedIndex={selectedIndex}
            />
        </SafeAreaView>
    )
}


export default SosListScreen