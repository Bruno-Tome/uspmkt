import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Carrinho from './src/screens/Carrinho';
import Home from './src/screens/Home';
import Loja from './src/screens/Loja';

const MainNavigator = createBottomTabNavigator({
  Home: {screen: Home},
  Loja: {screen: Loja},
  Carrinho: {screen: Carrinho}
  },{
  tabBarOptions: {
    activeTintColor: '#0095AD',
    inactiveTintColor: 'gray'
  }

}
  
  );

  

const App = createAppContainer(MainNavigator);

export default App;