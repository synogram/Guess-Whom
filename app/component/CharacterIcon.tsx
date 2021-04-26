import React from 'react';
import { Image } from 'react-native';

const IMAGES = [
    require("../assets/character/Group10.png"),
    require("../assets/character/Group14.png"),
    require("../assets/character/Group17.png"),
    require("../assets/character/Group25.png"),
    require("../assets/character/Group29.png"),
    require("../assets/character/Group31.png"),
    require("../assets/character/Group34.png"),
    require("../assets/character/Group39.png"),
]

export default (props:{
    idx:Number
}) => {   
    return ( <Image source={IMAGES[props.idx]}/> )
};