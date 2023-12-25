import { View, Text, TouchableOpacityBase, TouchableOpacity } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../../redux/slices/navSlice';
import {GOOGLE_MAPS_APIKEY} from '@env'
import tw from 'twrnc';
import { Icon } from 'react-native-elements';
const SearchButton = () => {
  return (
    <View style={tw`flex-row bg-gray-200 rounded-full mt-0 p-3 items-center`}>
        <TouchableOpacity style={tw`flex-row items-center pr-10`}>
            <Icon name='search' size={30} />
            <Text style={tw`text-xl text-gray-600 font-bold pl-5`}>
                Where to?
            </Text>
        </TouchableOpacity>
        <View style={tw`flex-col border-gray-100 border-l-2 h-full`}>

        </View>
        <View style={tw`pl-8`}>
            <TouchableOpacity style={tw`flex-row items-center bg-gray-100 p-1.5 rounded-full`}>
                <Icon style={tw`pl-2`} name='schedule' size={25}/>
                <Text style={tw`pl-2`}>Now</Text>
                <Icon style={tw`pl-2 pr-3`} name='chevron-down-outline' type='ionicon' />
            </TouchableOpacity>
        </View>
      {/* <GooglePlacesAutocomplete 
          styles={{
            container:
            {
              flex: 0,
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
              /> */}
    </View>
  )
}

export default SearchButton