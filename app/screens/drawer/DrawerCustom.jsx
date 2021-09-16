import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';
import {
  View,
  StatusBar,
  SafeAreaView
} from "react-native";

export default function CustomDrawerContent(props) {
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
      <DrawerContentScrollView
        {...props}>
      </DrawerContentScrollView>
      <DrawerItem
        label="Cerrar sesion"
        labelStyle={{ color: "black" }}
      />
    </SafeAreaView>
  );
}