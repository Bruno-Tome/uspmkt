import { AppRegistry } from 'react-native';
import PaperProvider from 'react-native-paper';
import App from './App';
console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];

export default function Main() {
    return (
      <PaperProvider>
        <App />
      </PaperProvider>
    );
  }

  AppRegistry.registerComponent('main', () => Main);