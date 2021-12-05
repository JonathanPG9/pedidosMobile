import React from 'react';
import { SafeAreaView, Text, View, Image, TouchableOpacity, ScrollView, FlatList, Dimensions,StyleSheet } from "react-native";
import { Button } from 'react-native-elements';
const { width } = Dimensions.get("window");


const CommentSection = () => {
  return ( 
    <View>
        <Button 
        title={"C"}
        containerStyle={{
          width: 45,
          borderRadius: 2,
          borderWidth:0.5,
          top:-6,
          left:3,
          position: "absolute",
          borderRadius:10,
        }}
        titleStyle={{
          color: "red",
          fontSize: 14,
          letterSpacing: 1,
        }}
        onPress={() => alert("mostrando")}
        type="clear"
        />
              <View style={{position:"absolute",width: width / 1.35,backgroundColor:"red",height:140,right:-30,top:-50}}>
          <Text>
            hoaadldsa
          </Text>
      </View>
    </View>
  );
}
export default CommentSection;