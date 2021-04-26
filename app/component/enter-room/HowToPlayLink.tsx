import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

import { COLORS } from '../../styles/global';

export default () => {
    return (
    <Pressable>
        <Text style={styles.hyperlinkText}>How to play?</Text>
    </Pressable>)
}

const styles = StyleSheet.create({
    hyperlinkText: {
        textAlign: "center",
        marginTop: 30,
        marginHorizontal: 10,
        textDecorationLine: "underline",
        color: COLORS.THEME_WHITE,
        fontSize: 12,
    },
});