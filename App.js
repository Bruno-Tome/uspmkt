import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import './src/config/StatusBarConfig';
import Carrinho from './src/screens/Carrinho';
import Home from './src/screens/Home';
import Loja from './src/screens/Loja';

const MainNavigator = createBottomTabNavigator({
  Home: { screen: Home },
  Loja: { screen: Loja },
  Carrinho: { screen: Carrinho }
}, {
  tabBarOptions: {
    activeTintColor: 'red',
    inactiveTintColor: 'gray',
  },
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#DA552F'
    },
    headerTintColor: '#FFF',
  }
}

);



const App = createAppContainer(MainNavigator);

export default App;