import React from 'react';
import { View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Banner from './Banner';
class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Home',
      tabBarIcon: <Ionicons name ={'ios-home'}/>
    };

    render() {
      
      const {navigate} = this.props.navigation;
      
      return (
        <View style={{ 
          flex: 1,
          alignItems:'center',
          justifyContent:'center'
          }}>
              <Banner></Banner>
              </View>
        
      );
    }
  }

  export default HomeScreen;