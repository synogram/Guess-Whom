import React, { useState } from 'react';
import { StyleSheet, Platform , View } from 'react-native';
import GameRoomChannel from './channel/GameRoomChannel';
import EnterRoomScreen from './channel/EnterRoomChannel';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const [hasGameInstance, setHasGameInstance] = useState(false);
  return (
    <View style={styles.container}>
     <View style={styles.statusBar}></View>
      <NavigationContainer>
        <View style={{width:'100%', height:'100%'}}>
          {
            hasGameInstance ? <GameRoomChannel/> : <EnterRoomScreen/>        
          }
        </View>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusBar: {
    height: (Platform.OS === 'ios') ? 34 : 0,
    backgroundColor: 'black',
    width:'100%',
    borderWidth: 1
  }
});
