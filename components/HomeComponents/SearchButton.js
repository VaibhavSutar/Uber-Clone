import { View, Text, TouchableOpacityBase, TouchableOpacity, Platform } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../../redux/slices/navSlice';
import {GOOGLE_MAPS_APIKEY} from '@env'
import tw from 'twrnc';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
const SearchButton = () => {
  const navigation = useNavigation();
  const handleClick =()=>
  {
    navigation.navigate("MapScreen") 
  }
  
  return (
    <View style={tw`flex-row bg-gray-200 rounded-full ml-2 mr-1 p-3 items-center`}>
        <TouchableOpacity style={tw`flex-row items-center pr-10`} onPress={handleClick}>
            <Icon name='search' size={30} />
            <Text style={tw`text-xl text-gray-600 font-bold pl-4`}>
                Where to?
            </Text>
        </TouchableOpacity>
        <View style={tw`flex-col border-gray-100 border-l-2 h-full`}>
        </View>
        <View style={tw`pl-${Platform.OS==="ios"? 10:3}`}>
            <TouchableOpacity style={tw`flex-row items-center bg-gray-100 p-1 rounded-full`}>
                <Icon style={tw`pl-2`} name='schedule' size={25}/>
                <Text style={tw`pl-2`}>Now</Text>
                <Icon style={tw`pl-2 pr-3`} name='chevron-down-outline' type='ionicon' />
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default SearchButton