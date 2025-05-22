// components/UserCard.tsx
import React from 'react';
import { View, Text, ImageSourcePropType } from 'react-native';
import UserAvatarWithStatus from '@_components/main/UserAvatarStatus';

interface UserCardProps {
  name: string;
  phone: string;
  connected: boolean;
  imageSource: ImageSourcePropType;
}

const UserCard: React.FC<UserCardProps> = ({ name, phone, connected, imageSource }) => {
  return (
    <View className="bg-white rounded-[8px] px-[16px] pt-[20px] pb-[24px] mt-6 mx-3 shadow-sm shadow-black/5">
      <View className="flex-row items-start">
        <UserAvatarWithStatus imageSource={imageSource} connected={connected} />
        <View className="ml-4">
          <View className="flex-row items-center">
            <Text className="text-[21px] leading-[31.5px] font-bold text-gray90">{name}</Text>
            <Text className="ml-2 text-[12px] text-gray50">{connected ? '접속중' : '미접속'}</Text>
          </View>
          <Text className="mt-[6px] text-[15px] leading-[22.5px] text-gray90">{phone}</Text>
        </View>
      </View>
    </View>
  );
};

export default UserCard;
