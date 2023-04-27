import { FlatList, ActivityIndicator, BackHandler, Alert } from 'react-native'
import React, { useEffect, useState, useMemo } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import Toast from 'react-native-simple-toast';
import { Modal, Portal } from 'react-native-paper';

import SafeAreaWithStatusBar from '../../component/safeAreaViewWithStatusBar'
import HeaderWithBackButton from '../../component/header'
import { BookingStackParamList } from '../../routes/screens';
import { callToFightSearch } from '../../api/apiCall'
import { EndPoint } from '../../api/apiEndPoint'
import { colors } from '../../theme/colors';
import FlightCardView from '../../component/flightCard';
import SortModal from '../../component/sortModal';
import styles from './styles';
import {useFocusEffect} from '@react-navigation/native';

type Props = NativeStackScreenProps<BookingStackParamList, 'BookingDetailScreen'>

export default function BookingDetailScreen({ navigation }: Props) {
    const [flightData, setFlightData] = useState([])
    const [sortModalVisible, setSortModalVisible] = useState(false);
    const [filterApplied, setFilterApplied] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState('');

    useEffect(() => {
        getFlightData()
    }, [])

    useFocusEffect(
        React.useCallback(() => {
            const onBackPress = () => {
                navigation.navigate('BookingScreen', { flightData: undefined })
                return true;
            };
            BackHandler.addEventListener('hardwareBackPress', onBackPress);
            return () => {
                BackHandler.removeEventListener('hardwareBackPress', onBackPress);
            };
        }, []),
    );


    const getFlightData = async () => {
        let flightResponse = await callToFightSearch()
        if (flightResponse.status == EndPoint.API_SUCCESS_CODE) {
            setFlightData(flightResponse.data.data.result)
        } else {
            Toast.show('Something went wrong.', 3)
        }
    }

    const renderFlightCard = ({ item }: any) => {
        return (
            <FlightCardView
                data={item}
                navigation={navigation} />
        )
    }

    const sortFlightIcon = () => {
        setSortModalVisible(true)
    }

    const getSortedLowToHighState = (data: any) => data.sort((a: { fare: string; }, b: { fare: string; }) => parseInt(a.fare) - parseInt(b.fare));
    const getSortedHighToLowState = (data: any) => data.sort((a: { fare: string; }, b: { fare: string; }) => parseInt(b.fare) - parseInt(a.fare));

    const sortFlightData = (sort: string) => {
        setSortModalVisible(false)
        if (sort == "SORT_A_TO_Z") {
            setFilterApplied(true)
            setSelectedFilter('AtoZ')
            flightData.sort(function (a: any, b: any) {
                if (a.displayData.airlines[0].airlineName.toLowerCase() < b.displayData.airlines[0].airlineName.toLowerCase()) return -1;
                if (a.displayData.airlines[0].airlineName.toLowerCase() > b.displayData.airlines[0].airlineName.toLowerCase()) return 1;
                return 0;
            });
        }
        if (sort == "SORT_Z_TO_A") {
            setFilterApplied(true)
            setSelectedFilter('ZtoA')
            flightData.sort(function (a: any, b: any) {
                if (a.displayData.airlines[0].airlineName.toLowerCase() > b.displayData.airlines[0].airlineName.toLowerCase()) return -1;
                if (a.displayData.airlines[0].airlineName.toLowerCase() < b.displayData.airlines[0].airlineName.toLowerCase()) return 1;
                return 0;
            });
        }
        if (sort == "SORT_FARE_L_TO_H") {
            setFilterApplied(true)
            setSelectedFilter('LtoH')
            let sortFlightData = getSortedLowToHighState(flightData)
            setFlightData(sortFlightData)
        }
        if (sort == "SORT_FARE_H_TO_L") {
            setFilterApplied(true)
            setSelectedFilter('HtoL')
            let sortFlightData = getSortedHighToLowState(flightData)
            setFlightData(sortFlightData)
        }
    }

    return (
        <SafeAreaWithStatusBar>
            <HeaderWithBackButton
                headerTitle='Flight'
                backHandle={() => navigation.navigate('BookingScreen', { flightData: undefined })}
                filterVisibility={true}
                filterPress={() => sortFlightIcon()}
                filterApply={filterApplied} />

            {
                flightData.length > 0 ?
                    <FlatList
                        data={flightData}
                        renderItem={renderFlightCard}
                        initialNumToRender={10}
                        removeClippedSubviews={true}
                        maxToRenderPerBatch={10} />
                    :
                    <ActivityIndicator
                        size={'large'}
                        color={colors.PURPLE_COLOR}
                        style={{ flex: 1 }} />
            }

            <Portal>
                <Modal
                    visible={sortModalVisible}
                    contentContainerStyle={styles.sortModalContainer}
                    dismissable={false}
                    style={{ justifyContent: 'flex-end' }}>
                    <SortModal
                        closeSortFilterPress={() => setSortModalVisible(false)}
                        sortAirlineAToZ={() => sortFlightData("SORT_A_TO_Z")}
                        sortAirlineZToA={() => sortFlightData("SORT_Z_TO_A")}
                        sortFareLowToHigh={() => sortFlightData("SORT_FARE_L_TO_H")}
                        sortFareHighToLow={() => sortFlightData("SORT_FARE_H_TO_L")}
                        selectedFilter={selectedFilter}
                    />
                </Modal>
            </Portal>
        </SafeAreaWithStatusBar>
    )
}