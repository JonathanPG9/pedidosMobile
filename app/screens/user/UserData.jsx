import React,{useState,useContext} from 'react';
import { Contexto } from '../../Context/Context';
import { View,SafeAreaView ,Text, TouchableWithoutFeedback, Image,ScrollView, KeyboardAvoidingView,Platform} from "react-native";
import { Input, Button } from 'react-native-elements';
import {updateUser} from '../../utils/fetching'

export default UserData = () => {
    const {User} = useContext(Contexto)
    const [changePass,setChangePass] = useState(false)
    const [nombre,setNombre] = useState("")
    const [apellido,setApellido] = useState("")
    const [email,setEmail] = useState("")
    const [telefono,setTelefono] = useState("")
    const actualizarUsuario = (nm,apl,eml,tlf) => {
      nm.length > 1 ||
      apl.length > 1 ||
      eml.length > 1 ||
      tlf.length > 1  ?
      updateUser.put({
        nombre : nm,
        apellido : apl ,
        email : eml, 
        telefono : tlf
      })
      :
      alert("Ingrese un cambio")
    }
    console.log(nombre);
  return(
    <SafeAreaView
    style={{
      flex: 1,
      alignItems:"center",
      paddingVertical:30,
    }}
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
            marginTop:5,
            fontSize:12,
          }}
          >
            {`${User.nombre || "Ludmila"} ${User.apellido || "Rodriguez"}`}
          </Text>
          <Text
          style={{
            marginTop:12,
            marginBottom:12,
            alignSelf:'flex-start',
            marginLeft:22,
          }}
          >
              Mis datos
          </Text>
          <KeyboardAvoidingView
          style={{
            flex:0.90,
            width: "90%",
            borderRadius:10,
            backgroundColor:'#E3E4E5',
            justifyContent:'center',
          }}
          enabled
          behavior={Platform.OS === "ios" ? 'padding' : 'height'}
          >
            <ScrollView
            style={{
              flex:1,
            }}
            >
            <Input
            labelStyle={{
              fontSize:12,
              marginTop:10,
            }}
            label="Nombre"
            placeholder={User.nombre || ""}
            onChangeText={(text) => setNombre(text)}
            value={nombre}
            placeholderTextColor="black"
            />
            <Input
            labelStyle={{
              fontSize:12,
            }}
            label="Apellido"
            placeholder={User.apellido || ""}
            placeholderTextColor="black"
            onChangeText={(text) => setApellido(text)}
            value={apellido}
            />
            <Input 
            labelStyle={{
              fontSize:12,
            }}
            placeholder={User.email || ""}
            label="Correo electronico"
            placeholderTextColor="black"
            onChangeText={(text) => setEmail(text)}
            value={email}
            />
            <Input 
            labelStyle={{
              fontSize:12,
            }}
            placeholder={`${User.telefono}`|| ""}
            label="Telefono"
            placeholderTextColor="black"
            onChangeText={(text) => setTelefono(text)}
            value={telefono}
            />
            </ScrollView>
          </KeyboardAvoidingView>
          <TouchableWithoutFeedback
          onPress={() => alert("hola")}
          >
            <View
            style={{
              flex: 0.1,
              alignSelf:"flex-start",
              justifyContent:"center",
              top:20,
              left: 15,
              backgroundColor:"#E3E4E5",
              borderRadius:20,
              padding: 10
            }}
            >
              <Text
              style={{
              }}
              >
            Cambiar contraseña
              </Text>
            </View>
          </TouchableWithoutFeedback>
      </SafeAreaView>
  )

}