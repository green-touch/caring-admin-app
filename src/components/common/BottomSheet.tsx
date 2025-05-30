import React, { useEffect, useRef } from 'react';
import { Modal, View, TouchableWithoutFeedback, StyleSheet, Animated, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

interface BottomSheetProps {
    visible: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const BottomSheet = ({ visible, onClose, children }: BottomSheetProps) => {
    const translateY = useRef(new Animated.Value(height)).current;

    useEffect(() => {
        if (visible) {
            Animated.timing(translateY, {
                toValue: 0,
                duration: 250,
                useNativeDriver: true,
            }).start();
        } else {
            Animated.timing(translateY, {
                toValue: height,
                duration: 200,
                useNativeDriver: true,
            }).start();
        }
    }, [visible]);

    return (
        <Modal
            visible={visible}
            animationType="fade"
            transparent
            onRequestClose={onClose}
        >
            <TouchableWithoutFeedback onPress={onClose}>
                <View style={styles.overlay}>
                    <TouchableWithoutFeedback>
                        <Animated.View style={[styles.sheet, { transform: [{ translateY }] }]}>
                            {children}
                        </Animated.View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'flex-end',
    },
    sheet: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        padding: 24,
        minHeight: 200,
    },
});

export default BottomSheet; 