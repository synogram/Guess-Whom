import React from 'react'
import { ImageBackground, StyleSheet } from 'react-native'
import BackgroundImage from '../../assets/enterscreen-background/enterscreen-background.png';

export default (props) => {
    return (
        <ImageBackground
            style={[styles.backgroundImage, props.style]}
            source={BackgroundImage}
            // imageStyle={}
        >
            { props.children }
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      alignSelf: 'stretch',
      width: null,
    }
  });