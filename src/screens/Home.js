
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { iOSUIKit } from 'react-native-typography';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Banner from "./Banner";
import Banner2 from "./Banner2";

const styles = StyleSheet.create({
  item:{
   alignItems:'center',
   justifyContent:'center',
   flexDirection:'row'
  },
  view:{
    flex:1,
    width: 150, 
    height: 150
    
  }

});
class HomeScreen extends React.Component {
    constructor(props){
      super(props);
      this.state = {}
    }
    
    static navigationOptions = {
      title: 'Home',
      tabBarIcon: <Ionicons name ={'ios-home'} size ={20}/>
    };
    componentWillMount(){
      this.startHeaderHeight = 80
      
    }

    font = {
      alignContent:"space-between",
       marginLeft:125}
    render() {
      

        
      return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{
              flex:1,
              
              flexDirection:'column'
              }}>
            <View style={{flex:1 ,backgroundColor:'white',borderBottomWidth: 1,justifyContent:'center',borderBottomColor:"#dddddd"}}>
              <View style ={{  backgroundColor:'#0095AD' ,alignContent:"center", padding: 20 }}>
                   <Text style= {iOSUIKit.largeTitleEmphasized}>Ola MKTUSP</Text>
              </View>

              <ScrollView style={{ 
                  flex: 1,

                  flexDirection: 'column',
                  padding:20
                  }}> 
                  <View><Banner image={require('./assets/extras/bannercaaso.png')} style = {{ width: 400, height: 200 }}/>
               
               </View>
                <View style = {{flex:1, flexDirection: 'row', justifyContent:'space-between', alignContent:"center", padding: 5, margin:5}}>
                  <View style = {styles.view}>
                   <Banner image={require('./assets/extras/atletica-caaso.jpg')}style = {{ width: 150, height: 150 }}></Banner> 
                  </View>
                 <View style = {styles.view}>
                    <Banner image={require('./assets/extras/sameca.png')}style = {{ width: 150, height: 150 }}></Banner>
                 </View>

                
                </View>

                <View style = {{flex:2, flexDirection: 'row',justifyContent:'space-around',alignContent:"center", padding: 5,margin:5}}>
                <View style = {styles.view}>
                   <Banner2 text = {'Escolha\n\n sua\n\n loja'}></Banner2>
                </View>
                <View style = {styles.view}>
                 <Banner image={require('./assets/extras/producao.jpeg')} style = {{ width: 150, height: 150 }}></Banner>
                </View>
                
                
                </View>
                <View style = {{flex:1, flexDirection: 'row', justifyContent:'space-between', alignContent:"center", padding: 5, margin:5}}>
                  <View style = {styles.view}>
                   <Banner image={require('./assets/extras/saecomp.jpeg')}style = {{ width: 150, height: 150 }}></Banner> 
                  </View>
                 <View style = {styles.view}>
                    <Banner image={require('./assets/extras/sacivil.png')}style = {{ width: 150, height: 150 }}></Banner>
                 </View>
                 
               
                </View>
                <View><Banner image={require('./assets/extras/tuscabanner.png')} style = {{ width: 500, height: 200 }}/>
               
               </View>
              </ScrollView> 
                
            </View>
          </View>
          
        </SafeAreaView>
          




        
        
      );
    }
  }


  export default HomeScreen;