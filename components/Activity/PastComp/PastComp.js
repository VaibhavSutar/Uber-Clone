import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import tw from "twrnc"
import { useNavigation } from '@react-navigation/native'
import { Icon } from 'react-native-elements'
import PastBIgButton from './PastBIgButton'
import { recentActivity, recentActivity1 } from '../../../lib/data'
import PastList from './pastList'
const PastComp = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={tw`flex-row justify-between px-4 mt-4`}>
      <Text style={tw`font-bold text-lg`}>Past</Text>
        <TouchableOpacity onPress={()=>
        {
            // navigation.navigate('Services')
        }}>
            <Icon name='filter' type='font-awesome' />
        </TouchableOpacity>
        </View>
        <View>
          <PastBIgButton  data={recentActivity}/>
          <PastList data={recentActivity1} />
        </View>
    </SafeAreaView>
  )
}

export default PastComp

// {1.upcoming , 2.Past 3.View Older Activity}