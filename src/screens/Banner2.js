import React from 'react';
import { Text, View } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';

class Banner2 extends React.Component {
    state = { 
        imagesrc: "image-url"
        ,
        


     }
     navigator = () => {
        this.props.navigation.navigate('Loja', {})
    }
    render() {
        return (
            <TouchableOpacity onPress={this.navigator}>
                <View style ={{width: 100, height: 100}}>
                <Text textsize= {20 }>{this.props.text}</Text>
             </View>
            </TouchableOpacity>
            
            
        );
    }
}

export default withNavigation(Banner2);

