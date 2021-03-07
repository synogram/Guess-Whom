import React, { useState } from 'react';
import {View, Text} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {addQuestion, addUser, createRoom, incrementTurn, updateScore} from "../utilities/firebase/firebaseActions"

 const firebaseTest = () => {

    const [roomKey, setRoomKey] = useState("")
    const [userId, setUserId] = useState("")

    return (
        <View>
            <Text>ROOM</Text>
            <TextInput placeholder = "Room" style = {{width: 200 , borderColor: "black", borderWidth: 2}} value = {roomKey}/>
            <button onClick = {async() => {const key = await createRoom(); key ? setRoomKey(key) : console.log(key)}}>Create Room</button>
            <button onClick = {async() => {incrementTurn(roomKey);}}>increment turn</button>

            <Text>USER</Text>
            <TextInput placeholder = "User Id" style = {{width: 200 , borderColor: "black", borderWidth: 2}} value = {userId}/>
            <button onClick = {async() => {const key = await addUser(roomKey, "asdasdm", "asdasdasdasd"); key ? setUserId(key) : console.log(key)}}>add user</button>
            <button onClick = {() => {updateScore(roomKey, userId, 30);}}>update user score</button>

            <Text>QNA</Text>
            <button onClick = {() => {addQuestion(roomKey, "a");}}>add question</button>
        </View>
    )
};

export default firebaseTest;