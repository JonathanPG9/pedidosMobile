import React, { useState, useContext } from 'react';
import { StyleSheet, KeyboardAvoidingView, Text, Platform,View} from 'react-native';
import styled from 'styled-components/native'
import { Contexto } from "../../Context/Context"
import { Input, Button , Icon} from 'react-native-elements';

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
  width: 80%;
  position: relative;
  bottom: 20px;
`
const CntRegistro = styled.View`
  position: absolute;
  bottom: 15px;
  right:  10px;
`
const SubmitButton = styled.TouchableHighlight`
align-items: center;
`
export default function Login({ navigation }) {
  const { logeando } = useContext(Contexto)
  const [valuePass, setValuePass] = useState("");
  const [valueName, setValueName] = useState("")
  const [lockPass,setLockPass] = useState(false)
  const [errorText,setErrorText] = useState("")
  const submit = () => {
    logeando(valueName.toLocaleLowerCase(), valuePass.toLocaleLowerCase(), navigation.navigate,setErrorText)
    setValueName("")
    setValuePass("")
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
        <CntInput>
          <Input
            onChangeText={valueName =>{
            setErrorText("")
            setValueName(valueName)}
            }
            labelStyle={{
              fontSize:12,
              top:11,
              color:"white"
            }}
            label="Correo Electronico"
            style={styles.input}
            value={valueName}
            inputContainerStyle={{
              borderBottomColor: "white",
            }}
          />
          <Input
            labelStyle={{
              fontSize:12,
              top:11,
              color:"white"
            }}
            label="Contraseña"
            errorMessage={errorText}
            onChangeText={valuePass =>{
              setErrorText("")
              setValuePass(valuePass)}
            }
            value={valuePass}
            inputContainerStyle={{
              borderBottomColor: "white"
            }}
            style={styles.input}
            secureTextEntry={lockPass ? false : true}
            rightIcon={ 
            <Icon
            onPress={() => setLockPass(!lockPass)}
            style={{
              marginTop: -2,
              marginRight: 20,
            }}
            type = 'font-awesome'
            name = {lockPass ? 'eye' : 'eye-slash'}
            color ='white'
          />}
          />
          <Text
          style={{
            alignSelf:'center',
            color: "white",
            top: -6,
          }}
          >
            Haz olvidado tu contraseña?
          </Text>
          <SubmitButton > 
            <Button
              title="Listo"
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
              onPress={submit}
              type="clear"
            />
          </SubmitButton>
        </CntInput>
        <CntRegistro>
          <Text
            style={styles.textRegister}
            onPress={() => navigation.navigate("register")}
          >
            Registrate
          </Text>
        </CntRegistro>
      </ImgCnt>
    </CntPadre>
    </KeyboardAvoidingView>

  );
}

const styles = StyleSheet.create({
  input: {
    color: "white",
    fontSize:14,
    padding:2,
  },
  textRegister: {
    fontSize: 20,
    letterSpacing: 2.5,
    color: "rgb(229,097,00)",
    fontFamily: "Karantina-Light",
  }
});
