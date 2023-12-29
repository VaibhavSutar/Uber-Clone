import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import tw from 'twrnc';
const SuggestionsButtons = ({data}) => {
  return (
    <View>
    <FlatList 
    data={data}
    horizontal
    keyExtractor={(item)=> item.id}
    renderItem={({item})=> 
    <View style={tw`flex-col items-center px-2`}>
        {/* {Promo is left} */}
    <TouchableOpacity style={tw`pl-3 pb-1 bg-gray-200 mt-4 w-20 rounded-xl` }
    onPress={()=>
    {
        navigation.navigate(item.screen)
    }}
    >
    <Image style={[tw``,{height:70, width:70 , resizeMode:"contain", alignItems:"center"}]} source={{uri: item.image}} />
</TouchableOpacity>
<Text style={tw`mt-2 text-sm font-light`}>
        {item.title}
</Text>
    </View>
    
    }
    />
</View>
  )
}

export default SuggestionsButtons