import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { Icon } from 'react-native-elements';
const data=
[
    {
        id: 1,
        icon: "home",
        location: "Home",
        destination: "Code Street, London, Uk"
    },
    {
    id: 2,
    icon: "briefcase",
    location: "Work",
    destination: "london Eye, London, Uk"
    }
    
]
const NavFavourites = () => {
  return (
    <>
      <Text style={tw`text-black bg-gray-500`}>NavFavourites</Text>
   <FlatList
   data={data}
   keyExtractor={(item)=> item.id}
   renderItem={({item:{location,destination,icon}})=>
   {
       <TouchableOpacity>
    <Icon 
    style={tw`mr-4 rounded-full bg-gray-300 p-3`}
    name={icon}
    type='ionicon'
    color="white"
    size={18}
    />
 </TouchableOpacity>
}}
/>
</>
  )
}

export default NavFavourites

const styles = StyleSheet.create({})