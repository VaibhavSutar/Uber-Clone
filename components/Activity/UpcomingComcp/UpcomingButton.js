import { View, Text, TouchableOpacity, Platform } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Icon } from 'react-native-elements'
const UpcomingButton = () => {
  return (
    <View>
      <TouchableOpacity style={tw`ml-4 mr-4 flex-row border-2 border-gray-100 rounded-xl items-center`}>
        <View style={tw`ml-1 mt-4 mb-4 w-${Platform.OS === "ios"? 70 : 68} `}>
        <Text style={tw`text-2xl pl-4 font-semibold text-gray-600 w-${Platform.OS === "ios"? 78 : 67}`}>
            You have no upcoming trips
        </Text>
        <View style={tw`flex-row items-center`}>
        <Text style={tw`text-xl pl-4 font-normal text pr-1`}>
            Reserve your ride
        </Text>
        <Icon   name='arrow-forward'/>
        </View>
        </View>
        <Icon style={tw`pl-${Platform.OS === "ios" ? 7 : 2}`} name='add' />
      </TouchableOpacity>
    </View>
  )
}

export default UpcomingButton