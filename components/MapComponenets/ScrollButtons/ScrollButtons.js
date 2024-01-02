import { View, Text,ScrollView, TouchableOpacity, FlatList} from 'react-native'
import React from 'react'
import tw from "twrnc"
import { ScrollbtnOptions } from '../../../lib/data'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
const ScrollButtons = ({data}) => {
    const navigation = useNavigation();
    console.log(ScrollbtnOptions);
    console.log(data);
  return (
    <ScrollView horizontal bounces={false} showsHorizontalScrollIndicator={false}>
      {data.map ((item) => 
        <TouchableOpacity style={tw`flex-row bg-gray-200 p-2 ml-4 mt-2 items-center rounded-2xl`} onPress={()=> {navigation.navigate(ScrollbtnOptions[0].screen)}}>
            <Icon name={item.icon1} size={23} style={tw`pl-1 pr-2`}/>
            <Text>{item.title}</Text>
            <Icon name={item.icon2} size={23} style={tw`pl-1 pr-2`}/>
        </TouchableOpacity>
      
      )}
    </ScrollView>
  )
}

export default ScrollButtons