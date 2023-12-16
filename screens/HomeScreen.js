import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from '@env'
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../redux/slices/navSlice';
import NavFavourites from '../components/NavFavourites';

const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
     <SafeAreaView style={tw`bg-white h-full`}>
       <View style={
        tw `p-5 mt-6 bg-white`
       }>
        <Image 
        style={
            {
                width:100,
                height: 100,
                resizeMode: "contain"
            }
        }
        source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
        }}
        />
        <GooglePlacesAutocomplete 
          styles={{
            container:
            {
              flex:0,
            },
            textInput:
            {
              fontSize: 18
            }
          }}
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
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language:"en"
          }}
          fetchDetails={true}
          returnKeyType={"search"}
          placeholder='Where From ?'
          listViewDisplayed='auto'
          enablePoweredByContainer={false}
          minLength={2}
         nearbyPlacesAPI="GooglePlacesSearch"
         debounce={400}
        />
        <NavOptions />
        <NavFavourites/>
       </View>
     </SafeAreaView>
  );
}

export default HomeScreen