
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import gridRender from './gridRender';


class Carrinho extends React.Component {
    state = {
        products:[]
    }
    static navigationOptions = {
        title: 'Carrinho',
        tabBarIcon: <Ionicons name ={'ios-basket'} size = {20}/>
    };
    state = {  }
    render() {
        return (
            gridRender()
            
            
                
            
        );
    }
}

export default Carrinho;