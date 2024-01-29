import { View, Text } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import MapView, { Marker } from 'react-native-maps'
import tw from 'twrnc';
import * as Location from "expo-location";
import { useDispatch, useSelector } from 'react-redux';
import {GOOGLE_MAPS_APIKEY} from "@env";
import { selectDestination, selectOrigin, setTravelTimeInformation } from '../redux/slices/navSlice'
// import Geolocation from '@react-native-community/geolocation';
import MapViewDirections from 'react-native-maps-directions';
const Map = ({initialLoc}) => {
    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)
    const mapRef = useRef(null);
    const dispatch = useDispatch();
    const [currentLocation, setCurrentLocation] = useState(null);
  // const [initialLoc, setInitialLoc] = useState(null);
    console.log(origin);
    console.log(destination);
    console.log("Initial Region",initialLoc);
    console.log("Current location",currentLocation);


    // useEffect(() => {
    //   const getLocation = async () => {
    //     let { status } = await Location.requestForegroundPermissionsAsync();
    //     if (status !== "granted") {
    //       console.log("Permission to access location was denied");
    //       return;
    //     }
  
    //     let location = await Location.getCurrentPositionAsync({});
    //     setCurrentLocation(location.coords);
  
    //     setInitialLoc({
    //       latitude: location.coords.latitude,
    //       longitude: location.coords.longitude,
    //       latitudeDelta: 0.005,
    //       longitudeDelta: 0.005,
    //     });
    //   };
  
    //   getLocation();
    // }, []);
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
    //         latitude: (initialLoc  && initialLoc.latitude),
    //         longitude: (initialLoc  && initialLoc.longitude),
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