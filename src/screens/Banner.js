import React from 'react';
import { Image, View } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';

class Banner extends React.Component {
    state = { 
        imagesrc: "image-url"
        ,


     }
     navigator = () => {
        this.props.navigation.navigate('Loja')
    }
    render() {
        return (
            <TouchableOpacity onPress={this.navigator}>
                <View>
                <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}} style={{ width: 500, height: 200 }} />
             </View>
            </TouchableOpacity>
            
            
        );
    }
}

export default withNavigation(Banner);

