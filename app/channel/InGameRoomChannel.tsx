/*
    GameRoomChannel contains every screens about in game.
 */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {View, Text} from 'react-native';

const StackNavigator = createStackNavigator();

const InGameRoomChannel = () => {
    return (
        <StackNavigator.Navigator>
            <StackNavigator.Screen
                name='Wait'
                component={() => (<View><Text>Wait Area Screen</Text></View>)}
            />
        </StackNavigator.Navigator>
    )
}


export default InGameRoomChannel;