import React from 'react';
import { View, Text } from 'react-native';

// export default class Menu extends Component {
//   render() {
//     return (<View><Text>Menu</Text></View>);
//   }
// }

// const Menu = () => 
//   <View>
//     <Text style={{ fontSize: 50, color: 'blue' }}>Menu</Text>
//   </View>;
// export default Menu;

const styles = {
  textStyle: {
    fontSize: 50,
    color: 'white'
  },
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  }
};

export default () => 
  <View style={styles.viewStyle}>
    <Text style={styles.textStyle}>Menu</Text>
  </View>;
