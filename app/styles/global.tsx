import {StyleSheet} from 'react-native';

export const COLORS = {
    THEME_ORANGE: '#FFC800',
    THEME_PINK: '#FF0660',
    THEME_BLACK: '#1C1C1C',
    THEME_WHITE: 'white',
    THEME_NAVY: "#00348D"
}

export default StyleSheet.create({
    safeAreaView:{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: COLORS.THEME_BLACK,
    }
});