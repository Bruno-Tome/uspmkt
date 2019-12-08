import React from 'react';
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import ADD_TO_CART from '../store/actions';



class Produto extends React.Component {
    addToCart = () => {
        dispatch(ADD_TO_CART(this))
        console.log(store.getState())
    }
    state = { 
        productName: 'nome',
        loja: 'SAMECA',
        preco: '100',
        image:{
             uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
             style: {
                  width: 100,
                   height: 100,
                  padding: 20 }
             
        }
     }
    render() {
        return (
            <TouchableOpacity onpress = {() => this.addToCart  } >
            <View>
                <Text>
                    {this.state.productName}
                </Text>
                <Image source={{uri: this.state.image.uri}} style={this.state.image.style}/>

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