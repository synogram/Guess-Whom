import React, { useState, useEffect } from 'react'
import { View, TextInput, Text } from 'react-native';
import { COLORS } from '../../styles/global';

export default (props: {
    label: string,
    inputText: string,
    highlightColor: string,
    onChangeText: (text: string) => void
}) => {
    const [onFocus, setOnFocus] = useState(false);
    const [inputText, setInputText] = useState(props.inputText);
    useEffect(() => {
        setInputText(inputText);
    }, [props.inputText])
    return (
        <View>
            <View style={[{ borderColor: onFocus ? COLORS.THEME_WHITE : COLORS.THEME_WHITE }]}>
                <Text style={[{ color: onFocus ? COLORS.THEME_WHITE : COLORS.THEME_WHITE }]}>
                    {props.label}
                </Text>
                <TextInput
                    style={[{ color: onFocus ? COLORS.THEME_WHITE : COLORS.THEME_WHITE }]}
                    onBlur={() => setOnFocus(false)}
                    onFocus={() => setOnFocus(true)}
                    onChangeText={props.onChangeText}
                    value={inputText}
                />
            </View>
        </View>)
}
