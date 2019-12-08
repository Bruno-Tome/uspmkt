import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Banner from "./Banner";
import Banner2 from "./Banner2";

const styles = StyleSheet.create({
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  view: {

  }

});
class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  static navigationOptions = {
    title: 'Home',
    tabBarIcon: <Ionicons name={'ios-home'} />
  };
  componentWillMount() {
    this.startHeaderHeight = 80

  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{
          flex: 1,

          flexDirection: 'column'
        }}>
          <View style={{ flex: 1, backgroundColor: 'white', borderBottomWidth: 1, justifyContent: 'center', borderBottomColor: "#dddddd" }}>
            <View style={{ backgroundColor: 'white', alignContent: "center", padding: 20 }}>
              <Text>Ola MKTUSP</Text>
            </View>

            <ScrollView style={{
              flex: 1,
              alignContent: 'flex-start',
              flexDirection: 'column',
              padding: 20
            }}>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignContent: "center", padding: 5, margin: 5 }}>

                <Banner></Banner>
                <Banner></Banner>
              </View>

              <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-around', alignContent: "center", padding: 5, margin: 5 }}>
                <Banner2 text={'Escolha\n\n sua\n\n loja'}></Banner2>
                <Banner></Banner>
              </View>
            </ScrollView>

          </View>






        </View>

      </SafeAreaView>







    );
  }
}


export default HomeScreen;