import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

const styles = StyleSheet.create({
    selectionCircle: {
        alignItems: 'center', justifyContent: 'center', borderRadius: 34 / 2, width: 34, height: 34, alignContent: 'center',

    },
    selectionDay: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '400',
    }
});
export default styles;
