import React from 'react';
import { TouchableOpacity, Text, Alert } from 'react-native';
import SvgIcon from "@_components/SvgIcon";
import type { IconName } from '@_types/icon'; 

interface AddTimelineBtnProps {
  label?: string;
  iconName?: IconName;  
  onPress?: () => void;
  className?: string;
}

const AddTimelineBtn = ({
  label = '타임라인 추가하기',
  iconName = 'PlusWhite',
  onPress = () => Alert.alert('타임라인 추가', '이동할 화면이 아직 없습니다.'),
  className = '',
}: AddTimelineBtnProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      className={`w-full bg-main900 rounded-[8px] px-[53px] py-[16px] flex-row items-center justify-center gap-[10px] shadow-sm shadow-black/5 elevation-2 ${className}`}
    >
      <Text className="text-gray0 text-[15px] font-medium text-center">{label}</Text>
      <SvgIcon name={iconName} size={18} />
    </TouchableOpacity>
  );
};

export default AddTimelineBtn;
