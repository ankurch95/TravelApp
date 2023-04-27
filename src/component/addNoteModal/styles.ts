import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

const styles = StyleSheet.create({
    sortModalContainer: {
        backgroundColor: colors.WHITE_COLOR,

    },
    headerText: {
        textAlignVertical: 'center',
        fontWeight: '500',
        fontSize: 16,
        marginVertical: 12
    },
    headerView: {
        height: 50,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerWithBackView: {
        height: 50,
        paddingHorizontal: 15,
        flexDirection: 'row',
    },
    selectedFilterView: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 10
    },
    dateText: {
        color: colors.BLACK_COLOR,
        fontSize: 16,
        fontWeight: '600'
    },
    dateTimeText: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    cityCode: {
        color: colors.BLACK_COLOR,
        fontSize: 14
    },
    dotView: {
        backgroundColor: colors.GRAY_COLOR,
        height: 3,
        width: 3,
        borderRadius: 3 / 2,
        marginHorizontal: 5
    },
    dividerView: {
        backgroundColor: colors.LIGHT_GRAY_COLOR,
        height: 1,
        marginHorizontal: 20,
        marginVertical: 5
    },
    totalView: {
        backgroundColor: colors.GRAY_COLOR + '99',
        height: 1,
        marginVertical: 10
    },
    fareText: {
        color: colors.BLACK_COLOR,
        fontSize: 20,
        fontWeight: '600'
    },
    totalText: {
        textAlign: 'center',
        color: colors.GRAY_COLOR
    },
    flightDestinationView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textInputStyle: {
        backgroundColor: colors.LIGHT_GRAY_COLOR,
        borderRadius: 10,
        marginVertical: 30,
        textAlignVertical: 'top',
        paddingHorizontal: 10
    }
});
export default styles;
