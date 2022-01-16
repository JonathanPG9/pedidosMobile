import React, { useState, useContext, useEffect } from 'react';
import { SafeAreaView, Text, View, Image, TouchableOpacity, ScrollView, Platform, Dimensions, TextInput } from "react-native";
import { Button } from 'react-native-elements';
import { Contexto } from '../../Context/Context';
const { width } = Dimensions.get("window");

const Buy = ({ route }) => {
  const { carrito, setCarrito,quantity,setQuantity,navigation,setTotal,total} = useContext(Contexto)
  const { item, isFavorite } = route.params;
  const [alreadyBuy, setIsAlreadyBuy] = useState(false);
  const [comentario, setComentario] = useState("")
  const adding = (n) => {
    if (n === 15) return alert("Maximo de unidades")
    setQuantity(n + 1)
    setIsAlreadyBuy(false)
  }
  const subs = (n) => {
    if (n === 1) return alert("Minimo de unidades")
    setQuantity(n - 1)
  }
  const viewComment = (value) => {
    if (value.length > 130) return alert("maximo 130 caracteres")
    setComentario(value)
  }
  const submit = (producto) => {
    const Isrepeated = carrito.find(x => x.id === producto.id && x.title === producto.title && x.descripcion === producto.descripcion);
    producto.quantity = quantity;
    comentario.length ? producto.comentario = comentario : null;
    if (typeof Isrepeated !== "undefined") {
      Isrepeated.quantity += producto.quantity;
      Isrepeated.precioTotal = Isrepeated.quantity * Isrepeated.unit_price;
      comentario.length ? Isrepeated.comentario = comentario : null;
      setCarrito([...new Set([...carrito, Isrepeated])]);
      setIsAlreadyBuy(true);
      setQuantity(0);
      setTotal(total + Isrepeated.precioTotal);
      setComentario("")
      return;
    }
    producto.precioTotal = producto.quantity * producto.unit_price;
    setTotal(total + producto.precioTotal);
    setCarrito([...carrito, { ...producto }]);
    setIsAlreadyBuy(true);
    setQuantity(0);
    setComentario("")
    return;
  }
  const goToPay = () => {
    navigation.navigate("carrito")
    setIsAlreadyBuy(false)
  }
  return (
    <SafeAreaView style={{
      flex: 1,
    }}>
      <ScrollView
        style={{ flex: 1, }}
      >
        <View
          style={{
            width: "100%",
            height: "100%",
            flex: 1,
            alignItems: 'center',
            marginBottom: 30,
            height: Platform.OS === "ios" ? 270 : 210,
          }}>
          <Image
            source={isFavorite ? { uri: item?.imgPlato } : item?.imgPlato}
            style={{
              width: "100%",
              height: Platform.OS === "ios" ? "80%" : "70%",
            }}
          />
          <View
            style={{
              borderTopWidth: 0.3,
              borderBottomWidth: 0.2,
              borderRadius: 2,
              borderColor: "black",
              width: "100%",
              height: "40%",
              justifyContent: "center",
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.25,
              shadowRadius: 1,
              elevation: 3
            }}
          >
            <Text
              style={{ left: 10, fontSize: 16, fontWeight: "400", letterSpacing: 0.4, }}
            >
              {item.title}
            </Text>
            <Text
              style={{ left: 10, fontSize: 16, fontWeight: "400", letterSpacing: 0.4, }}
            >
              ${item.unit_price}
            </Text>
            <Text
              style={{
                left: 10, top: Platform.OS === "ios" ? 5 : 3,
                fontSize: Platform.OS === "ios" ? 12 : 10,
                fontWeight: Platform.OS === "ios" ? "200" : "normal",
                letterSpacing: 0.4,
              }}
            >
              {item.descripcion}
            </Text>
          </View>
        </View>
        <View
          style={{ height: 120, justifyContent: "center", alignItems: "center" }}
        >
          <View
            style={{
              top: 45,
              borderTopWidth: 0.3,
              borderBottomWidth: 0.3,
              borderLeftWidth: 0.6,
              borderRightWidth: 0.6,
              backgroundColor: 'transparent',
              borderColor: '#E3E4E5',
              borderWidth: 1,
              shadowColor: 'black',
              shadowRadius: 1,
              shadowOpacity: 0.05,
              height: "90%", width: "75%",
              elevation: 2,
            }}
          >
            <Text
              style={{ alignSelf: "flex-start", top: 30, fontSize: 14, fontWeight: "500", left: 5, }}
            >
              Unidades
            </Text>
            <Text
              style={{ fontSize: 12, left: 5, top: 40, }}
            >
              Maximo 15 unidades
            </Text>
            <View
              style={{
                alignSelf: 'flex-end',
                backgroundColor: "#E3E4E5",
                width: 100,
                height: 40,
                right: 5,
                justifyContent: "space-evenly",
                flexDirection: "row",
                borderWidth: Platform.OS === "ios" ? 0.1 : 0.1,
                borderRadius: Platform.OS === "ios" ? width * 0.125 * 0.5 : 25,
                alignItems: "center",
              }}
            >
              <Text
                onPress={() => quantity === 0 ? null : subs(quantity)}
                style={{ padding: Platform.OS === "ios" ? 12 : 33 }}
              >
                -
              </Text>
              <Text>
                {quantity}
              </Text>
              <Text
                onPress={() => adding(quantity)}
                style={{ padding: Platform.OS === "ios" ? 12 : 33 }}
              >
                +
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            alignSelf: "center",
            borderTopWidth: 0.3,
            borderBottomWidth: 0.3,
            borderLeftWidth: 0.6,
            borderRightWidth: 0.6,
            backgroundColor: 'transparent',
            borderColor: '#E3E4E5',
            shadowColor: 'black',
            height: 100, width: "75%",
            elevation: 2,
            marginTop: 75,
            marginBottom: 30,
          }}
        >
          <Text
            style={{ top: -20, position: 'absolute' }}
          >
            Desea agregar un comentario?
          </Text>
          <TextInput
            onChangeText={(text) => viewComment(text)}
            value={comentario}
            style={{
              top: 10,
              left: 1,
              height: 100, textAlignVertical: 'top'
            }}
            placeholder="Ingrese texto.."
            multiline={true}
            numberOfLines={10}
          />
        </View>
      </ScrollView>
      <View
        style={{ backgroundColor: "rgb(229,097,00)", }}
      >
        {
          !alreadyBuy ? 
            <Button
              title={`Agregar pedido de $${item.unit_price * quantity}`}
              containerStyle={{
                marginTop: 10,
                height: 45
              }}
              titleStyle={{
                color: "white",
                fontSize: 14,
                letterSpacing: 1,
              }}
              onPress={() => submit(item)}
              type="clear"
            />
            :
            <Button
              title={`Ir al carrito`}
              containerStyle={{
                marginTop: 10,
                height: 45
              }}
              titleStyle={{
                color: "white",
                fontSize: 14,
                letterSpacing: 1,
              }}
              onPress={() => goToPay()}
              type="clear"
            />
        }
      </View>
    </SafeAreaView>
  );
}
export default Buy;