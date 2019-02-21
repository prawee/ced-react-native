import React from 'react';
import { View, Text } from 'react-native';
import Header from './Header';

class About extends React.Component {
    render() {
        return (
            <View>
                <Header title={'เกี่ยวกับตัวฉัน'} />
                <Text>Prawee Wongsa</Text>
                <Text>4820750141</Text>
            </View>
        );
    }
}

export default About;
