import * as React from 'react';
import { View, Text, Pressable, ActivityIndicator, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';
import { colors } from '../../theme/colors';
import styles from './styles';
import LargeButton from '../button';

interface AddNotesModalProps {
    closeBookFilterPress?: () => void;
    data?: any
    closeBookFlightPress?: () => void;
    loaderVisibility?: boolean
}

const AddNotesModal: React.FC<AddNotesModalProps> = ({
    closeBookFilterPress,
    data = [],
    closeBookFlightPress,
    loaderVisibility = false
}): React.ReactElement => {
    return (
        <View style={styles.sortModalContainer}>
            <View style={{ alignSelf: 'flex-end' }}>
                <Pressable style={{ flexDirection: 'row', alignItems: 'center', padding: 5 }} onPress={closeBookFilterPress}>
                    <Icon color={colors.BLACK_COLOR} size={25} name='close' />
                </Pressable>
            </View>


            <View style={{ marginVertical: 15, alignSelf: 'center' }}>
                <Text style={styles.dateText}>Airline Detail</Text>
                <View style={styles.dateTimeText}>
                    <Text style={styles.cityCode}>{data.displayData.airlines[0].airlineName} ({data.displayData.airlines[0].flightNumber})</Text>
                </View>
            </View>

            <View style={styles.flightDestinationView}>

                <View>
                    <Text style={styles.dateText}>{moment(data.displayData.source.depTime).format('DD MMM')}</Text>
                    <View style={styles.dateTimeText}>
                        <Text style={styles.cityCode}>{data.displayData.source.airport.cityCode}</Text>
                        <View style={styles.dotView} />
                        <Text>{moment(data.displayData.source.depTime).format('HH:MM A')}</Text>
                    </View>
                </View>



                <View style={{ flex: 1 }}>
                    <Text style={{ textAlign: 'center' }}>{data.displayData.totalDuration}</Text>
                    <View style={styles.dividerView} />
                    <Text style={{ textAlign: 'center' }}>{data.displayData.stopInfo}</Text>
                </View>


                <View>
                    <Text style={{ ...styles.dateText, textAlign: 'center' }}>{moment(data.displayData.destination.arrTime).format('DD MMM')}</Text>
                    <View style={styles.dateTimeText}>
                        <Text style={styles.cityCode}>{data.displayData.destination.airport.cityCode}</Text>
                        <View style={styles.dotView} />
                        <Text>{moment(data.displayData.destination.arrTime).format('HH:MM A')}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.totalView} />
            <View style={{ alignSelf: 'flex-end' }}>
                <Text style={styles.fareText}>{'\u20B9'} {data.fare.toLocaleString()}</Text>
                <Text style={styles.totalText}>Total</Text>
            </View>



            <TextInput
                style={styles.textInputStyle}
                multiline
                numberOfLines={4}
                placeholder='Add Notes (Required)' />


            {
                loaderVisibility ?

                    <ActivityIndicator
                        size={'large'}
                        color={colors.PURPLE_COLOR}
                        />

                    :
                    <LargeButton
                        btnTitle='Book Flight'
                        handlePress={closeBookFlightPress} />
            }


        </View >
    );
};
export default AddNotesModal;