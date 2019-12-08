import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
class Profile extends React.Component {
    static navigationOptions = {
        title: 'Loja',
        tabBarIcon: <Ionicons name ={'ios-cart'} size ={20}/>
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
        <View style = {{flex:1, flexDirection: 'row', justifyContent:'space-between', alignContent:"center", padding: 10, margin:10, marginLeft:20 }}>
          
        
        
        </View>

        
      </ScrollView> 
        
    </View>


    {/* <Produto loja ="ATLETICA" preco ={100} image ={require('./assets/produtos/calca-moletom.jpeg')} productName="Calça"/>
          <Produto loja ="ATLETICA" preco ={100} image ={require('./assets/produtos/calca-moletom.jpeg')} productName="Calça"/>
          <Produto loja ="ATLETICA" preco ={100} image ={require('./assets/produtos/calca-moletom.jpeg')} productName="Calça"/>
        <Produto></Produto>
        <Produto></Produto> */}


    
  </View>
  
</SafeAreaView>
);
}
}
export default Profile;