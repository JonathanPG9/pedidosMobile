import React,{useContext}from 'react';
import { StyleSheet, Text,  Button ,Platform, StatusBar , View} from 'react-native';
import {Contexto} from "../../Context/Context"

export default function Nav() {
  const {user} = useContext(Contexto);
  return (
    <View style={styles.container}>
      <Text>{user.nombre}</Text>
      <Text>{user.email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    borderBottomColor:"black",
    borderBottomWidth: 0.25,
    justifyContent: "center",
    alignItems: 'center',
    height: "15%",
    width: "100%"
  },
  boton : {
    paddingTop: Platform.OS === "android" ? 100 : 0,
  }
});
