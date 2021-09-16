import React, { useState, useContext } from 'react';
import { StyleSheet, KeyboardAvoidingView, Text } from 'react-native';
import styled from 'styled-components/native'
import { Contexto } from "../../Context/Context"
import { Input, Button } from 'react-native-elements';

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
  bottom:55px;
`
const CntRegistro = styled.View`
  position: absolute;
  align-self: flex-end;
  justify-content: center;
  align-items: center;
  bottom: 30px;
  right:  10px;
`


const SubmitButton = styled.TouchableHighlight`
align-items: center;
`

export default function Login({ navigation }) {
  const { logeando } = useContext(Contexto)
  const [valuePass, setValuePass] = useState("");
  const [valueName, setValueName] = useState("")
  const submit = () => {
    logeando(valueName.toLocaleLowerCase(), valuePass.toLocaleLowerCase(), navigation.navigate)
    setValueName("")
    setValuePass("")
  }
  return (
    <KeyboardAvoidingView
    style={{
      flex: 1,
    }}
    behavior='height'
    >
    <CntPadre >
      <ImgCnt source={require('../../assets/welcome.jpeg')} >
        <CntInput>
          <Input
            onChangeText={valueName => setValueName(valueName)}
            placeholder="Usuario"
            placeholderTextColor="white"
            style={styles.input}
            value={valueName}
            inputContainerStyle={{
              borderBottomColor: "white"
            }}
          />
          <Input
            placeholder="Contraseña"
            placeholderTextColor="white"
            onChangeText={text => setValuePass(text)}
            value={valuePass}
            inputContainerStyle={{
              borderBottomColor: "white"
            }}
            style={styles.input}
            secureTextEntry={true}
          />
          <SubmitButton >
            <Button
              title="Ingresar"
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
            onPress={() => navigation.navigate("register")}
            style={styles.textRegister}
          >
            ¿Sin cuenta?
          </Text>
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
    height: 30,
    color: "white",
    padding: 5,
  },
  textRegister: {
    fontSize: 20,
    letterSpacing: 2.5,
    color: "rgb(229,097,00)",
    fontFamily: "Karantina-Light",
  }
});
