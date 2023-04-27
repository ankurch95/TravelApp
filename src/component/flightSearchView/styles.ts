import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

const Styles = StyleSheet.create({
    searchViewContainer: {
        elevation: 5,
        backgroundColor: colors.WHITE_COLOR,
        borderRadius: 5,
        padding: 10,
        marginBottom: 30
    },
    subMenuView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    dividerView: {
        backgroundColor: colors.GRAY_COLOR,
        height: 1,
        flex: 1,
        marginRight: 15,
        marginLeft: 30
    },
    fullDividerView: {
        marginVertical: 15,
        backgroundColor: colors.GRAY_COLOR,
        height: 1,
        flex: 1,


    }
});
export default Styles;
