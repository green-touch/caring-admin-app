import React from 'react';
import { StyleProp, Text, TextInput, View, ViewStyle, TextStyle } from 'react-native';

interface LoginInputProps {
    placeholder: string;
    value: string;
    secureTextEntry?: boolean;
    handleInput: (text: string) => void;
    label?: string;
    sublabel?: string;
    error?: string;
    style?: StyleProp<ViewStyle>;
    multiline?: boolean;
    numberOfLines?: number;
    textAlignVertical?: 'top' | 'center' | 'bottom';
    inputStyle?: StyleProp<ViewStyle>;
}

const InfoInput: React.FC<LoginInputProps> = ({
    placeholder,
    value,
    handleInput,
    secureTextEntry = false,
    label,
    sublabel,
    error,
    style = {},
    inputStyle,
    ...props
}) => {
    return (
        <View className="flex justify-start items-start w-full relative">
            {label && <Text className="text-xl text-gray100 mb-2">{label}</Text>}
            {sublabel && <Text className="text-lg text-gray70 mb-1">{sublabel}</Text>}

            <TextInput
                className={`w-full h-fit mt-1 pl-4 text-lg ${error ? 'border-red-600' : 'border-gray40'}`}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                value={value}
                onChangeText={handleInput}
                keyboardType="default"
                style={[
                    {
                        paddingVertical: 12,
                        paddingHorizontal: 16,
                        borderRadius: 8,
                        borderWidth: 1,
                        borderColor: '#BDBDBD',
                        fontSize: 16,
                        color: '#222',
                        backgroundColor: '#fff',
                    },
                    inputStyle,
                ]}
                {...props}
            />

            {error && (
                <Text className="text-red-600 mt-1 text-left text-base">
                    {error}
                </Text>
            )}
        </View>
    );
};

// 내용 입력 전용 InfoTextarea 컴포넌트
interface InfoTextareaProps {
    placeholder: string;
    value: string;
    handleInput: (text: string) => void;
    containerStyle?: StyleProp<ViewStyle>;
    inputStyle?: StyleProp<TextStyle>;
    multiline?: boolean;
    numberOfLines?: number;
    textAlignVertical?: 'top' | 'center' | 'bottom';
}

export const InfoTextarea: React.FC<InfoTextareaProps> = ({
    placeholder,
    value,
    handleInput,
    containerStyle = {},
    inputStyle = {},
    multiline = true,
    numberOfLines = 10,
    textAlignVertical = 'top',
}) => {
    return (
        <View style={containerStyle}>
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={handleInput}
                multiline={multiline}
                numberOfLines={numberOfLines}
                textAlignVertical={textAlignVertical}
                style={[
                    {
                        minHeight: 160,
                        paddingTop: 18,
                        paddingHorizontal: 18,
                        borderRadius: 10,
                        borderWidth: 1,
                        borderColor: '#BDBDBD',
                        fontSize: 17,
                        color: '#222',
                        backgroundColor: '#fff',
                    },
                    inputStyle,
                ]}
            />
        </View>
    );
};

export default InfoInput;