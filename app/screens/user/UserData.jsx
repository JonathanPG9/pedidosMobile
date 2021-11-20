import React, { useState, useContext } from 'react';
import { Contexto } from '../../Context/Context';
import { View, SafeAreaView, Text, TouchableWithoutFeedback, Image, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { Input } from 'react-native-elements';
import { update } from '../../utils/fetching'
import ChangePass from './ChangePass';

export default UserData = () => {
  const { User, setUser } = useContext(Contexto)
  const { nombre, apellido, email, telefono } = User;
  const [changePass, setChangePass] = useState(false)
  const [changeNombre, setNombre] = useState("")
  const [changeApellido, setApellido] = useState("")
  const [changeEmail, setEmail] = useState("")
  const [changeTelefono, setTelefono] = useState("")
  const actualizarUsuario = (nm, apl, eml, tlf) => {
    update.update(User.userId, {
      nombre: nm.length > 0 ? nm : nombre,
      apellido: apl.length > 0 ? apl : apellido,
      email: eml.length > 0 ? eml : email,
      telefono: tlf.length > 0 ? tlf : telefono
    })
      .then(data => {
        User.nombre = data.data?.nombre
        User.apellido = data.data?.apellido
        User.email = data.data?.email
        User.telefono = data.data?.telefono
        setUser({ ...User })
        setNombre("")
        setApellido("")
        setTelefono("")
        setEmail("")
        return
      })
      .catch(err => console.log(err))
  }
  return (
    <>
    {
      changePass ?
      <ChangePass
      setChangePass={setChangePass}
      />
      :
    <SafeAreaView style={{ flex: 1, alignItems: "center", paddingVertical: 30 }}>
    <Image
      style={{
        width: 72,
        height: 72,
        backgroundColor: 'yellow',
        borderRadius: 100,
        marginTop:Platform.OS === "ios" ? 55 : 1,
      }}
      resizeMode="cover"
      source={{ uri: "https://i.pinimg.com/236x/f9/27/77/f927779d0f19649c681d9b5a0c365edd.jpg" }}
    />
    <Text
      style={{
        color: "#303030",
        marginTop: 5,
        fontSize: 12,
      }}
    >
      {`${nombre || "Ludmila"} ${apellido || "Rodriguez"}`}
    </Text>
    <Text
      style={{
        marginTop: 12,
        marginBottom: 12,
        alignSelf: 'flex-start',
        marginLeft: 22,
      }}
    >
      Mis datos
    </Text>
    <KeyboardAvoidingView
      style={{
        flex: Platform.OS === "ios" ? 0.80 : 0.91,
        width: "90%",
        borderRadius: 10,
        backgroundColor: '#E3E4E5',
      }}
      enabled
      behavior={Platform.OS === "ios" ? 'padding' : 'height'}
    >
      <ScrollView style={{ flex: 1 }}>
        <View style={{ marginTop: Platform.OS === "ios" ? 22 : -10 }}>
          <Input
            labelStyle={{
              fontSize: 12,
              marginTop: 22,
            }}
            label="Nombre"
            placeholder={User.nombre || ""}
            onChangeText={(text) => setNombre(text)}
            value={changeNombre}
            placeholderTextColor="black"
          />
          <Input
            labelStyle={{
              fontSize: 12,
              marginTop: Platform.OS === "ios" ? 22 : 0,
            }}
            label="Apellido"
            placeholder={User.apellido || ""}
            placeholderTextColor="black"
            onChangeText={(text) => setApellido(text)}
            value={changeApellido}
          />
          <Input
            labelStyle={{
              fontSize: 12,
              marginTop: Platform.OS === "ios" ? 22 : 0,
            }}
            placeholder={User.email || ""}
            label="Correo electronico"
            placeholderTextColor="black"
            onChangeText={(text) => setEmail(text)}
            value={changeEmail}
          />
          <Input
            labelStyle={{
              fontSize: 12,
              marginTop: Platform.OS === "ios" ? 22 : 0,
            }}
            placeholder={`${User.telefono}` || ""}
            label="Telefono"
            placeholderTextColor="black"
            onChangeText={(text) => setTelefono(text)}
            value={changeTelefono}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
    <TouchableWithoutFeedback
    >
      <View
        style={{
          flex: 0.1,
          alignSelf: "flex-start",
          justifyContent: "center",
          top: 20,
          left: 15,
          backgroundColor: "#E3E4E5",
          borderRadius: 20,
          padding: 5
        }}
      >
        {
          changeNombre.length > 0 ||
            changeApellido.length > 0 ||
            changeEmail.length > 0 ||
            changeTelefono.length > 0 ?
            <Text onPress={() => {actualizarUsuario(changeNombre, changeApellido, changeEmail, changeTelefono)}}
            style={{height:20}}
            >
              Actualizar datos
            </Text>
            :
            <Text onPress={() => setChangePass(true)}
            style={{height:20}}
            >
              Cambiar contraseña
            </Text>
        }
      </View>
    </TouchableWithoutFeedback>
  </SafeAreaView>
    }
    </>
  )

}