import React, { useState } from 'react';
import { View, TextInput, Pressable, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../theme/colors';
import Styles from './styles';
import CustomCalendarModal, { SelectedDateProps } from '../calendar';
import moment from 'moment';

interface FlightSearchViewProps {
    onDepartureChangeText?: (text: string) => void
    onDestinationChangeText?: (text: string) => void
    departurePlace?: string
    destinationPlace?: string
}

const FlightSearchView: React.FC<FlightSearchViewProps> = ({
    onDepartureChangeText,
    onDestinationChangeText,
    departurePlace = '',
    destinationPlace = '',

}): React.ReactElement => {
    const [showCalendarModal, setShowCalendarModal] = useState(false)
    const [selectedDateData, setSelectedDateData] = useState<SelectedDateProps>({

        SelectedDate: moment().format('DD MMM YYYY'),
    })

    return (
        <View style={Styles.searchViewContainer}>
            <View style={Styles.subMenuView}>
                <Icon name='flight-takeoff' size={25} color={colors.PURPLE_COLOR} />
                <TextInput
                    placeholder='Departure'
                    value={departurePlace}
                    onChangeText={(text) => { onDepartureChangeText && onDepartureChangeText(text) }}
                    style={{ paddingLeft: 12, flex: 1 }} />
            </View>

            <View style={Styles.subMenuView}>
                <View style={Styles.dividerView} />
                <Icon name='import-export' size={25} color={colors.GRAY_COLOR} />
            </View>

            <View style={Styles.subMenuView}>
                <Icon name='flight-land' size={25} color={colors.PURPLE_COLOR} />
                <TextInput
                    placeholder='Destination'
                    value={destinationPlace}
                    onChangeText={(text) => { onDestinationChangeText && onDestinationChangeText(text) }}
                    style={{ paddingLeft: 12, flex: 1 }} />
            </View>
            <View style={Styles.subMenuView}>
                <View style={Styles.fullDividerView} />
            </View>

            <Pressable style={Styles.subMenuView}
                onPress={() => setShowCalendarModal(true)}>
                <Icon name='calendar-today' size={25} color={colors.PURPLE_COLOR} />
                <Text style={{ paddingLeft: 12, flex: 1, marginVertical: 15 }} >
                    {selectedDateData.SelectedDate}

                </Text>
            </Pressable>
            {
                showCalendarModal && (

                    <CustomCalendarModal
                        SelectedDateData={selectedDateData}
                        ShowModal={showCalendarModal}
                        HideModal={() => { setShowCalendarModal(false) }}
                        OnPressOk={(result: SelectedDateProps) => {
                            setShowCalendarModal(false)
                            setSelectedDateData(result)
                        }}
                    />

                )
            }
        </View>

    );
};

export default FlightSearchView;