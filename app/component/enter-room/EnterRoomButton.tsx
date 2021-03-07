import React from 'react'
import { Pressable, Text, StyleSheet, GestureResponderEvent} from 'react-native'
import { COLORS } from '../../styles/global';

export default (props:{
    onClick:(event:GestureResponderEvent ) => void,
    title:string,
    color?:string
}) => {
    const color = props.color ? props.color : COLORS.THEME_ORANGE;
    
    return (
        <Pressable
            onPress={props.onClick}
            style={ [styles.btnPressable, { borderColor:color }]}
        >
            <Text style={[styles.titleText, { color }]}>{ props.title }</Text>
        </Pressable>
    )    
}

const styles = StyleSheet.create({
    btnPressable:{
        backgroundColor: COLORS.THEME_BLACK,
        borderWidth: 3, 
        borderColor: COLORS.THEME_ORANGE,
        borderRadius: 30,
        justifyContent:"center",
        flexDirection:"row",
        alignItems:"center",
        width:262,
        height:65,
        margin: 10,
    },
    titleText:{
        fontSize:18,
        fontWeight:'bold',
        color: COLORS.THEME_ORANGE,
    }
})