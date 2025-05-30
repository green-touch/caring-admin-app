import React from 'react'
import { TouchableOpacity, View, Text, Image } from 'react-native'
import SvgIcon from '../SvgIcon'
import { SosListType } from '../../types/sosFilter'

type Props = {
    item: SosListType;
}

const SosListCard = ({ item }: Props) => {
    return (
        <TouchableOpacity className='w-full flex flex-col items-center justify-between p-4' key={item.id}>
            {
                item.status === '진행중' ? (
                    <Text className={`text-main600 text-[15px] font-bold w-full text-left mb-3`}>{item.status}</Text>) :
                    (
                        <View className='flex flex-row items-center justify-between w-full'>
                            <Text className={`text-green800 text-[15px] font-bold text-left mb-3 flex-1`}>{item.status}</Text>
                            <Text className='text-sm font-normal text-gray70'>{item.requestDate}</Text>
                        </View>
                    )
            }

            <View className='flex flex-row items-center justify-between w-full'>
                <Image source={item.image} className='w-16 h-16 rounded-full' />
                <View className='flex flex-col items-start justify-center flex-1 ml-4'>
                    <Text className='text-[17px] font-bold text-gray90 mb-1'>{item.name}</Text>
                    <Text className='text-sm font-normal text-gray70'>요청 날짜 : {item.requestDate}</Text>
                </View>
                <View className='flex flex-row items-center justify-center'>
                    <SvgIcon name='ChevronRight' size={24} color='gray70' />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default SosListCard