import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import Produto from './Produto';
class Profile extends React.Component {
    static navigationOptions = {
        title: 'Loja'
    };
 render() {
 return (
    <SafeAreaView style={{flex: 1}}>
    <View style={{
      flex:1,
      
      flexDirection:'column'
      }}>
    <View style={{flex:1 ,backgroundColor:'white',borderBottomWidth: 1,justifyContent:'center',borderBottomColor:"#dddddd"}}>
      <View style ={{  backgroundColor:'white' ,alignContent:"center", padding: 20 }}>
           <Text>Loja</Text>
      </View>

      <ScrollView style={{ 
          flex: 1,
          alignContent: 'center',
          flexDirection: 'column',
          padding:20
          }}> 
        <View style = {{flex:1, flexDirection: 'row', justifyContent:'space-around', alignContent:"center", padding: 5, margin:5}}>
          <Produto loja ="ATLETICA" preco ={100} image ={require('./assets/produtos/calca-moletom.jpeg')} productName="Calça"/>
          <Produto loja ="ATLETICA" preco ={100} image ={require('./assets/produtos/calca-moletom.jpeg')} productName="Calça"/>
          <Produto loja ="ATLETICA" preco ={100} image ={require('./assets/produtos/calca-moletom.jpeg')} productName="Calça"/>
        <Produto></Produto>
        <Produto></Produto>
        
        
        </View>

        <View style = {{flex:2, flexDirection: 'row',justifyContent:'space-around',alignContent:"center", padding: 5,margin:5}}>
        <Produto></Produto>
        <Produto></Produto>
        <Produto></Produto>
        
        </View>
      </ScrollView> 
        
    </View>





    
  </View>
  
</SafeAreaView>
);
}
}
export default Profile;