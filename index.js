import {AppRegistry, View, Text} from 'react-native';
import {name as appName} from './app.json';
import React, {Component} from 'react';
import Menu from './components/Menu';

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