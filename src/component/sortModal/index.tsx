import * as React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../theme/colors';
import styles from './styles';

interface SortModalProps {
    closeSortFilterPress?: () => void;
    sortAirlineAToZ?: () => void;
    sortAirlineZToA?: () => void;
    sortFareLowToHigh?: () => void;
    sortFareHighToLow?: () => void;
    selectedFilter?: string
}

const SortModal: React.FC<SortModalProps> = ({
    closeSortFilterPress,
    sortAirlineAToZ,
    sortAirlineZToA,
    sortFareLowToHigh,
    sortFareHighToLow,
    selectedFilter = ''
}): React.ReactElement => {
    return (
        <View style={styles.sortModalContainer}>
            <View style={{ alignSelf: 'flex-end' }}>
                <Pressable style={{ flexDirection: 'row', alignItems: 'center', padding: 5 }} onPress={closeSortFilterPress}>
                    <Icon color={colors.BLACK_COLOR} size={25} name='close' />
                </Pressable>
            </View>
            <Pressable style={{ ...styles.selectedFilterView, backgroundColor: selectedFilter == 'AtoZ' ? colors.PURPLE_COLOR + '40' + '' : colors.WHITE_COLOR }} onPress={sortAirlineAToZ}>
                <Text style={styles.headerText}>Sort Airline A to Z</Text>
            </Pressable>
            <Pressable style={{ ...styles.selectedFilterView, backgroundColor: selectedFilter == 'ZtoA' ? colors.PURPLE_COLOR + '40' : colors.WHITE_COLOR }} onPress={sortAirlineZToA}>
                <Text style={styles.headerText}>Sort Airline Z to A</Text>
            </Pressable>
            <Pressable style={{ ...styles.selectedFilterView, backgroundColor: selectedFilter == 'HtoL' ? colors.PURPLE_COLOR + '40' : colors.WHITE_COLOR }} onPress={sortFareHighToLow}>
                <Text style={styles.headerText}>Sort Fare High to Low</Text>
            </Pressable>
            <Pressable style={{ ...styles.selectedFilterView, backgroundColor: selectedFilter == 'LtoH' ? colors.PURPLE_COLOR + '40' : colors.WHITE_COLOR }} onPress={sortFareLowToHigh}>
                <Text style={styles.headerText}>Sort Fare Low to High</Text>
            </Pressable>
        </View >
    );
};
export default SortModal;