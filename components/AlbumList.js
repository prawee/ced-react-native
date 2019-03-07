// import library
import React from 'react';
import { View, Text } from 'react-native';
import Axios from 'axios';

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
        Axios.get('http://rallycoding.herokuapp.com/api/music_albums')
            .then(response => console.log(response.data));
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
