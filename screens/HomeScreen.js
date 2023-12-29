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
import BannerButtons from '../components/HomeComponents/BannerButtons/BannerButtons';
import { Data1, Data2 } from '../lib/data';
import PromotionBanner from '../components/HomeComponents/promotionBanner/PromotionBanner';
const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
     <SafeAreaView style={tw`bg-white h-full`}>
      <ScrollView>
       <View style={
         tw `p-5 mt-1 bg-white`
        }>
        <SearchButton />
        <NavFavourites/>
        <SuggestionsComp />
        <PromotionBanner data={Data2}/>
        <BannerButtons data={Data1} />
        <BannerButtons data={Data1} />
        <BannerButtons data={Data1} />


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