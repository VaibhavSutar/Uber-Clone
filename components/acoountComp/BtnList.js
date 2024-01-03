import { View, Text, TouchableOpacity, FlatList, TouchableHighlight } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import tw from 'twrnc'

const BtnList = ({data}) => {
  return (
    <FlatList 
    data={data}
    keyExtractor={(item)=> item.key}    
    renderItem={({item})=>
    <View>
        <TouchableHighlight 
        activeOpacity={0.6}
        underlayColor="#ffff"
        >

      <TouchableOpacity style={tw`flex-row items-center ml-4 mt-4`}>
        <Icon style={tw`p-2`} name={item.icon} type={item.type}  />
        <Text style={tw`p-2 text-lg`}>{item.title}</Text>
      </TouchableOpacity>
        </TouchableHighlight>
    </View>
}
    />
  )
}

export default BtnList