import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet} from 'react-native';
import RootNavigator from './Src/Navigation/RootNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
      
  );
}
