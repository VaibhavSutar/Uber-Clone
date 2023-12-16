import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from "@env";
import { useDispatch } from 'react-redux';
import { setDestination } from '../redux/slices/navSlice';
import { useNavigation } from '@react-navigation/native';
const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Good Morning, User</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        {/* <GooglePlacesAutocomplete
        styles={InputStyles}
        placeholder='Where to?'
        enablePoweredByContainer={false}
        debounce={400}
        onPress={(data, details = null)=>
          {
            dispatch(setDestination(
              {
                location : details.geometry?.location,
                description : data.description 
              })
              );
            navigation.navigate("RideOptionsCard")
            console.log(data);
          }}
        query={{
          key: GOOGLE_MAPS_APIKEY,
          language: "en"
        }}
        minLength={2}
        nearbyPlacesAPI="GooglePlacesSearch"
        /> */}
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