import { View, Text, Pressable } from 'react-native'
import React from 'react'
import moment from 'moment';
import styles from './styles';

interface FlightCardProps {
    data?: any;
    navigation?: any;
}

const FlightCardView: React.FC<FlightCardProps> = ({
    data = [],
    navigation,
}): React.ReactElement => {

    return (
        <Pressable style={styles.cardContainer}
            onPress={() => navigation.navigate('BookingScreen', { flightData: data })}>
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

            <View style={{ marginVertical: 15 }}>
                <Text style={styles.dateText}>Airline Detail</Text>
                <View style={styles.dateTimeText}>
                    <Text style={styles.cityCode}>{data.displayData.airlines[0].airlineName} ({data.displayData.airlines[0].flightNumber})</Text>
                </View>
            </View>

            <View style={styles.totalView} />
            <View style={{ alignSelf: 'flex-end' }}>
                <Text style={styles.fareText}>{'\u20B9'} {data.fare.toLocaleString()}</Text>
                <Text style={styles.totalText}>Total</Text>
            </View>
        </Pressable>
    )
}

export default FlightCardView;