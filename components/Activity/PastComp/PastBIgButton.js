import { View, Text, TouchableOpacity , Image, Platform} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import tw from 'twrnc'
import { Icon } from 'react-native-elements'
import RebookButton from './RebookButton'
const PastBIgButton = ({data}) => {
    const navigation = useNavigation();
    console.log(data);
    return (
    <View>
      <TouchableOpacity style={tw`ml-4 mt-5 w-${Platform.OS === "ios" ?100: 82} h-80 rounded-xl border-2 border-gray-100`} 
      onPress={()=>
      {
        // navigation.navigate("")
        // {Navigate to ride detials page}
      }}>
        <View style={tw`items-center mt-6`}> 
        <Image style={ tw`w-${Platform.OS==="ios"?90:72} h-35 rounded-xl`} source={{uri: data.img}} />
        </View>
        <View style={tw`ml-6 mt-4`}>
            <Text style={tw`text-xl font-${Platform.OS == "ios"? "bold" : "extrabold"}`}>Uber {data.service}</Text>
            <Text style={tw`text-gray-500`}>{data.date} . {data.time}</Text>
            <Text style={tw`text-gray-500`}>{data.fare} . {data.status}</Text>
            <RebookButton handlePress={()=> console.log("Rebook")} />
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default PastBIgButton