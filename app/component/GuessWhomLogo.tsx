import React from 'react';
import { Image } from 'react-native';

export default (
    props:{
        imgStyle:{}
    }    
) => {
    return <Image style={props.imgStyle} source={require('../assets/logo/logo.png')}/>
}