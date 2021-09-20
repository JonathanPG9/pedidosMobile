import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView
} from "react-native";
import styled from 'styled-components/native'
import { Tiendas, Categorias } from "../../utils/tiendas"
import Search from "../search/inputSearch"
import Footer from "../footer/Footer"
const UL = styled.FlatList`
padding-top:10px;
`
export default Home = () => {
  const [selectedCategory, setSelectedCategory] = useState()
  const [tiendas, setTiendas] = useState(Tiendas)
  const [largo,setLargo] = useState(Math.ceil(Tiendas.length / 2))
  const selectCategory = (categoria) => {
    let filterRestaurante = Tiendas.filter(x => x.categorias === categoria.filtro)
    setTiendas(filterRestaurante)
    setLargo(filterRestaurante.length  < 3 ? 50 : Math.ceil(filterRestaurante.length / 2))
    setSelectedCategory(categoria)
  }

  function renderCategorias() {
    return (
      <View
        style={{
          flex: 0.70,
        }}
      >
        <View
        style={{
          flexDirection:'row',
          marginTop:13,
        }}
        >
        <Text
          style={{
            marginLeft:15,
            fontSize: 30,
            color: "#5D5D5D",
            fontFamily: "Karantina-Bold",
          }}
        >
          Secciones
        </Text>
        {
        selectedCategory && 
                <Text
                style={{
                  alignSelf:'center',
                  fontSize: 11,
                  color: "#5D5D5D",
                  position: 'absolute',
                  right: 10,
                }}
                onPress={() => {
                  setTiendas(Tiendas)
                  setLargo(Math.ceil(Tiendas.length / 2))
                  setSelectedCategory(false)
                }}
                >
                  Limpiar Filtros
              </Text>
        }
        </View>
        <UL
          data={Categorias}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => `${item.id}`}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={{
                  alignItems: "center",
                  marginRight: 7,
                  marginLeft: 7,
                }}
                onPress={() => selectCategory(item)}
              >
                <View
                  style={{
                    width: 45,
                    height: 45,
                    borderRadius: 25,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: selectedCategory?.id == item.id ? "rgb(229,097,00)" : "white"
                  }}
                >
                  <Image
                    source={item.icon}
                    style={{
                      width: 30,
                      height: 30
                    }}
                  />
                </View>
                <Text
                  style={{
                    letterSpacing: 0.4,
                    color: selectedCategory?.id == item.id ? "rgb(229,097,00)" : "#303030",
                    fontSize: 13,
                  }}
                >
                  {item.nombre}
                </Text>
              </TouchableOpacity>
            )
          }}
        />
      </View>
    )
  }
  function renderTiendas() {
    return (
      <View
        style={{
          flex: 1.7,
        }}
      >
        <Text
          style={{
            marginLeft: 15,
            marginTop: 10,
            paddingVertical:2,
            fontSize: 35,
            color: "rgb(229,097,00)",
            fontFamily: "Karantina-Bold",
            top: 3,
          }}
        >
          Restaurantes
        </Text>
        <ScrollView
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false} 
        >
        <UL
          key={largo}
          data={tiendas}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          numColumns={largo}
          renderItem={({ item }) => (
            <View
              style={{
                padding: 6,
                justifyContent:'center',
              alignItems:'center'
              }}
            >
                <Image
                  source={item.foto}
                  resizeMode="cover"
                  style={{
                    width: 150,
                    height: 100,
                    borderRadius: 15,
                  }}
                />
                <View
                  style={{
                    position: 'absolute',
                    bottom: 5,
                    height: 20,
                    width: "80%",
                    backgroundColor: "white",
                    borderTopRightRadius:50,
                    borderTopLeftRadius:50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: "row"
                  }}
                >
                  <Image
                    source={require("../../assets/icons/star.png")}
                    style={{
                      height: 13,
                      width: 13,
                      tintColor: "rgb(229,097,00)",
                    }}
                  />
                  <Text
                    style={{
                      marginLeft: 10,
                      fontSize: 13,
                    }}
                  >{item.nombre}</Text>
                </View>
              </View>
          )}
        />
        </ScrollView>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Search />
      {renderCategorias()}
      {renderTiendas()}
      <Footer/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F9"
  }
})
