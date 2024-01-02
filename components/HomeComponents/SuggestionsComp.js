import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import SuggestionsButtons from './SuggestionsButtons/SuggestionsButtons';

const SuggestionsComp = ({data}) => {
    const navigation = useNavigation();
  return (
    <View>
        <View style={tw`flex-row justify-between px-2 mt-2`}>
      <Text style={tw`font-bold text-lg`}>Suggestions</Text>
        <TouchableOpacity onPress={()=>
        {
            navigation.navigate('Services')
        }}>
            <Text style={tw`font-light`}>See All</Text>
        </TouchableOpacity>
        </View>
        {/* {Suggestions Buttons} */}
        <SuggestionsButtons data={data}/>
    </View>
  )
}

export default SuggestionsComp