import * as React from 'react';
import { Text, Pressable, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Styles from './styles';
import { colors } from '../../theme/colors';

interface HeaderWithBackButtonProps {
    headerTitle?: string;
    headerBgColor?: string;
    backHandle?: () => void;
    filterPress?: () => void;
    backButtonVisibility?: boolean;
    filterVisibility?: boolean;
    arrowStyle?: string;
    filterApply?: boolean
}

const HeaderWithBackButton: React.FC<HeaderWithBackButtonProps> = ({
    headerTitle = '',
    headerBgColor = colors.WHITE_COLOR,
    backHandle,
    filterPress,
    backButtonVisibility = true,
    filterVisibility = false,
    arrowStyle = 'default',
    filterApply = false
}): React.ReactElement => {
    return (
        <View style={{ ...Styles.headerWithBackView, backgroundColor: headerBgColor }}>

            {
                backButtonVisibility &&
                <Pressable style={{ flexDirection: 'row', alignItems: 'center', marginRight: 20, paddingLeft: 15 }} onPress={backHandle}>
                    <Icon color={colors.BLACK_COLOR} size={25} name='arrow-back-ios' />
                </Pressable>
            }
            <Text style={Styles.headerText}>{headerTitle}</Text>

            {
                filterVisibility &&
                <Pressable style={{ flexDirection: 'row', alignItems: 'center', padding: 5 }} onPress={filterPress}>
                    <Icon color={colors.BLACK_COLOR} size={25} name='filter-alt' />
                    {filterApply && <View style={{ backgroundColor: colors.PURPLE_COLOR, width: 10, height: 10, borderRadius: 10 / 2, marginTop:-12,marginLeft:-6 }} />}
                </Pressable>
            }
        </View>
    );
};
export default HeaderWithBackButton;