import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { Icon } from 'react-native-elements';
const data=
[
    {
        id: 1,
        icon: "location",
        location: "Gorai Creek",
        destination: "Lokmanya Tilak Road,Gorai 3, Borivali-West"
    },
    {
    id: 2,
    icon: "location",
    location: "Mira Road Railway Staion",
    destination: "Mira Road,Palghar"
    }
    
]
const NavFavourites = () => {
  return <FlatList
   data={data}
   keyExtractor={(item)=> item.id}
   ItemSeparatorComponent={()=>{
    <View style={[tw`flex-col border-2 border-gray-200`,{height: 0.5}]}></View>
   }}
   renderItem={({item : {location,destination,icon}})=>
   (
      <TouchableOpacity style={tw`flex-row items-center p-5`}>
    <Icon 
    style={tw`mr-4 rounded-full bg-gray-300 p-3`}
    name={icon}
    type='ionicon'
    color="black"
    size={20}
    />
    <View>
      <Text style={tw`font-semibold text-lg`}>{location}</Text>
      <Text style={tw`text-gray-500`}>{destination}</Text>
    </View>
 </TouchableOpacity>
)}
/>
}
export default NavFavourites

const styles = StyleSheet.create({})