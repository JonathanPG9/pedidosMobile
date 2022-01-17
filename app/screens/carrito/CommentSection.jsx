import React,{useState}from 'react';
import { SafeAreaView, Text, View, Image, TouchableOpacity, ScrollView, FlatList, Dimensions, StyleSheet } from "react-native";
import { Button } from 'react-native-elements';
const { width } = Dimensions.get("window");


const CommentSection = ({ comentario }) => {
  const [displayModal,setDisplayModal] = useState(false)

  return (
    <View>
      <Button
        title={"C"}
        containerStyle={{
          width: 45,
          borderWidth: 0.5,
          top: -6,
          left: 3,
          position: "absolute",
          borderRadius: 10,
        }}
        titleStyle={{
          color: "red",
          fontSize: 14,
          letterSpacing: 1,
        }}
        onPress={() => setDisplayModal(!displayModal)}
        type="clear"
      />
      {
        displayModal && <View style={{
          position: "absolute",
          width: width / 1.18,
          borderRadius: 15,
          backgroundColor: "red",
          height: 115,
          right: -50, top: -50,
          flexWrap:"wrap",
          flex:1,
          }}> 
        <View
        stlye={{flex:1}}
        >
        <Text
          style={{ fontSize:16,paddingHorizontal:15,top:5,left:-3,}}
        >
          {comentario?.length > 1 ? comentario : "Sin comentarios"}
        </Text>
        </View>
        <Button
          title="X"
          containerStyle={{
            borderWidth: 0.5,
            top:-13,
            right: -8,
            position: "absolute",
            borderRadius: 10,
            backgroundColor: "black",
          }}
          titleStyle={{
            color: "white",
            fontSize: 14,
            letterSpacing: 1,
          }}
          type="clear"
        onPress={() => setDisplayModal(false)}
        />
      </View>
      }
    </View>
  );
}
export default CommentSection;