import * as React from 'react';
import { Text, Pressable } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Styles from './styles';
import { colors } from '../../theme/colors';

interface LargeButtonProps {
    btnTitle?: string;
    handlePress?: () => void;

}

const LargeButton: React.FC<LargeButtonProps> = ({
    btnTitle = '',
    handlePress,

}): React.ReactElement => {
    return (
        <LinearGradient
            colors={[colors.GRADIENT_COLOR_ONE, colors.GRADIENT_COLOR_TWO]}
            locations={[0.22, 0.8]}
            useAngle={true}
            angle={180}
            angleCenter={{ x: 0.5, y: 0.5 }}
            style={Styles.statusBarContainer}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}>


            <Pressable
                style={{ height: 50 }}
                onPress={handlePress}>
                <Text style={Styles.buttonText}>{btnTitle}</Text>
            </Pressable>
        </LinearGradient>
    );
};

export default LargeButton;