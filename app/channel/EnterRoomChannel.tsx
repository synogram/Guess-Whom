/*
    EnterRoomChannel contains contains all screens regarding entering the game.
*/
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import EnterRoomScreen from '../screen/EnterRoomScreen';
import CharacterScreen from '../screen/CharacterScreen';

const StackNavigator = createStackNavigator();

const EnterRoomChannel = () => {
    return (
        <StackNavigator.Navigator
            screenOptions={{
                headerShown:false
            }}
        >
            {/* <StackNavigator.Screen
                name='Enter'
                component={EnterRoomScreen}
            /> */}
            <StackNavigator.Screen
                name='Character'
                component={CharacterScreen}
            />
        </StackNavigator.Navigator>
    )
}


export default EnterRoomChannel;