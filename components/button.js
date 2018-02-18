import React from 'react';
import { AppRegistry, Button, View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native';

export default ButtonTest = ({message}) => {

  return (
    <TouchableOpacity>
          <View style={styles.button}>
            <Text style={styles.buttonText}>{message}</Text>
          </View>
        </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
 
  button: {
    width: 50, height: 50, backgroundColor: 'powderblue'
  },
  buttonText: {
    padding: 15,
    color: 'white'
  }
})


AppRegistry.registerComponent('AwesomeProject', () => ButtonTest);