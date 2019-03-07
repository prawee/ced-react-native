// import library
import React from 'react';
import { View, Text, Button } from 'react-native';

// write component
// const AlbumList = () => 
//     <View>
//         <Text style={{ color: 'white', fontSize: 50 }}>
//             AlbumList
//         </Text>
//     </View>;
class AlbumList extends React.Component {
    state = { albums: [] };
    componentWillMount() {
        console.log('componentWillMount is called');
    }
    render() {
        console.log('render is called');
        console.log(this.state.albums);
        return (
            <View>
                <Text style={{ color: 'white', fontSize: 50 }}>              
                    {this.state.albums}
                </Text>
            </View>
        );
    }
}

// export 
export default AlbumList;
