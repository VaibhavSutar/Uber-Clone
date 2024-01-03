import { View, Text, TouchableOpacity, FlatList, Platform, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

const Bigbutton = ({data}) => {
    const navigation = useNavigation();
return (
    <View>
    <FlatList 
    data={data}
    horizontal
    keyExtractor={(item)=> item.key}
    renderItem={({item})=> 
    <View style={tw`flex-col items-center px-${Platform.OS === "android" ? 1.5 : 4}`}>
        {/* {Promo is left} */}
    <TouchableOpacity style={tw`pl-3 pb-1 bg-gray-200 mt-4 w-25 h-22 rounded-xl items-center` }
    onPress={()=>
      {
        navigation.navigate(item.screen)
      }}
      >
        <View style={tw`mt-4 mr-3`}>
    <Icon name={item.icon} type={item.type} size={30}/>
        <Text style={tw`text-lg`}>
        {item.title}
        </Text>
        </View>
</TouchableOpacity>
    </View>
    
    }
    />
</View>
  )
}

export default Bigbutton