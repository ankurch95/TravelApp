import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

const styles = StyleSheet.create({
    safeAreaViewStyle: {
        backgroundColor: colors.WHITE_COLOR,
    },
    headerText: {
        color: colors.BLACK_COLOR,
        textAlignVertical: 'center',
        fontWeight: '500',
        fontSize: 20,
        flex:1
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
    }
});
export default styles;
