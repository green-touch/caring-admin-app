import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Dimensions, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NavigationHeader from '@_components/common/NavigationHeader';
import { Calendar } from 'react-native-calendars';
import { useTimelineStore } from '../../zustand/store';
import SvgIcon from '@_components/SvgIcon';
import dayjs from 'dayjs';
import AddTimelineBtn from '@_components/main/AddTimelineBtn';
import { SafeAreaView } from 'react-native-safe-area-context';

const hours = Array.from({ length: 12 }, (_, i) => i + 1);
const minutes = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'));
const ampmList = ['오전', '오후'];

const ITEM_HEIGHT = 32;
const VISIBLE_ITEMS = 3;

const getInitialIndex = (list: any[], value: any) => {
    const idx = list.findIndex(v => v === value);
    return idx === -1 ? 0 : idx;
};

const PickerWheel = React.memo(({ data, value, setValue, wheelKey }: { data: any[]; value: any; setValue: (v: any) => void; wheelKey: string }) => {
    const ref = React.useRef<FlatList>(null);
    const animatedValues = React.useRef(Array(100).fill(0).map(() => new Animated.Value(0))).current;

    // 스크롤이 멈췄을 때 중앙값 선택
    const onMomentumScrollEnd = (e: any) => {
        const offsetY = e.nativeEvent.contentOffset.y;
        const idx = Math.round(offsetY / ITEM_HEIGHT);
        setValue(data[idx]);
    };

    React.useEffect(() => {
        // 값이 바뀌면 해당 위치로 스크롤
        const idx = getInitialIndex(data, value);
        ref.current?.scrollToOffset({ offset: idx * ITEM_HEIGHT, animated: false });
    }, [value]);

    // 애니메이션 효과 적용
    React.useEffect(() => {
        data.forEach((item, idx) => {
            Animated.timing(animatedValues[idx], {
                toValue: value === item ? 1 : 0,
                duration: 180,
                useNativeDriver: false,
            }).start();
        });
    }, [value, data, animatedValues]);

    return (
        <FlatList
            key={wheelKey}
            ref={ref}
            data={data}
            keyExtractor={item => item.toString()}
            style={{ width: 48, height: ITEM_HEIGHT * VISIBLE_ITEMS }}
            contentContainerStyle={{
                paddingVertical: ITEM_HEIGHT, // 위아래 여백
                alignItems: 'center',
                justifyContent: 'center',
            }}
            showsVerticalScrollIndicator={false}
            scrollEnabled={true}
            snapToInterval={ITEM_HEIGHT}
            removeClippedSubviews={false}
            decelerationRate="fast"
            onMomentumScrollEnd={onMomentumScrollEnd}
            renderItem={({ item, index }) => {
                const animatedFontSize = animatedValues[index].interpolate({
                    inputRange: [0, 1],
                    outputRange: [16, 20],
                });
                const animatedFontWeight = animatedValues[index].interpolate({
                    inputRange: [0, 1],
                    outputRange: [400, 700],
                });
                const animatedColor = animatedValues[index].interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.82, 0.13], // #D1D5DB(0.82) ~ #222(0.13) 회색~진회색
                });
                return (
                    <Animated.Text
                        style={{
                            fontWeight: value === item ? '700' : '400',
                            fontSize: animatedFontSize,
                            color: value === item ? '#222' : '#D1D5DB',
                            textAlign: 'center',
                            height: ITEM_HEIGHT,
                            lineHeight: ITEM_HEIGHT,
                        }}
                    >
                        {item}
                    </Animated.Text>
                );
            }}
            getItemLayout={(_, index) => ({
                length: ITEM_HEIGHT,
                offset: ITEM_HEIGHT * index,
                index,
            })}
            initialScrollIndex={getInitialIndex(data, value)}
        />
    );
});

const DateSelect = () => {
    const navigation = useNavigation<any>();
    const { setDate } = useTimelineStore();
    const [selectedDate, setSelectedDate] = useState<string>('');
    const [ampm, setAmpm] = useState('오전');
    const [hour, setHour] = useState(1);
    const [minute, setMinute] = useState('00');
    const [currentMonth, setCurrentMonth] = useState<string>(dayjs().format('YYYY-MM-DD'));
    const [wheelKey] = useState(() => Date.now().toString());

    const moveMonth = (diff: number) => {
        setCurrentMonth(dayjs(currentMonth).add(diff, 'month').format('YYYY-MM-DD'));
    };

    // 달력 헤더 커스텀
    const renderCalendarHeader = (date: Date) => {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        return (
            <View className="flex-row items-center justify-between px-2 py-2">
                <TouchableOpacity onPress={() => moveMonth(-1)}>
                    <SvgIcon name="ChevronLeftGray" size={24} />
                </TouchableOpacity>
                <Text className="text-2xl font-bold text-gray100 mx-6">{year}.{month}</Text>
                <TouchableOpacity onPress={() => moveMonth(1)}>
                    <SvgIcon name="ChevronRightGray" size={24} />
                </TouchableOpacity>
            </View>
        );
    };

    // 요일 스타일
    const renderDay = (day, date, marking) => {
        const isSunday = day === '일';
        const isSaturday = day === '토';
        return (
            <Text className={`text-base font-bold ${isSunday ? 'text-red-500' : isSaturday ? 'text-blue-700' : 'text-gray80'}`}>{day}</Text>
        );
    };

    // 추가하기 버튼
    const handleSubmit = () => {
        if (selectedDate && hour && minute) {
            const hour24 = ampm === '오후' ? (hour === 12 ? 12 : hour + 12) : (hour === 12 ? 0 : hour);
            setDate(`${selectedDate} ${ampm} ${hour}:${minute}`);
            navigation.goBack();
        }
    };

    return (
        <SafeAreaView className="flex-1 bg-white rounded-2xl overflow-hidden">
            <View className="flex-1 flex-col">
                <NavigationHeader title="날짜 선택" type="onlyClose" />
                {/* 달력: 고정 높이 */}
                <View style={{ height: 320 }}>
                    <Calendar
                        key={currentMonth}
                        current={currentMonth}
                        onMonthChange={d => setCurrentMonth(d.dateString)}
                        onDayPress={d => setSelectedDate(d.dateString)}
                        markedDates={selectedDate ? { [selectedDate]: { selected: true, selectedColor: '#23406E' } } : {}}
                        renderHeader={renderCalendarHeader}
                        hideArrows={true}
                        enableSwipeMonths={true}
                        theme={{
                            calendarBackground: '#fff',
                            textSectionTitleColor: '#B0B0B0',
                            textDayFontWeight: 'bold',
                            textDayFontSize: 16,
                            textMonthFontWeight: 'bold',
                            textMonthFontSize: 18,
                            todayTextColor: '#23406E',
                            selectedDayBackgroundColor: '#23406E',
                            selectedDayTextColor: '#fff',
                            arrowColor: '#23406E',
                            textDisabledColor: '#D1D5DB',
                        }}
                        dayComponent={({ date, state }) => {
                            if (!date) return null;
                            const isSelected = selectedDate === date.dateString;
                            const isSunday = dayjs(date.dateString).day() === 0;
                            return (
                                <TouchableOpacity
                                    onPress={() => setSelectedDate(date.dateString)}
                                    activeOpacity={0.7}
                                    style={{ alignItems: 'center', justifyContent: 'center', width: 32, height: 32 }}
                                    disabled={state === 'disabled'}
                                >
                                    <View
                                        style={
                                            isSelected
                                                ? {
                                                    width: 28,
                                                    height: 28,
                                                    borderRadius: 14,
                                                    backgroundColor: '#3168AF',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                }
                                                : undefined
                                        }
                                    >
                                        <Text
                                            style={{
                                                color: isSelected ? '#fff' : isSunday ? '#FF3B30' : '#222',
                                                fontWeight: '400',
                                                fontSize: 13,
                                            }}
                                        >
                                            {date.day}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            );
                        }}
                    />
                </View>
                {/* 휠: flex-1 */}
                <View className="flex-1 flex-row justify-center items-center border-t border-gray10">
                    <PickerWheel data={ampmList} value={ampm} setValue={setAmpm} wheelKey={wheelKey + '-ampm'} />
                    <PickerWheel data={hours} value={hour} setValue={setHour} wheelKey={wheelKey + '-hour'} />
                    <Text className="font-bold text-[18px] text-gray100 mx-0.5">:</Text>
                    <PickerWheel data={minutes} value={minute} setValue={setMinute} wheelKey={wheelKey + '-minute'} />
                </View>
                {/* 하단 버튼: flex-none */}
                <View className="px-4 py-4 bg-white border-t border-gray10">
                    <TouchableOpacity
                        className="w-full bg-main900 rounded-xl py-4 items-center"
                        disabled={!(selectedDate && hour && minute)}
                        onPress={handleSubmit}
                        activeOpacity={!(selectedDate && hour && minute) ? 1 : 0.8}
                    >
                        <Text className="text-white text-lg font-bold">설정하기</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default DateSelect;
