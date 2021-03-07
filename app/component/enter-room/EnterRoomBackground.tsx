import React from 'react'
import {Image, ImageBackground, StyleSheet} from 'react-native'
export default (props) => {
    return (
        <ImageBackground
            style={[styles.backgroundImage, props.style]}
            source={require('../../assets/enterscreen-background/enterscreen-background.png')}
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