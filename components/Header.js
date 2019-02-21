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
    color: 'black'
  },
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    position: 'relative'
  }
};

export default (props) => 
  <View style={styles.viewStyle}>
    <Text style={styles.textStyle}>{props.title}</Text>
  </View>;
