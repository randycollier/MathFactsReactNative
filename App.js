/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
} from 'react-native';

import HelloWorldApp from './Hello';
import ButtonTest from './components/button';
import MathApp from './Math/handler';
import Hello from './Hello';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        {/* <View style={styles.grades}>
          <ButtonTest message={'1'} />
          <ButtonTest message={'2'} />
          <ButtonTest message={'3'} />
        </View> */}
        
        <Hello msg={'Doody'} />
        <MathApp style={styles.content} msg={'Doody'} />
        
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // display:flex,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
    paddingTop:40,
  },
  grades: {
    flex: 1,
    // display:flex,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop:40,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  nav: {
    flex: .25,
    backgroundColor: 'powderblue',
    width:'100%',
  },
  content: {
    flex:1,
    
    backgroundColor: 'green',
    width:'100%',
  }
});
