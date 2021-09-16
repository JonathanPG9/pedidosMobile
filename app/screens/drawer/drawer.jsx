import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from "../inicio/Home"
import CustomDrawer from "./DrawerCustom"
import Search from "../search/searchScreen"
const Drawer = createDrawerNavigator();

export default function drawer() {
  return (
      
      <Drawer.Navigator
      style={{
      }}
      screenOptions={{
        headerShown: false,
        overlayColor: "rgba(0,0,0,0.88)",
        headerTitle: '',
        drawerStyle: {
          width: "75%",
        },
      }}
      drawerContent={(props) => <CustomDrawer {...props}/>}
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="search" component={Search} />
        </Drawer.Navigator>
  );
}