import React from 'react';
import { View, TextInput } from 'react-native';
import SvgIcon from '@_components/SvgIcon';

interface SearchInputProps {
    placeholder?: string;
    value: string;
    onChange: (text: string) => void;
    style?: any;
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder, value, onChange, style }) => {
    return (
        <View className="flex-row items-center w-full bg-[#F7F7F7] rounded-xl px-4 py-3" style={style}>
            <SvgIcon name="Search" size={24} className="mr-2" />
            <TextInput
                className="flex-1 text-[17px] text-gray100 bg-transparent py-1"
                placeholder={placeholder}
                placeholderTextColor="#555555"
                value={value}
                onChangeText={onChange}
                style={{ borderWidth: 0, backgroundColor: 'transparent' }}
            />
            {value.length > 0 && (
                <SvgIcon
                    name="Remove"
                    size={20}
                    color="#B0B0B0"
                    className="ml-1"
                    onPress={() => onChange("")}
                />
            )}
        </View>
    );
};

export default SearchInput;