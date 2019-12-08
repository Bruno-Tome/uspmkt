import React from 'react';
import { View } from 'react-native';
import Produto from './Produto';
class Profile extends React.Component {
    static navigationOptions = {
        title: 'Loja'
    };
 render() {
 return (
    <View style={{ 
        marginHorizontal:10,
        marginTop:200,
    flex: 1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    justifyContent:"space-between",
    flexWrap:'wrap'
    }}>
        <Produto/>
        <Produto/>
        <Produto/>
        <Produto/>
        <Produto/>
        <Produto/>
        <Produto/>
        <Produto/>
        <Produto/>
        <Produto/>
        <Produto/>
        <Produto/>
        </View>
);
}
}
export default Profile;