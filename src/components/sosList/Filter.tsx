import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import SvgIcon from '../SvgIcon'
import { SortOptionType } from '../../types/sosFilter'

type Props = {
    selectedSortOption: SortOptionType[];
    setFilterType: React.Dispatch<React.SetStateAction<'status' | 'time'>>;
    setFilterSheetVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Filter = ({ selectedSortOption, setFilterType, setFilterSheetVisible }: Props) => {
    return (
        <View className='w-full flex flex-row items-center justify-end mt-5 gap-x-4'>
            <TouchableOpacity className='flex flex-row items-center justify-center' onPress={() => { setFilterType('status'); setFilterSheetVisible(true); }}>
                <Text className='text-sm font-normal text-gray70'>{selectedSortOption[1].value.type}</Text>
                <SvgIcon name='ChevronDown' size={16} color='gray70' />
            </TouchableOpacity>
            <TouchableOpacity className='flex flex-row items-center justify-center' onPress={() => { setFilterType('time'); setFilterSheetVisible(true); }}>
                <Text className='text-sm font-normal text-gray70'>{selectedSortOption[0].value.type}</Text>
                <SvgIcon name='ChevronDown' size={16} color='gray70' />
            </TouchableOpacity>
        </View>
    )
}

export default Filter