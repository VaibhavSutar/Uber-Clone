import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from "@env";
import { useDispatch } from 'react-redux';
import { setDestination,setOrigin } from '../../../redux/slices/navSlice';
import tw from "twrnc"
import React from 'react'
import { Icon } from 'react-native-elements';
import { Platform } from 'react-native';
import { PLATFORMS } from 'twrnc/dist/esm/types';
const containerWidth = Platform.OS === "android" ? 280 : 350;
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
          renderDescription={row => {row.description ;console.log(row.description)}}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language:"en"
          }}
          currentLocation={true}
          // fetchDetails={false}
          // returnKeyType={"search"}
          placeholder='Where to?'
            // enableHighAccuracyLocation={true}
          // listViewDisplayed='auto'
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
          renderDescription={row => {row.description ;console.log(row.description)}}
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
      paddingTop: 0,
      flex: 0,
      width: containerWidth,
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
      paddingBottom: 0,
      width: containerWidth,
    },
    listView:
    {
      width:0,
      height: 0
    }
  }
 );