import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Menu from './Menu';

export default class App extends Component {
    render() {
        return (
            <View>
                <Menu />
                <Text>Demo</Text>
            </View>
        );
    }
}
