import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from "../inicio/Home"
import CustomDrawer from "./DrawerCustom"
import Search from "../search/searchScreen"
import UserData from "../user/UserData"
import Restaurante from "../restaurante/Restaurante"
import RestaurantesFavoritos from "../restaurante/RestaurantesFavoritos"
import Buy from '../restaurante/Buy';
const Drawer = createDrawerNavigator();

export default function drawer() {
  return (
      <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        overlayColor: "rgba(0,0,0,0.88)",
        headerTitle: '',
        drawerStyle: {
          width: "65%",
        },
      }}
      drawerContent={() => <CustomDrawer />}
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="search" component={Search} />
        <Drawer.Screen name="userData" component={UserData} />
        <Drawer.Screen name="Restaurante" component={Restaurante} />
        <Drawer.Screen name="restaurantesFavoritos" component={RestaurantesFavoritos} />
        <Drawer.Screen name="buyScreen" component={Buy} />
        </Drawer.Navigator>
  );
}