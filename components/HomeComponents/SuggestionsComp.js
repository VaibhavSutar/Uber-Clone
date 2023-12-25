import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
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
const SuggestionsComp = () => {
    const navigation = useNavigation();
  return (
    <View>
        <View style={tw`flex-row justify-between px-2`}>
      <Text style={tw`font-bold text-lg`}>Suggestions</Text>
        <TouchableOpacity onPress={()=>
        {
            navigation.navigate('Services')
        }}>
            <Text style={tw`font-light`}>See All</Text>
        </TouchableOpacity>
        </View>
        {/* {Suggestions Buttons} */}
        <View>
                <FlatList 
                data={data}
                horizontal
                keyExtractor={(item)=> item.id}
                renderItem={({item})=> 
                <View style={tw`flex-col items-center px-1`}>
                    {/* {Promo is left} */}
            <TouchableOpacity style={tw`pl-3 pb-1 pt-0 bg-gray-200 mt-4 w-22 rounded-xl` }
            onPress={()=>
                {
                    navigation.navigate(item.screen)
                }}
            >
                <Image style={[tw``,{height:80, width:80 , resizeMode:"contain", alignItems:"center"}]} source={{uri: item.image}} />
            </TouchableOpacity>
            <Text style={tw`mt-2 text-sm font-light`}>
                    {item.title}
            </Text>
                </View>
                
                }
                />
        </View>
    </View>
  )
}

export default SuggestionsComp