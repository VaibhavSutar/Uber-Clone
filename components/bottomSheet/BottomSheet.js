import { View, Text } from 'react-native'
import React, { useRef, useState , useEffect} from "react";
import BottomSheet,{BottomSheetView} from "@gorhom/bottom-sheet"
const BottomView = () => {
    const sheetRef = useRef<BottomSheet>(null);
  const [isOpen, setIsOpen]= useState(true);
  const snapPoints = ["50%","70%","100%"];
  return (
    <BottomSheet useRef={sheetRef} snapPoints={snapPoints} handleComponent={() => null} >
          <BottomSheetView>
            <Text>Hello</Text>
          </BottomSheetView>
        </BottomSheet>
  )
}

export default BottomView