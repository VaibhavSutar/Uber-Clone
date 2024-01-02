import { View, Text } from 'react-native'
import React, { useEffect, useRef } from 'react'
import MapView, { Marker } from 'react-native-maps'
import tw from 'twrnc';
import { useDispatch, useSelector } from 'react-redux';
import {GOOGLE_MAPS_APIKEY} from "@env";
import { selectDestination, selectOrigin, setTravelTimeInformation } from '../redux/slices/navSlice'
import MapViewDirections from 'react-native-maps-directions';
const Map = () => {
    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)
    const mapRef = useRef(null);
    const dispatch = useDispatch();
    console.log(origin);
    console.log(destination);
    useEffect(()=>
    {
        if(!origin || !destination) return;
        mapRef.current.fitToSuppliedMarkers(["origin","destination"],
        {
          edgePadding: {top: 50,right: 50, bottom: 50, left:50},
        });
    },[origin, destination]);
    useEffect(()=>
    {
      if(!origin || !destination) return;
      console.log(destination.description);
      console.log(origin.description)
      const des = destination.description
      const getTravelTime = async() =>
      {
        fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?destinations=${destination.description}&origins=W${origin.description}&units=imperial&key=${GOOGLE_MAPS_APIKEY}`)
        .then(res => res.json())
        .then(data =>
          {
            dispatch(setTravelTimeInformation(data.rows[0].elements[0]));
            console.log("Distance calulated:",data)
          })
      }
      getTravelTime();
    },[origin,destination,GOOGLE_MAPS_APIKEY])
  return (
    <MapView
    ref={mapRef}
    style={tw`flex-1`}
    mapType='mutedStandard'
    // initialRegion={
    //     {
    //         latitude: origin.location.lat,
    //         longitude: origin.location.lng,
    //         latitudeDelta: 0.005,
    //         longitudeDelta: 0.005
    //     }
    // }
    >
      {origin && destination && 
      (

        <MapViewDirections
        origin={origin.description}
        destination={destination.description}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={3}
        strokeColor='black'
        />
        )
      }
      {origin?.location && 
      <Marker
       coordinate={
        {
          longitude: origin.location.lng,
          latitude: origin.location.lat,
        }
       } 
       title='Origin'
       description={origin.description}
       identifier='origin'
      />
      }
      {destination?.location && 
      <Marker
       coordinate={
        {
          longitude: destination.location.lng,
          latitude: destination.location.lat,
        }
       } 
       title='Destination'
       description={destination.description}
       identifier='destination'
      />
      }
    </MapView>
  )
}

export default Map