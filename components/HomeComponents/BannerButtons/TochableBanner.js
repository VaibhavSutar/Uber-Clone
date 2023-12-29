import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
const TochableBanner = ({ data }) => {
  console.log(data);
  const navigation = useNavigation();
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      bounces={false}
      decelerationRate={0}
    >
      {data.map((item) => (
        <TouchableOpacity style={tw`m-1 pt-1 pr-1`} onPress={()=>
        {
          navigation.navigate(item.screen)
        }}>
          <Image
            style={[
              tw`rounded-4`,
              { width: 200, height: 120, resizeMode: "cover" },
            ]}
            source={{ uri: item.img }}
          />
          <View style={tw`mt-4 flex-row items-center`}>
            <Text style={tw`font-medium `}>{item.subTitle}</Text>
            <Icon
              style={tw`pl-2`}
              name="arrow-forward-outline"
              type="ionicon"
              color="black"
              size={17}
            />
          </View>
          <Text style={tw`text-gray-500 font-light mt-1` }>{item.description}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default TochableBanner;
