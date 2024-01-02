import { View, Text, TouchableOpacity, Platform } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Icon } from 'react-native-elements'
const OlderActivityBtn = () => {
  return (
      <TouchableOpacity  >
    <View style={tw`flex-row justify-between mt-6 mb-4 items-center`} >
        <Icon style={tw`pl-4`} name='watch-later' size={32} />
        <Text style={tw`text-lg pr-${Platform.OS="ios"?20:30} `}>View older activity</Text>
        <Icon  style={tw`pr-4`} color="gray" name='chevron-right' size={30} />
    </View>
        </TouchableOpacity>
  )
}

export default OlderActivityBtn