import {AppRegistry, View, Text} from 'react-native';
import {name as appName} from './app.json';
import React, {Component} from 'react';

class Menu extends Component {
  render() {
    return (<View><Text>Menu</Text></View>)
  }
}

class Demo extends Component {
  render() {
    return (
      <View>
        <Menu/>
        <Text>Demo</Text>
      </View>
    )
  }
}

AppRegistry.registerComponent(appName, () => Demo);