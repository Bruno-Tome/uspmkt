import React from 'react';
import { Text, View } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { iOSUIKit } from 'react-native-typography';
import { withNavigation } from 'react-navigation';
class Banner2 extends React.Component {
    state = { 
        imagesrc: "image-url"
        ,

     }
     textStyle = {

        fontSize: 34,
        

    }
     navigator = () => {
        this.props.navigation.navigate('Loja', {})
    }

    
    render() {

        return (
            <TouchableOpacity onPress={this.navigator}>
                <View style ={{width: 150, height: 150}}>
                <Text textsize= {30 } style={iOSUIKit.bodyEmphasized}>{this.props.text}</Text>
             </View>
            </TouchableOpacity>
            
            
        );
    }
}

export default withNavigation(Banner2);

