import React, { useContext } from 'react';
import { Contexto } from '../../Context/Context';
import { SafeAreaView, Text, View, Image, TouchableOpacity, ScrollView, FlatList, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const Carrito = () => {
  const { carrito, navigation} = useContext(Contexto)
  return (
    <SafeAreaView
      style={{ flex: 1 }}
    >
      <View
        style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
      >
        {
          carrito?.length ?
          <View style={{flex:1,width:"100%"}}>
              <FlatList
              style={{backgroundColor:"yellow"}}
                data={carrito}
                renderItem={({item}) =>{
                  return(
                    <View
                    style={{backgroundColor:"red",justifyContent:"center",alignItems:"center"}}
                    >
                      <Text>
                        {item.nombreDePlato}
                      </Text>
                      <Text>
                        {item?.comentario}
                      </Text>
                      <Text>
                        ${item.precioTotal}
                      </Text>
                      <Text>
                        Cantidad: {item.cantidad}
                      </Text>
                    </View>
                  )
                }}
                keyExtractor={item => toString(item.id)}
              >
              </FlatList>
              </View>
            :
            <View style={{ justifyContent: "center", alignItems: "center", top: -100 }}>
              <Text style={{ fontSize: 21 }}>
                Tu carrito esta vacio.
              </Text>
              <Text style={{ textAlign: "center", fontSize: 18 , textDecorationLine:"underline"}}
              onPress={() => navigation.navigate("Home")}
              >
                Agregar productos
              </Text>
            </View>
        }
      </View>
    </SafeAreaView>
  );
}
export default Carrito;