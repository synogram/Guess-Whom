import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { globalStyling } from '../styles/global';

const EnterButton = () => {
  return (
    <View style={Styles.buttonContainer}>
      <TouchableHighlight style={Styles.button}>
        <Text style={Styles.buttonText}>Enter</Text>
      </TouchableHighlight>
    </View>
  );
};

export default EnterButton;

const Styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  button: {
    borderColor: 'white',
    paddingTop: 20,
    paddingBottom: 20,
    width: 275,
    backgroundColor: globalStyling.GREY,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 32,
    textAlign: 'center',
    textAlignVertical: 'auto',
    color: globalStyling.WHITE,
  },
});
