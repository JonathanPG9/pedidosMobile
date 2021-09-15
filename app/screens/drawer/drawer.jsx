import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Rutas from  "./Rutas"
import Home from "../../screens/welcomeScreen/Home"
import CustomDrawer from "./DrawerCustom"
const Drawer = createDrawerNavigator();

export default function drawer() {
  return (
    
      <Drawer.Navigator 
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: 'transparent',
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTitle: '',
      }}
      drawerContent={(props) => <CustomDrawer {...props}/>}
      >
        <Drawer.Screen name="Home" component={Home} />
        </Drawer.Navigator>
  );
}