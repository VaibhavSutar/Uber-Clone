import { FlatList, Text, TouchableOpacity, View } from 'react-native'
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
    location: "Mira Road",
    destination: "Mira Road,Palghar"
    }
    
]
const NavFavourites = () => {    
  return <FlatList
   data={data}
   keyExtractor={(item)=> item.key}
   ItemSeparatorComponent={()=>{
    <View style={tw`flex-col border-b-2 border-gray-100 ml-13 w-90`} ></View>
    }}
    renderItem={({item : {location,destination,icon}})=>
    (
      <View>

      <TouchableOpacity style={tw`flex-row items-center pl-1 m-1 pr-3 p-2`}>
    <Icon 
    style={tw`rounded-full bg-gray-300 p-1.3`}
    name={icon}
    type='ionicon'
    color="black"
    size={20}
    />
    <View style={tw`pl-4 ml-3 w-80 p-2`}>
      <Text style={tw`font-medium text-lg`}>{location}</Text>
      <Text style={tw`text-gray-500`}>{destination}</Text>
      </View>
      <Icon 
    style={tw`pr-3`}
    name="chevron-forward-outline"
    type='ionicon'
    color="gray"
    size={20}
    />
 </TouchableOpacity>
 {/* <View style={tw`flex-col border-b-2 border-gray-100 ml-13 w-90`} ></View> */}
    </View>
)}
/>
}
export default NavFavourites