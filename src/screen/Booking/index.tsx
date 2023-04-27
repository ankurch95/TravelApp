import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import Toast from 'react-native-simple-toast';
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useIsFocused } from '@react-navigation/native';
import { Modal, Portal } from 'react-native-paper';

import LargeButton from '../../component/button'
import SafeAreaWithStatusBar from '../../component/safeAreaViewWithStatusBar'
import HeaderWithBackButton from '../../component/header';
import FlightSearchView from '../../component/flightSearchView';
import { callToBookFlight, callToCancelFlight } from '../../api/apiCall';
import { BookingStackParamList } from '../../routes/screens';
import AddNotesModal from '../../component/addNoteModal';
import styles from './styles';
import { EndPoint } from '../../api/apiEndPoint';
import AlertModal from '../../component/alertModal';


type Props = NativeStackScreenProps<BookingStackParamList, 'BookingScreen'>

export default function BookingScreen({ navigation, route }: Props) {
    const isFocused = useIsFocused();
    const [departurePlace, setDeparturePlace] = useState('')
    const [destinationPlace, setDestinationPlace] = useState('')
    const [addNotesModalVisible, setAddNotesModalVisible] = useState(false);
    const [alertModalVisible, setAlertModalVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('')
    const [loaderVisibility, setLoaderVisibility] = useState(false);
    const [tripId, setTripId] = useState('')
    useEffect(() => {
        if (isFocused) {
            if (route.params?.flightData != undefined) {
                setAddNotesModalVisible(true)
            }
        }
    }, [isFocused, route])


    const getFlightData = async () => {
        if (departurePlace != '') {
            if (destinationPlace != '') {
                navigation.navigate('BookingDetailScreen')
            } else {
                Toast.show('Please enter destination place.', 3)
            }
        } else {
            Toast.show('Please enter departure place.', 3)
        }
    }

    const bookFlight = async () => {
        setLoaderVisibility(true)
        let flightBookResponse = await callToBookFlight()
        if (flightBookResponse.status == EndPoint.API_SUCCESS_CODE) {
            setLoaderVisibility(false)
            setAddNotesModalVisible(false)
            setAlertModalVisible(true)
            setAlertMessage("Flight Booked Successfully")
            setTripId(flightBookResponse.data.data.tripId)
        } else {
            setLoaderVisibility(false)
            setAlertModalVisible(true)
            setAlertMessage('Something went wrong.')
        }
    }

    const cancelledFlight = async () => {
        setAddNotesModalVisible(false)
        let flightCancelResponse = await callToCancelFlight()
        if (flightCancelResponse.status == EndPoint.API_SUCCESS_CODE) {
            setAddNotesModalVisible(false)
            setAlertModalVisible(true)
            setAlertMessage(flightCancelResponse.data.data.message)
        } else {
            setAlertModalVisible(true)
            setAlertMessage('Something went wrong.')
        }
    }


    return (
        <SafeAreaWithStatusBar>
            <HeaderWithBackButton
                headerTitle='Search Flight'
                backButtonVisibility={false} />

            <View style={{ padding: 20 }}>
                <FlightSearchView
                    onDepartureChangeText={(dep: string) => setDeparturePlace(dep)}
                    onDestinationChangeText={(des: string) => setDestinationPlace(des)}
                    departurePlace={departurePlace}
                    destinationPlace={destinationPlace}
                />
                <LargeButton
                    btnTitle='Search Flight'
                    handlePress={() => getFlightData()} />
            </View>


            <Portal>
                <Modal
                    visible={addNotesModalVisible}
                    contentContainerStyle={styles.noteAddModalContainer}
                    dismissable={false}
                    style={{ justifyContent: 'center' }}>
                    <AddNotesModal
                        closeBookFilterPress={() => cancelledFlight()}
                        data={route.params?.flightData != undefined && route.params?.flightData}
                        closeBookFlightPress={() => bookFlight()}
                        loaderVisibility={loaderVisibility}
                    />
                </Modal>


                <Modal
                    visible={alertModalVisible}
                    contentContainerStyle={styles.noteAddModalContainer}
                    dismissable={false}
                    style={{ justifyContent: 'center' }}>
                    <AlertModal
                        data={alertMessage}
                        closeAlertModalPress={() => setAlertModalVisible(false)}
                        tripId={tripId}
                    />
                </Modal>
            </Portal>
        </SafeAreaWithStatusBar>
    )
}