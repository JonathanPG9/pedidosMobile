import React,{useContext} from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {Contexto} from "../../Context/Context"
import {
  StatusBar,
  View,
  Text,
  SafeAreaView
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';

export default function CustomDrawerContent(props) {
  String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
  const navigation = useNavigation()
  const {User} = useContext(Contexto)
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <StatusBar
        backgroundColor="#fff"
        barStyle="dark-content"
      />
      <DrawerContentScrollView style={{flex:1}}
        {...props}>
          <View style={{justifyContent:'center',alignItems:'center',paddingVertical:10}}
          >  
          <Text
          style={{
            fontSize:43,
            fontFamily: "AlexBrush",
          }}
          >
            Bienvenido
          </Text>
            <Text
            style={{
              fontFamily:"Karantina-Regular",
              letterSpacing:2,
              fontSize:25
            }}
            >
              {User.nombre.capitalize()}
            </Text>
          </View>
      </DrawerContentScrollView>
      <DrawerItem
      onPress={() => {
        navigation.dispatch(DrawerActions.closeDrawer())
        navigation.navigate("login")
      }}
        label="Cerrar sesion"
        labelStyle={{ color: "black" }}
      />
    </SafeAreaView>
  );
}