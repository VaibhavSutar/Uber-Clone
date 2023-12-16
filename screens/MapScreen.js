import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import Map from '../components/Map';
import { createStackNavigator } from '@react-navigation/stack';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';
const MapScreen = () => {
  const Stack = createStackNavigator();
  return (
    <View>
      <View style={tw`h-1/2 bg-black`}>
      <Map />
      </View>
      <View style={tw`h-1/2 bg-red-100`}>
      <Stack.Navigator>
        <Stack.Screen
        name='Navigate Card'
        component={NavigateCard}
        options={{
          headerShown: false
        }}
  />
  <Stack.Screen
        name='RideOptionsCard'
        component={RideOptionsCard}
        options={{
          headerShown: false
        }}
  />
      </Stack.Navigator>
      </View>
    </View>
  )
}

export default MapScreen