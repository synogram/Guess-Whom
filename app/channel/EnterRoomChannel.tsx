/*
    EnterRoomChannel contains contains all screens regarding entering the game.
*/
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import EnterRoomScreen from '../screen/EnterRoomScreen';
import FirebaseTestScreen from '../screen/FirebaseTestScreen';

const StackNavigator = createStackNavigator();

const EnterRoomChannel = () => {
    return (
        <StackNavigator.Navigator>
            <StackNavigator.Screen
                name='Enter'
                component={FirebaseTestScreen}
            />
        </StackNavigator.Navigator>
    )
}


export default EnterRoomChannel;