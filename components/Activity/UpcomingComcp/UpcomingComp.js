import { View, Text } from 'react-native'
import React from 'react'
import tw from "twrnc"
import UpcomingButton from './UpcomingButton'
const UpcomingComp = () => {
  return (
    <View>
        <View style={tw`mt-4`}>
      <Text style={tw`m-1 mb-5  pl-2 font-semibold text-xl`}>Upcoming</Text>
    <UpcomingButton />
        </View>
    </View>
  )
}

export default UpcomingComp