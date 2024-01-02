import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from "@env";
import { useDispatch } from 'react-redux';
import { setDestination,setOrigin } from '../../../redux/slices/navSlice';
import tw from "twrnc"
import React from 'react'
import { Icon } from 'react-native-elements';

const AutoCompleteComp = () => {
  const dispatch = useDispatch();
  return (
    <View style={tw`flex-col`}>
      <GooglePlacesAutocomplete 
      styles={InputStyles}
          onPress={(data, details = null)=>
          {
            dispatch(setOrigin(
              {
                location : details.geometry.location,
                description : data.description 
              }
            ))
            console.log(data);
          }}
          renderDescription={row => row.description}
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
        <View style={tw`rounded-full`}>
            <TouchableOpacity style={tw`bg-gray-200 rounded-full w-8 h-8`}>
                <Icon style={tw`p-1`} name="add" color="black" />
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default AutoCompleteComp
const InputStyles =
 StyleSheet.create
 (
  {
    container:
    {
      backgroundColor: "white",
      padding: 0,
      paddingTop: 10,
      flex: 0,
      width: 390,
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