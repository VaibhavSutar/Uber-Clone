import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import tw from 'twrnc'
const RebookButton = ({handlePress}) => {
  return (
    <TouchableOpacity style={tw`flex-row bg-gray-300 w-25 mt-2 mb-0 rounded-2xl p-2 items-center`} onPress={handlePress}>
                <Icon style={tw`pr-1`} name="refresh" />
                <Text style={tw`pr-2`}>Rebook</Text>
    </TouchableOpacity>
  )
}

export default RebookButton