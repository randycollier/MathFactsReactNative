import React, { Component } from 'react';
import { AppRegistry, Text, Button, View, Alert } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
export default class HelloWorldApp extends Component {
  
  constructor () {
    super()
    this.state = {
      selectedIndex: 2
    }
    this.updateIndex = this.updateIndex.bind(this)
  }

  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }
  render() {
    
    const buttons = ['Hello', 'World', 'Buttons']
    const { selectedIndex } = this.state
    const {msg, style} = this.props;
    
    return (
        <View style={style} >

<ButtonGroup
      onPress={this.updateIndex}
      selectedIndex={selectedIndex}
      buttons={buttons}
      containerStyle={{height: 100}}
    />


          <Text>Hello world! {msg}</Text>
          <Button
        onPress={() => {
          Alert.alert('You tapped the button!!!!');
        }}
        title="Press Me"
      />
        </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('ReactCalculator', () => HelloWorldApp);
