import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from "@env";
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../redux/slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import NavFavourites from './NavFavourites';
import { Icon } from 'react-native-elements';
import ScrollButtons from './MapComponenets/ScrollButtons/ScrollButtons';
import { ScrollbtnOptions } from '../lib/data';
import AutoCompleteComp from './MapComponenets/AutoCompleteComp/AutoCompleteComp';
const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`bg-white`}>
      <View>
        <View style={tw`flex-row items-center px-4 justify-between`}>
          <TouchableOpacity onPress={()=> {navigation.navigate("Home")}}>
        <Icon name='arrow-back' type='ionicons' color="black" size={25} style='outline' />
          </TouchableOpacity>
      <Text style={tw`text-center py-1 pr-33 text-xl`}>Plan your ride</Text>
        </View>
        <ScrollButtons data={ScrollbtnOptions} />
      <View style={tw``}>
        <AutoCompleteComp />
      </View>

      </View>
    </SafeAreaView>
  )
}

export default NavigateCard

const InputStyles =
 StyleSheet.create
 (
  {
    container:
    {
      backgroundColor: "black",
      padding: 0,
      flex: 0
    },
    textInput:
    {
      backgroundColor: "#DDDDDF",
      borderRadius: 0,
      fontSize: 18
    },
    textInputContainer:
    {
      paddingHorizontal: 20,
      paddingBottom: 10,
      width: 380,
    }
  }
 );