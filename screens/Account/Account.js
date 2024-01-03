import { View, Text, SafeAreaView, Platform, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Icon } from 'react-native-elements'
import ProfileComp from '../../components/acoountComp/ProfileComp'
import Bigbutton from '../../components/acoountComp/Bigbutton'
import { accountBtn, accountBtnList } from '../../lib/data'
import BtnList from '../../components/acoountComp/BtnList'
const Account = () => {
  return (
    <SafeAreaView style={tw`mt-10 bg-white flex-1 `}>
      <ProfileComp/>
      <View style={tw`ml-${Platform.OS === "ios" ?4:3}`}>
      <Bigbutton  data={accountBtn}/>
      </View>
      <View style={tw`border-2 border-gray-100 mt-2`}/>
      <BtnList data={accountBtnList} />
    </SafeAreaView>
  )
}

export default Account