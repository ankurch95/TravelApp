import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.WHITE_COLOR,

    },
    messageNormal: {
        color: colors.BLACK_COLOR,
        fontSize: 16,
       
        textAlign: 'center'
    },
    message: {
        color: colors.GREEN_COLOR,
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center'
    },

});
export default styles;
