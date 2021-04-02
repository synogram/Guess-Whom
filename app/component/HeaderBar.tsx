import React from 'react';
import { View, StyleSheet, Pressable,  Image } from 'react-native';

export default (props:{
    onGoBack: Function
}) => {
    return (
        <View style={styles.containerView}>
            <Pressable onPress={props.onGoBack}>
                <Image source={require('../assets/ionic-ios-arrow-back/ionic-ios-arrow-back.png')}/>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    containerView: {
        height: 40,
        top:0,
        paddingHorizontal: 20,
        justifyContent:"center",
        position:"absolute",
        width:"100%",
        zIndex: 1000,
    },
    goBackBtnText:{
        color:"white",
        fontWeight:"bold",
        fontSize: 20,
    }
});