import React from 'react';
import { Image, View } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';

class Banner extends React.Component {
    state = { 
        
        imagesrc: this.props.image
        ,
        


     }
     navigator = () => {
        this.props.navigation.navigate('Loja', {})
    }
    render() {
        return (
            <TouchableOpacity onPress={this.navigator}>
                <View height = {150}  width = {150}>
                <Image source={this.state.imagesrc} style={this.props.style} resizeMode ='contain' />
             </View>
            </TouchableOpacity>
            
            
        );
    }
}

export default withNavigation(Banner);

