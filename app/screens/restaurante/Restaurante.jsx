import React,{useEffect,useState} from 'react';
import { SafeAreaView,Text,View,Image,TouchableOpacity, StyleSheet,ScrollView,FlatList} from "react-native";
import Footer from "../footer/Footer"

export default Restaurante = ({route}) => {
  const [restaurante,setRestaurante] = useState()
  const {item} = route.params

  useEffect(() => {
    setRestaurante(item)
  })

  return ( 
    <SafeAreaView
    style={{
      flex: 1,
    }}
    >
      <View
      style={{
        flex: 3,
      }}
      >
        <ScrollView
        vertical
        style={{
          width: "100%",
        }}
        >
        <View
        style={{
          width: "100%",
          flex: 1,
          alignItems:'center',
        }}
        >
        <Image
        source={restaurante?.foto}
        style={{
          width: "100%",
          height: 225,
        }}
        resizeMode="cover"
        />
        <View
        style={{
          position:"absolute",
          backgroundColor:'#262626D9',
          bottom: -30,
          width: "80%",
          height: 110,
          borderColor:"black",
          borderRadius:20,
        }}
        > 
        <Text
        style={styles.nombre}
        >
          {restaurante?.nombre}
        </Text>
        <Text
        style={styles.text}
        >
          Horarios : <Text style={{fontSize:13}}>Lunes a Viernes 12-18Hs</Text>
        </Text>
        <Text
        style={styles.text}
        >
          Barrio : <Text style={{fontSize:12.5}}>{item.barrio}</Text>
        </Text>
        </View>
        </View>
        <Text
              style={{
                color: "rgb(229,097,00)",
                fontSize:30,
                top: 25,
                marginBottom:25,
                alignSelf:"center"
              }}
              >
                Menu
              </Text>
        <FlatList
        data={restaurante?.comidas}
        keyExtractor={item => `${item.id}`}
        renderItem={({item}) => {
          return(
            <View
            style={{
              flex: 1,
              alignItems:'center'
            }}
            >
            <View
            style={{
              width: "90%",
              height: 90,
              marginVertical:2,
              borderBottomColor:'gray',
              borderBottomWidth:1,
              flex: 1,
            }}
            >
              <View
              style={{
                flex: 1,
                maxWidth:230,
                left: 2,
              }}
              >
              <Text>
              {item.nombreDePlato}
              </Text>
              <Text
              style={{
                fontSize:12,
                color: "#303030",
                top: 2,
              }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio temporibus sint eligendi officiis temporibus officiis Odio
              </Text>
              <Text
              style={{
                fontSize:12,
                color: "#303030",
                fontWeight:'bold',
                top: 8,
              }}
              >
              ${item.precio}
              </Text>
              </View>
              <View
              style={{
                flex: 0,
              }}
              >
              <Image
              source={item.imgPlato}
              resizeMode="cover"
              style={{
                width: 80,
                height: 89,
                top:-0.25,
                alignSelf:'flex-end',
                
              }}
              />
              </View>
            </View>
            </View>
          )
        }}
        />
        </ScrollView>
      </View>
      <Footer/>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize:15,
    fontWeight:'bold',
    letterSpacing:0.5,
    marginBottom:4,
    marginLeft:10,
  },
  nombre: {
    color: 'white',
    fontSize:34,
    letterSpacing:0.5,
    fontFamily:'AlexBrush',
    alignSelf:'center'
  }
})
