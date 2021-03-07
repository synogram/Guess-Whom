import React, { useState } from 'react'
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../styles/global';

export default (props: {
    label: string,
    inputText: string,
    highlightColor: string,
    onChangeText: (text: string) => void
}) => {
    const [onFocus, setOnFocus] = useState(false);
    return (
        <View style={styles.containerView}>
            <View style={{ borderColor: onFocus ? props.highlightColor : COLORS.THEME_WHITE }}>
                <Text style={[styles.labelText, { color: onFocus ? props.highlightColor : COLORS.THEME_WHITE }]}>
                    {props.label}
                </Text>
                <TextInput
                    style={[styles.textInput, { color: onFocus ? props.highlightColor : COLORS.THEME_WHITE, borderColor: onFocus ? props.highlightColor : COLORS.THEME_WHITE }]}
                    onBlur={() => setOnFocus(false)}
                    onFocus={() => setOnFocus(true)}
                    onChangeText={props.onChangeText}
                    value={props.inputText}
                />
            </View>
        </View>)
}

const styles = StyleSheet.create({
    containerView:{
        margin: 20,
    },
    labelText:{
        fontSize:20,
    },
    textInput:{
        borderBottomWidth: 2
    }
})