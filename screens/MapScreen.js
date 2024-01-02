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
      <View style={tw`h-1/3.7 bg-gray-400`}>
      {/* <Stack.Navigator>
        <Stack.Screen
        name='NavigateCard'
        component={NavigateCard}
        options={{
          headerShown: false
        }}
  />
      </Stack.Navigator> */}
      <NavigateCard/>
      </View>
      <View style={tw`h-full bg-red-100`}>
      <Map />
      </View>
    </View>
  )
}

export default MapScreen