import { View, Text, Platform } from "react-native";
import React, { useRef, useState , useEffect} from "react";
import tw from "twrnc";
import * as Location from "expo-location";
import Map from "../components/Map";
import { createStackNavigator } from "@react-navigation/stack";
import NavigateCard from "../components/NavigateCard";
import RideOptionsCard from "../components/RideOptionsCard";
import BottomView from "../components/bottomSheet/BottomSheet";

const MapScreen = () => {
  const Stack = createStackNavigator();
  
  const [currentLocation, setCurrentLocation] = useState(null);
  const [initialLoc, setInitialLoc] = useState(null);
    console.log("Initial Region",initialLoc);
    console.log("Current location",currentLocation);


    useEffect(() => {
      const getLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          console.log("Permission to access location was denied");
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        setCurrentLocation(location.coords);
  
        setInitialLoc({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        });
      };
  
      getLocation();
    }, []);
  return (
    <View style={tw`flex-1 bg-white`}>
       <View
        style={tw`h-1/${Platform.OS === "android" ? 2 : 2.9} mt-${
          Platform.OS === "android" ? 10 : 0
        }`}
      >
        {/* <Stack.Navigator>
        <Stack.Screen
        name='NavigateCard'
        component={NavigateCard}
        options={{
          headerShown: false
        }}
  /> */}
      {/* </Stack.Navigator>  */}
        <NavigateCard />
      </View>
      <View style={tw`h-full bg-red-100`}>
        <Map />
        <BottomView/>
      </View>
    </View>
  );
};

export default MapScreen;
