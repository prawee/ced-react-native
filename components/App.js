import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from './Header';

export default class App extends Component {
    render() {
        return (
            <View>
                <Header />
                <Text>Demo</Text>
            </View>
        );
    }
}
