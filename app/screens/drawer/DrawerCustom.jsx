import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';
import {
  View,
} from "react-native";

export default function CustomDrawerContent(props) {
  return (
    <View
    style={{
      flex: 1,
      backgroundColor:'black'
    }}
    >
    <DrawerContentScrollView
      {...props}>
      <DrawerItemList 
      {...props}
      activeBackgroundCOlor="red"
      labelStyle={{color:"white"}}
      />
    </DrawerContentScrollView>
    <DrawerItem 
    label="Cerrar sesion"
    labelStyle={{color:"white"}}
    />
    </View> 
  );
}