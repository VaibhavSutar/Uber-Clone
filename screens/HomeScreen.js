import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import tw from 'twrnc';
import { ScrollView } from 'react-native-virtualized-view';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from '@env'
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../redux/slices/navSlice';
import NavFavourites from '../components/NavFavourites';
import SearchButton from '../components/HomeComponents/SearchButton';
import SuggestionsComp from '../components/HomeComponents/SuggestionsComp';

const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
     <SafeAreaView style={tw`bg-white h-full`}>
      <ScrollView>
       <View style={
         tw `p-5 mt-6 bg-white`
        }>
        <SearchButton />
        <NavFavourites/>
        <SuggestionsComp />
        {/* <NavOptions />
        <NavOptions />

        <NavFavourites/>
        <NavFavourites/> */}

       </View>
              </ScrollView>
     </SafeAreaView>
  );
}

export default HomeScreen