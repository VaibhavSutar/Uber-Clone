import { View, Text,SafeAreaView } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-virtualized-view'
import tw from "twrnc"
import UpcomingComp from '../../components/Activity/UpcomingComcp/UpcomingComp'
import PastComp from '../../components/Activity/PastComp/PastComp'
import OlderActivityBtn from '../../components/Activity/PastComp/OlderActivityBtn'
const Activity = () => {
  return (
    <SafeAreaView style={tw`bg-white flex-1 mt-10`}>
      <ScrollView bounces={false}>

      <View style={tw`m-1 pl-2`}>
      <Text style={tw`text-4xl font-semibold`}>Activity</Text>
      </View>
      <View>
        <UpcomingComp />
      </View>
      <View>
        <PastComp/>
      </View>
      <View>
        <OlderActivityBtn />
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Activity