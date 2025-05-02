import React, { useState } from 'react'
import { TextInput, TextInputProps, View, TouchableOpacity } from 'react-native';
import SvgIcon from '@_components/SvgIcon';

type LoginInputProps = {
    placeholder: string;
    value: string;
    secureTextEntry?: boolean;
    handleInput: (text: string) => void;
    keyboardType?: 'default' | 'number-pad' | 'decimal-pad' | 'numeric' | 'email-address' | 'phone-pad';
    testID?: string;
} & Omit<TextInputProps, 'placeholder' | 'value' | 'secureTextEntry' | 'onChangeText' | 'keyboardType'>;

const LoginInput = ({ placeholder, value, handleInput, secureTextEntry = false, keyboardType = 'default', testID, ...rest }: LoginInputProps) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const handleClearInput = () => {
        handleInput('');
    };

    return (
        <View className="relative w-full">
            <TextInput
                className="w-full h-[72px] px-3 border border-gray40 mt-4 rounded-lg text-lg pr-24"
                placeholder={placeholder}
                secureTextEntry={secureTextEntry && !isPasswordVisible}
                value={value}
                onChangeText={handleInput}
                keyboardType={keyboardType}
                testID={testID || `input-${placeholder}`}
                accessibilityLabel={placeholder}
                {...rest}
            />
            {(value.length > 0) && secureTextEntry && (
                <TouchableOpacity
                    className="absolute right-[48px] top-[34px]"
                    onPress={togglePasswordVisibility}
                    testID="toggle-password-visibility"
                >
                    <SvgIcon
                        name={isPasswordVisible ? "EyeVisible" : "EyeRemove"}
                        size={24}
                    />
                </TouchableOpacity>
            )}
            {value.length > 0 && (
                <TouchableOpacity
                    className="absolute right-3 top-[34px]"
                    onPress={handleClearInput}
                    testID="clear-input"
                >
                    <SvgIcon
                        name="RemoveRound"
                        size={24}
                    />
                </TouchableOpacity>
            )}
        </View>
    )
}

export default LoginInput