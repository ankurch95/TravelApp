import { Text, View, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, Modal, Portal } from 'react-native-paper'
import { colors } from '../../theme/colors';
import { Calendar } from 'react-native-calendars';
import { MarkedDates } from 'react-native-calendars/src/types';
import styles from './styles';


export interface SelectedDateProps {
    SelectedDate: any,
}

interface Props {
    HideModal: () => void;
    ShowModal: boolean;
    OnPressOk: (result: SelectedDateProps) => void
    SelectedDateData: SelectedDateProps;
}

const CustomCalendarModal: React.FC<Props> = (DataProps): React.ReactElement => {
    const { ShowModal, HideModal, SelectedDateData, OnPressOk } = DataProps;
    const [MarkedDateData, setMarkedDateData] = useState<MarkedDates | undefined>(undefined);
    const [SelectedCurrentDate, setSelectedCurrentDate] = useState('')
    const [InitialDate, setInitialDate] = useState('')

    useEffect(() => {
        if (SelectedDateData.SelectedDate) {
            setMarkedDateData({
                [SelectedDateData.SelectedDate]: { selected: true },
            })
            setInitialDate(SelectedDateData.SelectedDate)
        }
        SetupModalDate(SelectedDateData.SelectedDate);
    }, [SelectedDateData])

    const SetupModalDate = (customDate: string) => {
        if (customDate) {
            setSelectedCurrentDate(customDate)
        }
    }

    const OnDateSelected = (date: string) => {
        if (SelectedCurrentDate) {
            if (date != SelectedCurrentDate) {
                if (MarkedDateData) {
                    const mData = MarkedDateData[SelectedCurrentDate];
                    if (mData) {
                        MarkedDateData[SelectedCurrentDate] = {
                            selected: false,
                        }
                    }
                    MarkedDateData[date] = {
                        selected: true
                    }
                    SetupModalDate(date)
                    setMarkedDateData({ ...MarkedDateData })
                }
            }
        }
    }



    return (
        <Portal>
            <Modal
                visible={ShowModal}
                dismissable={false}
                onDismiss={HideModal}
                contentContainerStyle={{ backgroundColor: colors.WHITE_COLOR, marginHorizontal: 20, borderRadius: 10 }}
                style={{ elevation: 4 }}>

                <View style={{ marginHorizontal: 4., marginBottom: 5 }}>

                    <View >
                        <Calendar
                            markedDates={MarkedDateData}
                            initialDate={''}
                            hideExtraDays={true}
                            disableMonthChange={true}
                            firstDay={1}
                            hideDayNames={false}
                            showWeekNumbers={false}
                            disableArrowLeft={false}
                            disableArrowRight={false}
                            disableAllTouchEventsForDisabledDays={true}
                            style={{}}
                            enableSwipeMonths={true}
                            dayComponent={({ date, state, marking }) => {
                                let IsSelected = false;
                                if (marking) {
                                    if (marking.selected) {
                                        IsSelected = true
                                    }
                                }

                                return (
                                    <Pressable
                                        onPress={() => {
                                            if (date) {
                                                const dayString = date.dateString;
                                                OnDateSelected(dayString)
                                            }
                                        }}
                                        style={{ ...styles.selectionCircle, backgroundColor: IsSelected ? colors.PURPLE_COLOR : colors.WHITE_COLOR }}>
                                        <Text style={{...styles.selectionDay,color: IsSelected ? colors.WHITE_COLOR : colors.BLACK_COLOR}}>{date?.day}</Text>
                                    </Pressable>
                                )
                            }}


                            theme={{
                                backgroundColor: colors.WHITE_COLOR,
                                calendarBackground: colors.WHITE_COLOR,
                                todayTextColor: colors.PURPLE_COLOR,
                                dayTextColor: '#000',
                                monthTextColor: '#000',
                                selectedDayBackgroundColor: '#073866',
                                selectedDayTextColor: '#000',
                                // selectedDotColor: '#ff0000',
                                textSectionTitleColor: '#b6c1cd',
                            }}
                        />
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 20, justifyContent: 'flex-end' }}>
                        <Button
                            mode='outlined'
                            style={{ borderRadius: 8, marginEnd: 15 }}
                            onPress={HideModal}
                        >Cancel</Button>
                        <Button
                            mode='outlined'
                            style={{ borderRadius: 8, marginEnd: 15 }}
                            onPress={() => { OnPressOk({ SelectedDate: SelectedCurrentDate }) }}
                        >Ok</Button>
                    </View>

                </View>
            </Modal>
        </Portal>
    )

}

export default CustomCalendarModal;
