import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

const styles = StyleSheet.create({
    cardContainer: {
        marginVertical: 7,
        elevation: 4,
        marginHorizontal: 8,
        borderRadius: 3,
        paddingHorizontal: 13,
        paddingVertical: 10,
        backgroundColor: colors.WHITE_COLOR
    },
    flightDestinationView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
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
        height: 1, marginVertical: 10
    },
    fareText: {
        color: colors.GREEN_COLOR,
        fontSize: 20,
        fontWeight: '600'
    },
    totalText: {
        textAlign: 'center',
        color: colors.GRAY_COLOR
    }
});
export default styles;
