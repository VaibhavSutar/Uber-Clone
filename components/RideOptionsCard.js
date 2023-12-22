import { View, Text, SafeAreaView, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectTravelTimeInformation } from '../redux/slices/navSlice';
const data=[
  {
    id: "Uber-X-123",
    title: "UberX",
    mutiplier: 1,
    image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberX.png"
  },
  {
    id: "Uber-XL-456",
    title: "Uber XL",
    mutiplier: 1.2,
    image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberXL.png"
  },
  {
    id: "Uber-LUX-321",
    title: "Uber LUX",
    mutiplier: 1.75,
    image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/Lux.png"
  }
]
const SURGE_CHARGE_RATE = 20;
const RideOptionsCard = () => {
  const [selected, setSelected] = useState(null);
  const navigation = useNavigation();
  const travelTimeInfo = useSelector(selectTravelTimeInformation);
  console.log(selected);
  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity onPress={()=> navigation.navigate("NavigateCard")} 
        style={tw`absolute top-3  left-3 z-50 p-3 rounded-full`}>
        <Icon name='chevron-left' type='fontawesome' />
        </TouchableOpacity>
      <Text style={tw`text-center py-5 text-xl`}>Select a Ride - {travelTimeInfo?.distance.text}</Text>
      </View>
      
      <FlatList 
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item: {id, title, image, mutiplier}, item})=>
    (
      <TouchableOpacity style={tw`flex-row items-center justify-between px-10 ${id === selected?.id && "bg-gray-200"}`} 
      onPress={()=> setSelected(item)}
      >
        <Image style={
          {
            width: 100,
            height: 100,
            resizeMode: "contain"
          }
        } 
        source={{ uri: image}}
        />
        <View style={tw`-ml-6`}>
          <Text style={tw`text-xl font-semibold`}>{title}</Text>
          <Text>{travelTimeInfo?.duration.text}</Text>
        </View>
          <Text style={tw`text-xl`}>
            {new Intl.NumberFormat('en-gb',
            {
              style: 'currency',
              currency: 'INR'
            }).format(
              (travelTimeInfo?.duration.value * SURGE_CHARGE_RATE * mutiplier) /100
            )
            }
          </Text>

      </TouchableOpacity>
    )}

      />
      <View style={tw`mt-auto border-t border-gray-300 mt-2`}>

      </View>
      <View style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-100"}`} >
        <Text style={tw`text-center text-white text-xl`}>Choose {selected?.title}</Text>
      </View>
        
    </SafeAreaView>
  )
}

export default RideOptionsCard