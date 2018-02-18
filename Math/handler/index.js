import React, { Component } from 'react';
import { AppRegistry, Text, Button, View, Alert, FlatList } from 'react-native';
import MathFacts from 'MathFacts';
import {Cat} from 'webpack-library-starter';
import { mapValues, values, map, keys} from 'lodash';
export default class MathApp extends Component {

  constructor () {
    
    super()
    this.state = {
      selectedIndex: 2
    }
    
    this.updateIndex = "this.updateIndex.bind(this)"
    this.myMath = new MathFacts();
    this.myMath.setParameters({count:100});
    
  }
  getMath=()=>{
    const stuff= this.myMath.addition();
    
    const sentObj = this.myMath.getMathSentances();
    const keys = Object.keys(sentObj);
    const objs = Object.values(sentObj);
    
    // const stuff = values(mapValues(sentObj, 'question'))
    
    const mymap =  map(objs, (obj, index)=>{
      obj['id']= index;
      return obj;
    });
    debugger;
    return mymap;

  }
  render() {
    
    const {msg, style} = this.props;
    handler = () =>{
      
    }
    return (
        <View style={style} >
          <Text>Hello world!!!{this.updateIndex} {msg}</Text>
  
          <Button
        onPress={() => {
          Alert.alert('You tapped the button!');
        }}
        title="Press Me"
      />
      <FlatList
        data={this.getMath()}
        renderItem={({item}) => <Text keyExtractor={item.id}>{item.question.join('')}</Text>}
        keyExtractor={(item, index) => index}
      />

      
        </View>
    );
  }
}

AppRegistry.registerComponent('ReactCalculator', () => MathApp);
