import React,{useState} from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    Dimensions,
} from "react-native";
import styled from 'styled-components/native'
import {Tiendas,Categorias,Settings} from "../../utils/tiendas"
import { Input, Icon  } from 'react-native-elements';

const { width, height } = Dimensions.get("window");
const UL = styled.FlatList`
padding-top:10px;
`
export default  Home = ({navigation}) => {
    const [selectedCategory, setSelectedCategory] = useState()
    const [tiendas, setTiendas] = useState(Tiendas)
    function selectCategory(categoria) {
        let filterRestaurante = Tiendas.filter(x => x.categorias === categoria.filtro) 
        setTiendas(filterRestaurante) 
        setSelectedCategory(categoria)
    }
    function renderCategorias() { 
        return (
            <View
            style={{
                flex: 0.74,
                alignItems:"center",
                justifyContent:'center',
            }}
            >
                <Text
                style={{
                    alignSelf:"flex-start",
                    marginLeft:15,
                    marginTop:10,
                    fontSize:30,
                    color: "#5D5D5D",
                    fontFamily:"Karantina-Bold",
                }}
                >
                Secciones
                </Text>
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
                                    marginLeft:7,
                                }}
                                onPress={() => selectCategory(item)}
                            >
                                <View
                                    style={{
                                        width: 53,
                                        height: 53,
                                        borderRadius: 25,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        backgroundColor: selectedCategory?.id == item.id ? "rgb(229,097,00)"  : "white"
                                    }}
                                >
                                    <Image
                                        source={item.icon}
                                        style={{
                                            width: 33,
                                            height: 33
                                        }}
                                    />
                                </View>
                                <Text
                                    style={{
                                        letterSpacing:0.4,
                                        color: selectedCategory?.id == item.id ? "rgb(229,097,00)" : "#303030",
                                        fontSize:13,
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
                flex: 1.6,
            }}
            >
            <Text
            style={{
            alignSelf:"flex-start",
            marginLeft:15,
            marginTop:10,
            fontSize:35,
            color: "rgb(229,097,00)",
            fontFamily:"Karantina-Bold",
            }}
            >
                Restaurantes
            </Text>
            <UL
                data={tiendas}
                keyExtractor={item => `${item.id}`}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{
                    width
                }}
                renderItem={({ item }) => (
                    <View
                    style={{
                        marginRight: 5,
                        marginLeft: 5
                    }}
                    >
                        <View
                        style={{
                        }}
                        >
                            <Image
                                source={item.foto}
                                resizeMode="cover"
                                style={{
                                    width:250,
                                    height: 220,
                                    borderRadius: 40,
                                }}
                            />
                            <View
                                style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    height: 50,
                                    width:"60%",
                                    backgroundColor: "white",
                                    borderTopRightRadius: 20,
                                    borderBottomLeftRadius: 40,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexDirection:"row"
                                }}
                            >
                            <Image
                                source={require("../../assets/icons/star.png")}
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: '"rgb(229,097,00)"',
                                }}
                            />
                                <Text  
                                style={{
                                    marginLeft:10,
                                    fontFamily:"AlexBrush",
                                    fontSize:25,
                                }}
                                >{item.nombre}</Text>
                            </View>
                        </View> 
                    </View>
                ) }
            />
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>

            <View
            style={{
              flex: 0.5,
              borderBottomWidth:1,
              borderColor:"#DFDFE0",
              backgroundColor:"white",
              justifyContent:'center',
            }}
            >
                <View
                style={{
                  flex: 0,
                  width: "65%"
                }}
                >
                <Input
                inputContainerStyle={{borderBottomWidth:0}}
                containerStyle={{
                  backgroundColor:'#F5F5F5',
                  height: 50,
                  borderRadius: 40,
                  left: 12,
                  top: 5,
                  paddingLeft:20,
                }}
                placeholder="Buscar negocios..."
                editable 
                rightIcon={
                  <Icon
                  style={{
                    marginTop:-2,
                    marginRight:20,
                  }}
                  name='search'
                  type='font-awesome'
                    size={20}
                    color='black'
                  />
                }
                />
                </View>
            </View>
            {renderCategorias()}
            {renderTiendas()}
          <View
            style={{
                flex: 0.34,
                alignItems:"center",
                marginBottom:6,
            }}>
            <View
            >
            <UL
                    style={{
                    borderRadius:25,
                    borderWidth:0.1,
                    }}
                    data={Settings}
                    keyExtractor={item => `${item.id}`}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item})=> {
                        return(
                        <View
                        style={{
                            justifyContent:'center',
                            width: 55,
                            alignItems:"center",
                            marginTop:-6
                        }}
                        >
                            <Icon 
                            name={item.filtro}
                            type={item.type} 
                            size={item.size}
                            color='black'
                            onPress={() => item?.toggleTriger ? navigation.openDrawer() 
                            :
                            navigation.navigate(`${item.redirect}`)
                        }
                            />
                            <Text
                            style={{
                                fontSize:11
                            }}
                            >
                                {item.nombre}
                            </Text>
                        </View>
                        )
                    }}
                >
                </UL>
            </View>
            </View> 
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8F8F9"
    }
})
