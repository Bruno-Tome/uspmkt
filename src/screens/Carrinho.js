
import React from 'react';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';



class Carrinho extends React.Component {
    state = {
        products:[]
    }
    static navigationOptions = {
        title: 'Carrinho',
        tabBarIcon: <Ionicons name ={'ios-cart'}/>
    };
    state = {  }
    render() {
        return (
            <View style={{ 
                flex: 1,
                alignItems:'center',
                justifyContent:'center'
                }}>
                    <Text>Olá carrinho</Text>
                    </View>
            
                
            
        );
    }
}

export default Carrinho;