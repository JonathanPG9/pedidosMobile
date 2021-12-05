import React, { useContext, useState } from 'react';
import { Contexto } from '../../Context/Context';
import { SafeAreaView, Text, View, Image, TouchableOpacity, ScrollView, FlatList, Dimensions,StyleSheet } from "react-native";
import { Button } from 'react-native-elements';
import CommentSection from './CommentSection';
const { width } = Dimensions.get("window");

const Carrito = () => {
  const { carrito, navigation,setCarrito,total,setTotal} = useContext(Contexto)
  const eliminar = (item) => {
    const newCart = carrito.filter(x => x.id !== item.id);
    setCarrito(newCart);
    setTotal(total - item.precioTotal);
  }
  return (
    <SafeAreaView
      style={{ flex: 1 }}
    >
      <View
        style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
      >
        {
          carrito?.length ?
            <View style={{ flex: 1, width: "100%" }}>
              <Text style={{alignSelf:"center",fontSize:21}}>
                Carrito
              </Text>
              <FlatList
                style={{ flex: 1 }}
                data={carrito}
                renderItem={({ item }) => {
                  return (
                    <View
                      style={{ flex: 1, flexDirection: "row", height: 144 }}
                    >
                      <View style={{ flex: 1.5, justifyContent: "center", alignItems: "center" }}>
                        <Image
                          source={item.imgPlato}
                          style={{
                            borderRadius: 15,
                            width: 110,
                            height: 110,
                          }}
                        />
                      </View>
                      <View
                        style={{
                          flex: 0.8,
                          alignItems:"center",
                        right: 30,
                        }}
                      >
                        <Text style={styles.parrafo}>
                          {item.nombreDePlato}
                        </Text>
                        <Text style={styles.parrafo}>
                          Cantidad: {item.cantidad}
                        </Text>
                      </View>
                      <View
                        style={{
                        flex: 0.8 ,
                        right: 30,
                        alignItems:"center"
                      }}
                      >
                        <Text style={styles.parrafo}>
                          Total: ${item.precioTotal}
                        </Text >
                        <Button
                          title={`X`}
                          containerStyle={{
                            width: 45,
                            borderRadius: 2,
                            borderWidth:0.5,
                            top:30,
                            borderRadius:10,
                            right: 24,
                          }}
                          titleStyle={{
                            color: "red",
                            fontSize: 14,
                            letterSpacing: 1,
                          }}
                          onPress={() => eliminar(item)}
                          type="clear"
                        />
                        <CommentSection/>
                      </View>
                    </View>
                  )
                }}
                keyExtractor={item => item.id}
              >
              </FlatList>
              <View
              style={{alignSelf:"center",
              justifyContent:"center",
              alignItems:"center",
              backgroundColor:"red",
              width:"80%",
              height: 55,
              borderRadius:50,
              flexDirection:"row"
              }}
              >
              <Text
              style={{color:"white"}}
              >
                Precio total: ${total}
              </Text>
              <Button
                title={`Comprar`}
                containerStyle={{
                  width: 100,
                  top:-1,
                  left: 20,
                }}
                titleStyle={{
                  color: "white",
                  fontSize: 14,
                  letterSpacing: 1,
                }}
                onPress={() => alert("Acabas de comprar" + " " + total)}
                type="clear"
              /> 
              </View>
            </View>
            :
            <View style={{ justifyContent: "center", alignItems: "center", top: -100 }}>
              <Text style={{ fontSize: 21 }}>
                Tu carrito esta vacio.
              </Text>
              <Text style={{ textAlign: "center", fontSize: 18, textDecorationLine: "underline" }}
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

const styles = StyleSheet.create({
  parrafo: {
    top:20,
    marginTop:10,
    textAlign:"center"
  }
})
