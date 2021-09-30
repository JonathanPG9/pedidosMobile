import React,{useContext} from 'react';
import {
  DrawerItem,
} from '@react-navigation/drawer';
import {Contexto} from "../../Context/Context"
import {
  StatusBar,
  View,
  Text,
  Image,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  FlatList
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';

export default function CustomDrawerContent() {
  String.prototype.capitalize = function() {
    return this.charAt(0).toLocaleUpperCase() + this.slice(1)
}
  const navigation = useNavigation()
  const {User} = useContext(Contexto)
  const configuracion = [
    {
      id:1,
      nombre:"Inicio",
      imagen:require("../../assets/images/avatar-5.jpg"),
      redirect:"userData"
    },
    {
      id:2,
      nombre:"Favoritos",
      imagen:require("../../assets/images/avatar-5.jpg"),
      redirect:"userData"
    },
    {
      id:3,
      nombre:"Mi cuenta",
      imagen:require("../../assets/images/avatar-5.jpg"),
      redirect:"userData"
    },
    {
      id:4,
      nombre:"Registra tu negocio",
      imagen:require("../../assets/images/avatar-5.jpg"),
      redirect:"userData"
    },
    {
      id:5,
      nombre:"Terminos y condiciones",
      imagen:require("../../assets/images/avatar-5.jpg"),
      redirect:"userData"
    },
  ]
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
          <View style={{justifyContent:'center',alignItems:'center',paddingVertical:10,flex:0.45}}
          >  
          <Image
          style={{
            width: 72,
            height: 72,
            backgroundColor:'yellow',
            borderRadius:100,
          }}
          resizeMode="cover"
          source={{uri:"https://i.pinimg.com/236x/f9/27/77/f927779d0f19649c681d9b5a0c365edd.jpg"}}
          />
          <Text
          style={{
            color: "#303030",
            marginTop:15,
            fontSize:12
          }}
          >
            Ludmila Rodriguez
          </Text>
          </View>
          <View
          style={{
            flex:1,
            marginTop:-25
          }}
          >
          <FlatList
          data={configuracion}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => {
            return(
              <TouchableOpacity
              style={{
                flexDirection:"row",
                alignItems:'baseline',
                marginLeft:20,
                paddingVertical:8,
              }}
              onPress={() => navigation.navigate("userData")}
              >
                <Image
                style={{
                  width: 25,
                  height: 25,
                }}
                source={item.imagen}
                />
                <Text
                style={{
                  color: "#303030",
                  marginLeft:14,
                }}
                >
                {item.nombre}
              </Text>
              </TouchableOpacity> 
            )
          }}
          > 
          </FlatList>
          </View>
      <DrawerItem
      style={{
        justifyContent:'center',
      }}
      onPress={() => {
        navigation.dispatch(DrawerActions.closeDrawer())
        navigation.navigate("login")
        }}
        label="Cerrar sesion"
        labelStyle={{ color: "black" ,marginLeft:58}}
      />
    </SafeAreaView>
  );
}