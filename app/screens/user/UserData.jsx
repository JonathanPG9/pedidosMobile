import React, { useState, useContext } from 'react';
import { Contexto } from '../../Context/Context';
import { View, Text, TouchableWithoutFeedback, StyleSheet, ScrollView, Platform } from "react-native";
import { Input } from 'react-native-elements';
import { update } from '../../utils/fetching'
import styled from 'styled-components/native'
import ChangePass from './ChangePass';


const KbCnt = styled.KeyboardAvoidingView`
    width: 90%;
    border-radius: 10px;
    flex:${({platform}) =>  platform.OS === "ios" ? 0.80 : 0.91  };
    background-color: #E3E4E5;
`
const SafeArea = styled.SafeAreaView `
    flex: 1;
    align-items: center; 
    padding: 20px 0 30px 0;
`

const Img = styled.Image `
    width: 72px;
    height: 72px;
    background-color: yellow;
    border-radius: 100px;
    margin-top:${({platform}) => platform.OS === "ios" ? `55px` : `1px`};
`

const PassBtn = styled.View`
    flex: 0.1;
    align-self: flex-start;
    justify-content: center;
    top: 20px;
    left: 15px;
    background-color: #E3E4E5;
    border-radius: 20px;
    padding: 5px;
`
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
          <SafeArea>
            <Img platform= {Platform}
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
            <KbCnt
              platform = {Platform}
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
                    labelStyle={styles.inputStyle}
                    label="Apellido"
                    placeholder={User.apellido || ""}
                    placeholderTextColor="black"
                    onChangeText={(text) => setApellido(text)}
                    value={changeApellido}
                  />
                  <Input
                    labelStyle={styles.inputStyle}
                    placeholder={User.email || ""}
                    label="Correo electronico"
                    placeholderTextColor="black"
                    onChangeText={(text) => setEmail(text)}
                    value={changeEmail}
                  />
                  <Input
                    labelStyle={styles.inputStyle}
                    placeholder={`${User.telefono}` || ""}
                    label="Telefono"
                    placeholderTextColor="black"
                    onChangeText={(text) => setTelefono(text)}
                    value={changeTelefono}
                  />
                </View>
              </ScrollView>
            </KbCnt>
            <TouchableWithoutFeedback
            >
              <PassBtn>
                {
                  changeNombre.length > 0 ||
                    changeApellido.length > 0 ||
                    changeEmail.length > 0 ||
                    changeTelefono.length > 0 ?
                    <Text onPress={() => { actualizarUsuario(changeNombre, changeApellido, changeEmail, changeTelefono) }}
                      style={{ height: 20 }}
                    >
                      Actualizar datos
                    </Text>
                    :
                    <Text onPress={() => setChangePass(true)}
                      style={{ height: 20 }}
                    >
                      Cambiar contraseña
                    </Text>
                }
              </PassBtn>
            </TouchableWithoutFeedback>
          </SafeArea>
      }
    </>
  )

}

const styles = StyleSheet.create({
  inputStyle: {
    fontSize: 12,
    marginTop: Platform.OS === "ios" ? 22 : 0,
  }
})