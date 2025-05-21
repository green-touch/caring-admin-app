import React from 'react';
import { View, Text } from 'react-native';

interface Props {
  label: string;
  type: 'status' | 'battery' | 'danger';
}

const StatusBadge = ({ label, type }: Props) => {
  const styles = {
    status: {
      bg: 'bg-green50',
      text: 'text-green900',
    },
    battery: {
      bg: 'bg-yellow50',
      text: 'text-yellow900',
    },
    danger:{
      bg:'bg-red50',
      text:'text-red700',
    }
  }[type];

  return (
    <View className={`px-2 py-[2px] rounded-[4px] ${styles.bg}`}>
      <Text className={`text-[13px] font-bold ${styles.text}`}>{label}</Text>
    </View>
  );
};

export default StatusBadge;
