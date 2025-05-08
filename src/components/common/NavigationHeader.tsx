import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import SvgIcon from '@_components/SvgIcon';
import { useNavigation } from '@react-navigation/native';

type HeaderType = 'default' | 'withMenu' | 'onlyMenu' | 'withLogo' | 'withClose';

type HeaderProps = {
    title: string;
    type?: HeaderType;
    onBackPress?: () => void;
    onMenuPress?: () => void;
}

const NavigationHeader = ({ title, type = 'default', onBackPress, onMenuPress }: HeaderProps) => {
    const navigation = useNavigation();

    const renderBackButton = () => (
        <TouchableOpacity
            className="absolute left-4 h-16 flex justify-center"
            onPress={onBackPress || (() => navigation.goBack())}
        >
            <SvgIcon name="Back2" />
        </TouchableOpacity>
    );

    const renderMenuButton = () => (
        <TouchableOpacity
            className="absolute right-4 h-16 flex justify-center"
            onPress={onMenuPress}
        >
            <SvgIcon name="Menu" size={24} />
        </TouchableOpacity>
    );

    const renderLogo = () => (
        <View className="flex-row items-center ml-4 h-full">
            <Image
                source={require('@_assets/images/img_logo_header.png')}
                className="h-9 w-32"
                resizeMode="contain"
            />
        </View>
    );

    const renderCloseButton = () => (
        <TouchableOpacity
            className="absolute right-4 h-16 flex justify-center"
            onPress={onBackPress || (() => navigation.goBack())}
        >
            <SvgIcon name="Close" />
        </TouchableOpacity>
    )

    const renderContent = () => {
        switch (type) {
            case 'withMenu':
                // 가운데 제목 + 왼쪽 뒤로가기 + 오른쪽 샌드위치
                return (
                    <>
                        {renderBackButton()}
                        <View className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            <Text className="text-lg text-gray100">{title}</Text>
                        </View>
                        {renderMenuButton()}
                    </>
                );
            case 'onlyMenu':
                // 가운데 제목 + 오른쪽 샌드위치
                return (
                    <>
                        <View className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            <Text className="text-lg text-gray100">{title}</Text>
                        </View>
                        {renderMenuButton()}
                    </>
                );
            case 'withLogo':
                // 왼쪽 로고 제목 + 오른쪽 샌드위치
                return (
                    <>
                        {renderLogo()}
                        {renderMenuButton()}
                    </>
                );
            case 'withClose':
                // 왼쪽 로고 제목 + 오른쪽 닫기
                // 사이드바에서 사용
                return (
                    <>
                         {renderLogo()}
                        {renderCloseButton()}
                    </>
                );
            default:
                // 가운데 제목 + 왼쪽 뒤로가기
                return (
                    <>
                        {renderBackButton()}
                        <View className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            <Text className="text-lg text-gray100">{title}</Text>
                        </View>
                    </>
                );
        }
    };

    return (
        <View className="w-full h-16 bg-white shadow-md border-b border-gray-200">
            {renderContent()}
        </View>
    );
};

export default NavigationHeader