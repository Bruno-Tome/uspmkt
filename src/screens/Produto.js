import React from 'react';
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import ADD_TO_CART from '../store/actions';



class Produto extends React.Component {
    addToCart = () => {
        dispatch(ADD_TO_CART(this))
        console.log(store.getState())
    }
     str = this.props.image
    state = { 
        productName: this.props.productName,
        loja: this.props.loja ,
        preco: this.props.preco,
        image: this.props.image
     }
    estilo ={
        style: {
            width: 100,
             height: 100,
            padding: 20 }
     }
    render() {
        return (
            <TouchableOpacity onpress = {() => this.addToCart  } >
            <View>
                <Text>
                    {this.state.productName}
                </Text>
                <Image source={this.str} style={this.estilo.style}/>

                <Text>
                    {this.state.loja}
                </Text>

                <Text>
                    {this.state.preco}
                </Text>


            </View>
            </TouchableOpacity>
            
            
        );
    }
}
const styles = StyleSheet.create({
    
});
export default Produto;