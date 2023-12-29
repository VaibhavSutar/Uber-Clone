import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import tw from 'twrnc';
const data = 
[
    {
        id: "1",
        title: "Shuttle",
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberX.png",
        screen: "Services"
    },
    {
        id: "2",
        title: "Ride",
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberX.png",
        screen: "Services"
    },
    {
        id: "3",
        title: "Intercity",
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberX.png",
        screen: "Services"
    },
    {
        id: "4",
        title: "Reserve",
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberX.png",
        screen:"Services"
    }
]
const Services = () => {
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-4xl font-bold pl-4 m-1`}>Services</Text>
      <View style={tw`m-5`}>
        <Text style={tw`text-xl font-semibold`}>Go anywhere, get anything</Text>
      </View>
    </SafeAreaView>
  )
}

export default Services