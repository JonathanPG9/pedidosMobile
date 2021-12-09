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
        displayModal && <View style={{ position: "absolute", width: width / 1.20, borderRadius: 15, backgroundColor: "red", height: 115, right: -50, top: -50 }}>
        <Button
          title="X"
          containerStyle={{
            flex:1,
            width: 30,
            borderWidth: 0.5,
            top: 0,
            right: 0,
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
        <Text
          style={{ fontSize: 16, paddingRight:30,paddingLeft:10,top:5,flex:1, }}
        >
          {comentario?.length > 1 ? comentario : "Sin comentarios"}
        </Text>
      </View>
      }
    </View>
  );
}
export default CommentSection;