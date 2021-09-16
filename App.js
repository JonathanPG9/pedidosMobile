import React, { useEffect, useState } from 'react';
import Context from "./app/Context/Context"
import Login from "./app/screens/auth/Login"
import Register from "./app/screens/auth/Register"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';
import * as Font from 'expo-font';
import 'react-native-gesture-handler';
import Drawer from "./app/screens/drawer/drawer"
import Search from "./app/screens/search/searchScreen"

export default function App() {
  const Stack = createNativeStackNavigator();
  const [fontLoadead, setFontLoadead] = useState(false)

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'Bangers': require("./app/assets/fonts/Bangers-Regular.ttf"),
        'Karantina-Bold': require("./app/assets/fonts/Karantina-Bold.ttf"),
        'Karantina-Light': require("./app/assets/fonts/Karantina-Light.ttf"),
        'Karantina-Regular': require("./app/assets/fonts/Karantina-Regular.ttf"),
        'AlexBrush': require("./app/assets/fonts/AlexBrush-Regular.ttf"),
      }).then(res => {
        console.log('Font familys cargados');
        setFontLoadead(true)
      }).catch(Err => {
        console.log(`Error al cargar font familys ${Err}`);
      });
    }
    loadFonts()
  }, [])

  return (
    <Context>
      {fontLoadead
        ?
        <NavigationContainer>
          <SafeAreaProvider>
            <Stack.Navigator>
              <Stack.Screen
                name="home"
                component={Drawer}
                options={
                  {
                    headerShown: false
                  }
                }
              />
              <Stack.Screen
                name="login"
                component={Login}
                options={
                  {
                    headerShown: false
                  }
                }
              />
              <Stack.Screen
                name="register"
                component={Register}
                options={
                  {
                    headerShown: false
                  }
                }
              />
            </Stack.Navigator>
          </SafeAreaProvider>
        </NavigationContainer>
        :
        <View>
          <Text>
            Cargando...
          </Text>
        </View>
      }
    </Context>
  );
}