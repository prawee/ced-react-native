// import library
import React from 'react';
import { View, Text } from 'react-native';

// write component
// const AlbumList = () => 
//     <View>
//         <Text style={{ color: 'white', fontSize: 50 }}>
//             AlbumList
//         </Text>
//     </View>;
class AlbumList extends React.Component {
    render() {
        return (
            <View>
                <Text style={{ color: 'white', fontSize: 50 }}>
                    AlbumList
                </Text>
            </View>
        );
    }
}

// export 
export default AlbumList;
