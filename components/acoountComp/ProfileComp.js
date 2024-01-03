import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Icon } from 'react-native-elements'
const ProfileComp = () => {
  return (
    <View style={tw`flex-row justify-between mt-4 pl-5 pr-5`}>
        <View>
      <Text style={tw`text-3xl font-bold`}>Vaibhav Sutar</Text>
      <View style={tw`bg-gray-100 w-15 flex-row p-1 items-center mt-2`}>
        <Icon style={tw`pr-2`} name='star'  color="gray" size={20}/>
        <Text>5.0</Text>
      </View>
        </View>
      <View style={tw`bg-gray-100 w-20 h-20 rounded-full`}>
      <Icon style={tw`justify-center pt-3`} name='person' color="gray" size={46} />
      </View>
      </View>
  )
}

export default ProfileComp