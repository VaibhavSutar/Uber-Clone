import { View, Text, SafeAreaView, Platform } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import SuggestionsButtons from '../../components/HomeComponents/SuggestionsButtons/SuggestionsButtons';
import BigSuggestionsButtons from '../../components/HomeComponents/SuggestionsButtons/BigSuggestionsButtons';
import { ServicesOptions , ServicesOptions2} from '../../lib/data';
const Services = () => {
  return (
    <SafeAreaView style={tw`bg-white flex-1 mt-12`}>
      <Text style={tw`text-4xl font-bold pl-4 m-1`}>Services</Text>
      <View style={tw`mt-8 pl-7`}>
        <Text style={tw`text-xl font-semibold`}>Go anywhere, get anything</Text>
      </View >
      <View style={tw`mt-2 pl-${Platform.OS === 'ios' ? 6 : 0}`}>
      <BigSuggestionsButtons data={ServicesOptions2} />
      </View>
      <View style={tw`pl-${Platform.OS === 'ios' ? 4 : 1}`}>
      <SuggestionsButtons data={ServicesOptions} />
      </View>
    </SafeAreaView>
  )
}

export default Services