/*
    EnterRoomChannel contains contains all screens regarding entering the game.
*/
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import EnterRoomScreen from '../screen/EnterRoomScreen';

const StackNavigator = createStackNavigator();

const EnterRoomChannel = () => {
    return (
        <StackNavigator.Navigator>
            <StackNavigator.Screen
                name='Enter'
                component={EnterRoomScreen}
            />
        </StackNavigator.Navigator>
    )
}


export default EnterRoomChannel;