import React, { Component } from 'react';
import { AppRegistry, Text, Button, View, Alert } from 'react-native';

export default class HelloButton extends Component {
  
  render() {
    const {msg, style} = this.props;
    handler = () =>{
      //
    }
    return (
        <View style={style} >
          <Text>Hello world! {msg}</Text>
          <Button
        onPress={() => {
          Alert.alert('You tapped the button!');
        }}
        title="Press Me"
      />
        </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('ReactCalculator', () => HelloButton);
