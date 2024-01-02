import { View, Text, FlatList, TouchableOpacity ,Image, Platform} from 'react-native'
import React from 'react'
import RebookButton from './RebookButton'
import tw from 'twrnc'
const PastList = ({data}) => {
  return (
    <View>
      <FlatList
      data={data}
      keyExtractor={ item => item.id}
      ItemSeparatorComponent={
          <View style={tw`border w-83 ml-29 mt-2 border-gray-100`}></View>
      }
      renderItem={({item})=>
    (
      <TouchableOpacity style={tw`flex-row justify-between items-center mt-4 pl-4`}>
        <View style={tw`w-20 h-18 rounded-xl m-1 bg-gray-200 items-center`}>
          <Image style={[tw`w-15 h-15`,{resizeMode:"contain"}]} source={{uri: item.img}} />
        </View>
        <View  style={tw`flex-col pr-${Platform.OS === "ios" ? 15: 0}`}>
        <Text style={tw`text-lg font-semibold`}>{item.destination}</Text>
        <Text>{item.date} . {item.time}</Text>
        <Text>₹ {item.fare} . {item.status}</Text>
        </View>
        <View style={tw`mr-4`}>
          <RebookButton />
        </View>
      </TouchableOpacity>
    )
    }
      />
    </View>
  )
}

export default PastList