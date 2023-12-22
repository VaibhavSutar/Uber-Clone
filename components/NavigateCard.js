import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from "@env";
import { useDispatch } from 'react-redux';
import { setDestination } from '../redux/slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import NavFavourites from './NavFavourites';
import { Icon } from 'react-native-elements';
const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <View>
      <Text style={tw`text-center py-5 text-xl`}>Good Morning, User</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <GooglePlacesAutocomplete 
          styles={InputStyles}
          onPress={(data, details = null)=>
          {
            dispatch(setDestination(
              {
                location : details.geometry.location,
                description : data.description 
              }
            ))
            navigation.navigate("RideOptionsCard")
            console.log(data);
          }}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language:"en"
          }}
          fetchDetails={true}
          returnKeyType={"search"}
          placeholder='Where to?'
          listViewDisplayed='auto'
          enablePoweredByContainer={false}
          minLength={2}
         nearbyPlacesAPI="GooglePlacesSearch"
         debounce={400}
        />
      </View>
      <NavFavourites />

      </View>
      <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
        <TouchableOpacity  onPress={()=>{navigation.navigate("RideOptionsCard")}} style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}>
          <Icon name='car' type='font-awesome' color="white" size={16} />
          <Text style={tw`text-white text-center`}>Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate("RideOptionsCard")}} style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`}>
          <Icon name='car' type='font-awesome' color="black" size={16} />
          <Text style={tw`text-center`}>Eats</Text>
        </TouchableOpacity>
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
      backgroundColor: "white",
      paddingTop: 20,
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
      paddingBottom: 0
    }
  }
 );