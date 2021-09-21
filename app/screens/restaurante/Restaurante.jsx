import React,{useEffect,useState} from 'react';
import { SafeAreaView,Text,View,Image,TouchableOpacity, StyleSheet,ScrollView} from "react-native";
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
      alignItems:'center'
      }}
      >
        <ScrollView
        style={{
          width: "100%",
          backgroundColor:'red',
          flex: 100,
        }}
        >
        <View
        style={{
          width: "100%",
          backgroundColor:'yellow',
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
        <Text>
          hola
        </Text>
        <Text>
          hola
        </Text>
        <Text>
          hola
        </Text>
        <Text>
          hola
        </Text>
        <Text>
          hola
        </Text>
        <Text>
          hola
        </Text>
        <Text>
          hola
        </Text>
        <Text>
          hola
        </Text>
        <Text>
          hola
        </Text>
        <Text>
          hola
        </Text>
        <Text>
          hola
        </Text>
        <Text>
          hola
        </Text>
        <Text>
          hola
        </Text>
        <Text>
          hola
        </Text>
        <Text>
          hola
        </Text>
        <Text>
          hola
        </Text>
        <Text>
          hola
        </Text>
        <Text>
          hola
        </Text>
        <Text>
          hola
        </Text>
        <Text>
          hola
        </Text>
        <Text>
          hola
        </Text>
        <Text>
          hola
        </Text>
        <Text>
          hola
        </Text>
        <Text>
          hola
        </Text>
        <Text>
          hola
        </Text>
        <Text>
          hola
        </Text>
        <Text>
          hola
        </Text>
        <Text>
          hola
        </Text>
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
