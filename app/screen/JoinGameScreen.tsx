import React from 'react';
import { SafeAreaView, TextInput, View, Text, StyleSheet } from 'react-native';
import GlobalStyles, { globalStyling } from '../styles/global';
import EnterButton from '../component/EnterButton';
import { JoinGameConstants } from '../constants/constants';

const JoinGameScreen = () => {
  return (
    <SafeAreaView style={[GlobalStyles.safeAreaView, Styles.joinGameContainer]}>
      <Text style={[Styles.text, Styles.headerText]}>{JoinGameConstants.headerText}</Text>
      <Text style={[Styles.text, Styles.subText]}>{JoinGameConstants.subText}</Text>
      <TextInput style={Styles.inputBox}></TextInput>
      <Text style={[Styles.text, Styles.subText]}>{JoinGameConstants.enterRoomText}</Text>
      <TextInput style={Styles.inputBox}></TextInput>
      <EnterButton />
    </SafeAreaView>
  );
};

export default JoinGameScreen;

const Styles = StyleSheet.create({
  joinGameContainer: {
    backgroundColor: globalStyling.BLACK,
  },

  text: {
    color: globalStyling.WHITE,
    alignSelf: 'center',
    textAlign: 'center',
  },

  headerText: {
    fontSize: 64,
    marginTop: 75,
  },

  subText: {
    fontSize: 32,
    marginTop: 30,
    width: 275,
  },

  inputBox: {
    marginTop: 20,
    height: 64,
    width: 275,
    backgroundColor: 'white',
    alignSelf: 'center',
    fontSize: 40,
  },
});
