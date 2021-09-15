import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Rutas from  "./Rutas"
import Home from "../../screens/welcomeScreen/Home"
import CustomDrawer from "./DrawerCustom"
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
        </Drawer.Navigator>
  );
}