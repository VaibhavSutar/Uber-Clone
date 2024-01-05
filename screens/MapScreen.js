import { View, Text, Platform } from "react-native";
import React, { useRef, useState } from "react";
import tw from "twrnc";
import Map from "../components/Map";
import { createStackNavigator } from "@react-navigation/stack";
import NavigateCard from "../components/NavigateCard";
import BottomSheet,{BottomSheetView} from "@gorhom/bottom-sheet"
import RideOptionsCard from "../components/RideOptionsCard";
const MapScreen = () => {
  const Stack = createStackNavigator();
  const sheetRef = useRef<BottomSheet>(null);
  const [isOpen, setIsOpen]= useState(true);
  const snapPoints = ["50%","70%","100%"];
  return (
    <View style={tw`flex-1 bg-white`}>
       <View
        style={tw`h-1/${Platform.OS === "android" ? 4 : 3.6} mt-${
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
        <BottomSheet useRef={sheetRef} snapPoints={snapPoints}>
          <BottomSheetView>
            <Text>Hello</Text>
          </BottomSheetView>
        </BottomSheet>
      </View>
    </View>
  );
};

export default MapScreen;
