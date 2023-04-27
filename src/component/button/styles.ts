import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
const Styles = StyleSheet.create({
    statusBarContainer: {
        borderRadius: 7,
        elevation:4
    },
    safeAreaViewStyle: {
        backgroundColor: colors.WHITE_COLOR,
    },
    buttonText: {
        color: colors.WHITE_COLOR,
        textAlign: 'center',
        textAlignVertical: 'center',
        flex: 1,
        fontWeight: '600',
        fontSize: 17
    },

});
export default Styles;
