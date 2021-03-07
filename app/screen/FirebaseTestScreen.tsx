import React from 'react';
import {View, Text} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {createRoom} from "../utilities/firebase/firebaseActions"

export default () => {
    return (
        <View>
            <Text>ROOM</Text>
            <TextInput placeholder = "Room" style = {{width: 200 , borderColor: "black", borderWidth: 2}}/>
            <button onClick = {async() => {await createRoom()}}>Create Room</button>
            <Text>USER</Text>
            <Text>QNA</Text>
        </View>
    )
};