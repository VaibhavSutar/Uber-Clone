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
const containerWidth = Platform.OS === "android" ? 280 : 350;
const AutoCompleteComp = (inputText) => {
  const [placesData, setPlacesData] = useState([]);
  const dispatch = useDispatch();
  // console.log("PlacesData",placesData);
  let debounceTimeout;
  const fetchDetails =async()=>
  {

    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(
          inputText
        )}&key=${GOOGLE_MAPS_APIKEY}&language=en&components=country:in`
      );
      const data = await response.json();

      if (data.status === 'OK' && data.predictions.length > 0) {
        const options = data.predictions.map((prediction) => ({
          placeId: prediction.place_id,
          description: prediction.description,
          location: null, // You can fetch the details for each option if needed
        }));

        setPlacesData(options);
        console.log(options)
      } else {
        setPlacesData([]);
      }
    } catch (error) {
      console.error('Error fetching places data:', error);
    }
  };

  const handleTextChange = (text) => {
    // Clear the previous debounce timeout
    clearTimeout(debounceTimeout);

    // Set a new timeout
    debounceTimeout = setTimeout(() => {
      fetchDetails(text);
    }, 400);
  };

  useEffect(() => {
    // Clear the debounce timeout on component unmount
    return () => clearTimeout(debounceTimeout);
  }, [debounceTimeout]);


  return (
    <View style={tw`flex-col`}>
      <GooglePlacesAutocomplete 
      styles={InputStyles}
          onPress={(data, details = null)=>
          {
            dispatch(setOrigin(
              {
                location : details.geometry.location,
                description : data.description,
                
              }
            ))
            // console.log(data);
          }}
          // renderDescription={col => {col ;console.log(col)}}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language:"en",
            components: 'country:in',
          }}
          placeholder='Where to?'
            // enableHighAccuracyLocation={true}
          // listViewDisplayed='auto'
          enablePoweredByContainer={false}
          minLength={2}
          textInputProps={{
            onChangeText: handleTextChange,
          }}
         nearbyPlacesAPI="GooglePlacesSearch"
         debounce={400}
        />
        {/* <GooglePlacesAutocomplete 
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
          renderDescription={row => {row.description ;
            // console.log(row.description)
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
        /> */}
        
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