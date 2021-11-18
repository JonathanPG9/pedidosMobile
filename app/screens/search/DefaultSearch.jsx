import React, { useEffect, useContext, useState } from 'react';
import { View, SafeAreaView, Text, FlatList, Dimensions, Image, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard } from "react-native";
import Footer from "../footer/Footer"
import { Tiendas } from "../../utils/tiendas"
import { Contexto } from '../../Context/Context';
import { Input, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get("window");

const DefaultSearch = (props) => {
  const input = React.createRef()
  const { callKeyboard } = useContext(Contexto)
  const [inputValue, setInputValue] = useState("")
  const tiendas = props?.user?.tiendas || Tiendas
  const [filtrarTiendas, setFiltrarTiendas] = useState(tiendas)
  const navigation = useNavigation()

  const searchInput = (value) => {
    setInputValue(value)
    const newTiendas = []
    for (let i = 0; i < tiendas.length; i++) {
      if (tiendas[i].nombre.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) !== -1 ||
        tiendas[i].categorias.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) !== -1 ||
        tiendas[i].barrio.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) !== -1
      ) {
        newTiendas.push(tiendas[i])
        setFiltrarTiendas(newTiendas)
      }
    }
    if (!value?.trim() || value.length === 0) {
      return setFiltrarTiendas(tiendas)
    }
  }
  useEffect(() => {
    setTimeout(() => {
      input.current?.focus()
    }, 40)
  }, [callKeyboard])
  const isFavorite = props.isFavorite
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}
      enabled
      behavior={Platform.OS === "ios" ? 'padding' : 'height'}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <TouchableOpacity
          style={{
            flex: 0.675,
            borderBottomWidth: 1,
            borderColor: "#DFDFE0",
            backgroundColor: "white",
            justifyContent: 'center',
          }}
        >
          <View style={{ flex: 0, width: "90%" }}>
            <Input
              ref={input}
              inputContainerStyle={{ borderBottomWidth: 0 }}
              containerStyle={{
                backgroundColor: '#F5F5F5',
                height: 50,
                borderRadius: 40,
                left: 12,
                top: 5,
                paddingLeft: 20,
              }}
              onChangeText={(text) => {
                searchInput(text)
              }}
              placeholder={props?.user ? "Buscar favoritos..." : "Buscar negocios..."}
              rightIcon={
                <Icon
                  style={{
                    marginTop: -2,
                    marginRight: 20,
                  }}
                  name='search'
                  type='font-awesome'
                  size={20}
                  color='black'
                />
              }
            />
          </View>
        </TouchableOpacity>
        <View
          style={{
            flex: 2.334,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <FlatList
            keyboardShouldPersistTaps='handled'
            keyboardShouldPersistTaps={"always"}
            style={{
              width,
            }}
            showsVerticalScrollIndicator={false}
            data={filtrarTiendas}
            keyExtractor={item => `${item.id || item._id}`}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    flex: 1,
                    paddingVertical: 25,
                    justifyContent: 'center',
                    flexDirection: 'row',
                    borderColor: '#DFDFE0',
                    borderWidth: 1.5,
                  }}
                >
                  <TouchableOpacity style={{ alignItems: 'center', right: 10 }}
                    onPress={() => navigation.navigate("Restaurante", {
                      item,
                      isFavorite
                    })}
                  >
                    {props?.user ?
                      <Image
                        style={{
                          width: 66,
                          height: 66,
                          borderRadius: 40,
                        }}
                        resizeMode="cover"
                        source={{ uri: item.foto }}
                      />
                      :
                      <Image
                        style={{
                          width: 66,
                          height: 66,
                          borderRadius: 40,
                        }}
                        resizeMode="cover"
                        source={item.foto}
                      />
                    }
                    <Text style={{ marginTop: 5, }} >
                      {item.barrio}
                    </Text>
                  </TouchableOpacity>
                  <View
                    style={{
                      alignItems: 'center',
                      position: "relative",
                      right: -20,
                      width: "60%",
                      top: 8,
                    }}
                  >
                    <Text style={{ top: -8 }}>
                      {item.nombre}
                    </Text>
                    <Text style={{ textAlign: "center", top: -8 }}>
                      {item.descripcion}
                    </Text>
                  </View>
                </View>
              )
            }}
          />
        </View>
        <Footer />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

export default DefaultSearch;