import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import HomeScreen from './screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'//
import {createStackNavigator} from '@react-navigation/stack'
import MapScreen from './screens/MapScreen';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <Provider store ={store}>
      <NavigationContainer>
        <Stack.Navigator>
    <Stack.Screen name='HomeScreen' component={HomeScreen} options={{headerShown: false}} />
    <Stack.Screen name='MapScreen' component={MapScreen} options={{headerShown: false}} />

        </Stack.Navigator>
      <SafeAreaProvider>
      {/* <HomeScreen/> */}
      </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
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
