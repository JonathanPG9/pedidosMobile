import React, {useState,useContext} from 'react';
import { StyleSheet,TextInput, Text} from 'react-native';
import styled from 'styled-components/native'
import {Contexto} from "../../Context/Context"
import { Input,Button } from 'react-native-elements';

const CntPadre = styled.View`
flex: 1;
justify-content: center;
`
const ImgCnt = styled.ImageBackground`
  flex: 1;
  position: relative;
  justify-content: center;
  align-items: center;
`
const CntInput = styled.View`
  width: 50%;
  position: relative;
`


const SubmitButton = styled.TouchableHighlight`
align-items: center;
`

export default function Register({navigation}) {

  const {registrando } = useContext(Contexto)
  const [valuePass, setValuePass] = useState("");
  const [valueName,setValueName] = useState("")
  const [valueEmail,setValueEmail] = useState("")
  const [valueNumero,setValueNumero] = useState(0)

  const submit = () => {
    if(valuePass &&
      valueNumero &&
      valuePass &&
      valueEmail
      ) {
        registrando(
          valueName.toLocaleLowerCase(),
          valuePass.toLocaleLowerCase(),
          valueEmail.toLocaleLowerCase(),
          valueNumero
          )
          setValueName("")
          setValuePass("")
          setValueNumero("")
          setValueEmail("")
          navigation.navigate("login")
        }
      else{
        alert("Ingrese datos")
      }
  }
  return (
    <CntPadre >
      <ImgCnt source={require('../../assets/registro.jpeg')} >
      <CntInput >
          <Input
            onChangeText={valueName => setValueName(valueName)}
            placeholder="Nombre"
            style={styles.input}
            value={valueName}
            placeholderTextColor="white"
                inputContainerStyle={{
                  borderBottomColor:"white"
                }}
          />
          <Input
            onChangeText={valueEmail => setValueEmail(valueEmail)}
            placeholder="Email"
            keyboardType="email-address"
            style={styles.input}
            value={valueEmail}
            placeholderTextColor="white"
                inputContainerStyle={{
                  borderBottomColor:"white"
                }} 
          />
          <Input
            onChangeText={valueNumero => setValueNumero(valueNumero)}
            placeholder="Numero"
            style={styles.input}
            keyboardType="numeric"
            placeholderTextColor="white"
                inputContainerStyle={{
                borderBottomColor:"white" 
                }} 
          />
          <Input
          style={styles.input}
          placeholder="Contraseña"
          onChangeText={valuePass => setValuePass(valuePass)}
          value={valuePass}
          placeholderTextColor="white"
                inputContainerStyle={{
                  borderBottomColor:"white"
                }}
          secureTextEntry={true}
          />
          <SubmitButton > 
            <Button
              style={styles.text}
            onPress={submit}
            title="Registrarse"
            containerStyle={{
              backgroundColor:"rgb(229,097,00)",
            }}
            titleStyle={
              {
              color: "white",
              fontSize:14,
              letterSpacing:1,
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
  );
}

const styles = StyleSheet.create({
  text : {
    marginTop: 15,
    fontSize: 16,
    fontWeight: "bold",
    borderRadius:25,
    letterSpacing: 5,
    padding: 5,
    color: "black",
    borderColor: "black",
    backgroundColor:"rgb(229,097,00)",
  },
  input: {
    color: "white"
  },
  textRegister: {
    fontSize: 12,
    letterSpacing: 2.5,
    color: "rgb(229,097,00)",
  }
});
