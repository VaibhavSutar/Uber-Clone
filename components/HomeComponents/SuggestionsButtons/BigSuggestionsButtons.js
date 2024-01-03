import { View, Text, TouchableOpacity, Image, FlatList, Platform } from 'react-native'
import React from 'react'
import tw from 'twrnc';
const BigSuggestionsButtons = ({data}) => {
    return (
        <View>
        <FlatList 
        data={data}
        horizontal
        keyExtractor={(item)=> item.key}
        renderItem={({item})=> 
        <View style={tw`flex-col items-center pl-4 pr-${Platform.OS == "ios" ? 4: 0}`}>
            {/* {Promo is left} */}
        <TouchableOpacity style={tw`pl-3 pb-1 bg-gray-200 mt-1 w-25  h-25 rounded-xl items-center` }
        onPress={()=>
          {
            navigation.navigate(item.screen)
          }}
          >
        <Image style={[tw``,{height:70, width:70 , resizeMode:"contain", alignItems:"center"}]} source={{uri: item.image}} />
    <Text style={tw`mt-2 text-sm font-light pr-2`}>
            {item.title}
    </Text>
    </TouchableOpacity>
        </View>
        
        }
        />
    </View>
      )
}

export default BigSuggestionsButtons