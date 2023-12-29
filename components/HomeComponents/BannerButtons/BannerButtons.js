import { View, Text, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from "twrnc"
import TochableBanner from './TochableBanner'
const title =[ {title: "Plan your next trip"},{title: "Plan your next trip"}]
const BannerButtons = ({data}) => {
  console.log("Data",{data})
  return (
    <View >
              <>
              <View>
                      <Text style={tw`text-base font-bold mt-2 pl-2`}>{data.title}</Text>
              </View>
            <TochableBanner data={data.childern} />
              </>
          </View>
  )
}

export default BannerButtons