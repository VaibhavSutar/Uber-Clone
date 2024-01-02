import { View, Text,ScrollView, TouchableOpacity , Image} from 'react-native'
import React from 'react'
import tw from "twrnc"
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
const PromotionBanner = ({data}) => {
    const navigation = useNavigation();
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      bounces={false}
      decelerationRate={0}
    >
        { data && data.map((item) => (
        <TouchableOpacity style={tw`m-1 pt-1 pr-1 rounded-4 flex-row`} onPress={()=>
        {
          navigation.navigate(item.screen)
        }}>
            <View style={[tw`mt-4 items-center w-85 h-35 bg-${item.color} flex-row rounded-4`]}>
           {/* {Title and icon} */}
            <View>
            <Text style={tw`font-medium text-xl text-${item.text_color} pl-3 w-50`}>{item.title}</Text>
            <TouchableOpacity style={tw`flex-row mt-4`} onPress={()=>
            {
                navigation.navigate(item.buttonScreen)
            }}>
            <Text  style={tw`font-medium text-${item.text_color} pl-3`}>{item.buttonTitle}</Text>
            <Icon
              style={tw`pl-2`}
              name="arrow-forward-outline"
              type="ionicon"
              color={item.text_color}
              size={17}
              />
              </TouchableOpacity>
            </View>
            {/* <View style={tw`w-50 bg-white h-35` }> */}
          <Image
            style={[
              tw`rounded-4 rounded-none rounded-tr-3 rounded-br-3`,
              { width: 140, height:140, resizeMode: "cover" },
            ]}
            source={{ uri: item.img }}
          />
                {/* </View> */}
                </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

export default PromotionBanner