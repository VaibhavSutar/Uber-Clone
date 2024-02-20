import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from "@env";
import { useDispatch } from 'react-redux';
import { setDestination,setOrigin } from '../../../redux/slices/navSlice';
import tw from "twrnc"
import React, { useState , useEffect} from 'react'
import { Icon } from 'react-native-elements';
import { Platform } from 'react-native';
import { PLATFORMS } from 'twrnc/dist/esm/types';
import { useNavigation } from '@react-navigation/native';
const containerWidth = Platform.OS === "android" ? 280 : 350;
const AutoCompleteComp = () => {
  const [placesData, setPlacesData] = useState([]);
  const [autotoLoc, setAutoLoc] = useState([]);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(()=>
  {
    console.log("PlacesData",placesData);

  },[placesData])
  let debounceTimeout;

  useEffect(() => {
    // Clear the debounce timeout on component unmount
    return () => clearTimeout(debounceTimeout);
  }, [debounceTimeout]);
  return (
    <View style={tw`flex-col`}>
      <GooglePlacesAutocomplete
         styles={InputStyles}
         placeholder='Where to?'
         enablePoweredByContainer={false}
         debounce={400}
         onPress={(data, details = null)=>
           {
             dispatch(setOrigin(
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
         />
         <GooglePlacesAutocomplete
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
       paddingTop: 20,
       flex: 0,
       width: 350
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