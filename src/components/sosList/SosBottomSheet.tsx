import React from 'react'
import BottomSheet from '../common/BottomSheet'
import { View, Text, TouchableOpacity } from 'react-native'
import SvgIcon from '../SvgIcon'
import { SortValue, SortOptionType, sortOptions } from '../../types/sosFilter'

type Props = {
    isFilterSheetVisible: boolean;
    setFilterSheetVisible: (visible: boolean) => void;
    filterType: 'status' | 'time';
    selectedSortOption: SortOptionType[];
    setSelectedSortOption: React.Dispatch<React.SetStateAction<SortOptionType[]>>;
    selectedIndex: number;
}

const SosBottomSheet = ({ isFilterSheetVisible, setFilterSheetVisible, filterType, selectedSortOption, setSelectedSortOption, selectedIndex }: Props) => {
    return (
        <BottomSheet visible={isFilterSheetVisible} onClose={() => setFilterSheetVisible(false)}>
            <View className='w-full flex flex-row items-center justify-end'>
                <TouchableOpacity onPress={() => setFilterSheetVisible(false)}>
                    <SvgIcon name='Close' size={24} color='gray70' />
                </TouchableOpacity>
            </View>
            <View className='w-full flex flex-col'>
                <Text className='text-lg font-bold text-gray90'>{filterType === 'status' ? '요청 종류' : '시간 설정'}</Text>
                {((sortOptions.find(opt => opt.type === filterType)?.value ?? []) as SortValue[]).map((item, index, arr) => (
                    <TouchableOpacity
                        key={item.type}
                        className='pt-2 mt-4'
                        onPress={() => {
                            setSelectedSortOption(prev => {
                                const newArr = [...prev];
                                newArr[selectedIndex] = { type: filterType, value: item };
                                return newArr;
                            });
                            setFilterSheetVisible(false);
                        }}
                    >
                        <View className='flex flex-row items-center justify-between'>
                            <Text className={`text-base ${selectedSortOption[selectedIndex].value.type === item.type ? 'text-gray90 font-bold' : 'text-gray70'}`}>{item.type}</Text>
                            {selectedSortOption[selectedIndex].value.type === item.type && <SvgIcon name='CheckLine' size={24} color='main600' />}
                        </View>
                        {index !== arr.length - 1 && <View className='w-full h-[1px] bg-gray20 mt-4'></View>}
                    </TouchableOpacity>
                ))}
            </View>
        </BottomSheet>
    )
}

export default SosBottomSheet