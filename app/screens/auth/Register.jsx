import React, { useState, useContext } from 'react';
import { StyleSheet, KeyboardAvoidingView, SafeAreaView,Platform } from 'react-native';
import styled from 'styled-components/native'
import { Contexto } from "../../Context/Context"
import { Input, Button, Icon } from 'react-native-elements';

const CntPadre = styled.SafeAreaView`
  flex: 1;
`
const ImgCnt = styled.ImageBackground`
  flex: 1;
  align-items: center;
`
const CntInput = styled.ScrollView`
  flex:1;
  width: 80%;
  top: 57.73px;
` 
const SubmitButton = styled.TouchableHighlight`
  align-items: center;
` 
export default function Register({ navigation }) {

  const { registrando } = useContext(Contexto)
  const [valuePass, setValuePass] = useState("");
  const [valueName, setValueName] = useState("")
  const [valueEmail, setValueEmail] = useState("")
  const [valueNumero, setValueNumero] = useState()
  const [valueEdad, setValueEdad] = useState()
  const [lockPass,setLockPass] = useState(false)
  const [errorText,setErrorText] = useState("")

  const submit = () => {
      registrando(
        valueName.toLocaleLowerCase(),
        valuePass.toLocaleLowerCase(),
        valueEmail.toLocaleLowerCase(),
        valueNumero,
        valueEdad,
        navigation.navigate,
        setErrorText
      )
  }
  return (
    <KeyboardAvoidingView
    style={{
      flex: 1,
    }}
    enabled
    behavior={Platform.OS === "ios" ? 'padding' : 'height'}
    >
    <CntPadre >
      <ImgCnt source={require('../../assets/welcome.jpg')} >
        <CntInput
        keyboardShouldPersistTaps='handled'
        keyboardShouldPersistTaps={"always"}
        >
          <Input
            onChangeText={valueName => {
              //setErrorText("")
              setValueName(valueName)}}
            labelStyle={{
              fontSize:12,
              top:-4,
              color:"white"
            }}
            label="Nombre"
            style={styles.input}
            value={valueName}
            placeholderTextColor="white"
            inputContainerStyle={{
              borderBottomColor: "white"
            }}
          />
          <Input
            onChangeText={valueEmail => {
              //setErrorText("")
              setValueEmail(valueEmail)}}
            keyboardType="email-address"
            labelStyle={{
              fontSize:12,
              top:-4,
              color:"white"
            }}
            label="Correo Electronico"
            style={styles.input}
            value={valueEmail}
            placeholderTextColor="white"
            inputContainerStyle={{
              borderBottomColor: "white"
            }}
          />
          <Input
            onChangeText={valueNumero => {
              //setErrorText("")
              setValueNumero(valueNumero)}}
            labelStyle={{
              fontSize:12,
              top:-4,
              color:"white"
            }}
            label="Telefono"
            style={styles.input}
            keyboardType="numeric"
            placeholderTextColor="white"
            inputContainerStyle={{
              borderBottomColor: "white"
            }}
          />
          <Input
            onChangeText={valueNumero => {
              //setErrorText("")
              setValueEdad(valueNumero)}}
            labelStyle={{
              fontSize:12,
              top:-4,
              color:"white"
            }}
            label="Edad"
            value={valueEdad}
            style={styles.input}
            keyboardType="numeric"
            placeholderTextColor="white"
            inputContainerStyle={{
              borderBottomColor: "white"
            }}
          />
          <Input
            style={styles.input}
            onChangeText={valuePass => {
              //setErrorText("")
              setValuePass(valuePass.toLowerCase())}}
            labelStyle={{
              fontSize:12,
              color:"white"
            }}
            label="Contraseña"
            value={valuePass}
            rightIcon={ 
              <Icon
              onPress={() => setLockPass(!lockPass)}
              type = 'font-awesome'
              name = {lockPass ? 'eye' : 'eye-slash'}
              color ='white'
            />}
            placeholderTextColor="white"
            inputContainerStyle={{
              borderBottomColor: "white",
              top:-15
            }}
            secureTextEntry={lockPass ? false : true}
            errorMessage={errorText}
            errorStyle={{
              alignSelf:'center',
              fontWeight:"bold",
              fontSize:15,
              textAlign:'center'
            }}
          />
          <SubmitButton >
            <Button
              style={styles.text}
              onPress={submit}
              title="Registrarse"
              containerStyle={{
                backgroundColor: "rgb(229,097,00)",
              }}
              titleStyle={
                {
                  color: "white",
                  fontSize: 14,
                  letterSpacing: 1,
                }
              }
              type="clear"
            >
              Listo
            </Button>
          </SubmitButton>
        </CntInput>
      </ImgCnt>
    </CntPadre>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  text: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: "bold",
    borderRadius: 25,
    letterSpacing: 5,
    padding: 5,
    color: "black",
    borderColor: "black",
    backgroundColor: "rgb(229,097,00)",
  },
  input: {
    color: "white",
    fontSize:13,
    padding:3,
  }
});
