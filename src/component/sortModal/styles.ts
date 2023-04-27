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
    selectedFilterView: { flexDirection: 'row', alignItems: 'center', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 10 }
});
export default styles;
