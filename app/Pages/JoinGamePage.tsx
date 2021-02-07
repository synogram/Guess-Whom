import React from 'react';
import { SafeAreaView, TextInput, View, Text, StyleSheet } from 'react-native';
import GlobalStyles, { globalStyling } from '../styles/global';

const JoinGamePage = () => {
  return (
    <SafeAreaView style={[GlobalStyles.safeAreaView, Styles.joinGameContainer]}>
      <Text style={[Styles.text, Styles.headerText]}>Guess Whom</Text>
      <Text style={[Styles.text, Styles.subText]}>Please Enter Your Real Name</Text>
      <TextInput style={Styles.inputBox}></TextInput>
      <Text style={[Styles.text, Styles.subText]}> Please Enter Room</Text>
      <TextInput style={Styles.inputBox}></TextInput>
    </SafeAreaView>
  );
};

export default JoinGamePage;

const Styles = StyleSheet.create({
  joinGameContainer: {
    backgroundColor: globalStyling.BLACK,
    justifyContent: 'flex-start',
  },

  text: {
    fontFamily: globalStyling.FONT,
    color: globalStyling.WHITE,
    alignSelf: 'center',
    textAlign: 'center',
  },

  headerText: {
    fontSize: 64,
    marginTop: 130,
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
