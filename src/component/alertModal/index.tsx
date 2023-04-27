import * as React from 'react';
import { View, Text, Pressable, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';
import { colors } from '../../theme/colors';
import styles from './styles';
import LargeButton from '../button';

interface AlertModalProps {

    data?: string
    closeAlertModalPress?: () => void;
    tripId?: string
}

const AlertModal: React.FC<AlertModalProps> = ({
    data = '',
    closeAlertModalPress,
    tripId = ''
}): React.ReactElement => {
    return (
        <View style={styles.container}>
            <View style={{ marginVertical: 20 }}>
                {
                    tripId != '' ?
                        <Text style={styles.messageNormal}>Congratulations!! Your  <Text style={styles.message}>{data}</Text>.{'\n'} Your trip id is  <Text style={styles.message}>{tripId}</Text></Text>
                        :
                        <Text style={{...styles.messageNormal,color:colors.RED_COLOR}}>{data}</Text>
                }

            </View>


            <LargeButton
                btnTitle='Continue'
                handlePress={closeAlertModalPress} />

        </View >
    );
};
export default AlertModal;