
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './src/screens/Navigator';
import { RecoilRoot } from 'recoil';

export default function App() {
  return (
    <RecoilRoot>
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
