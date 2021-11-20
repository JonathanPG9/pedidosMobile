import React, {useState, useContext} from 'react';
import { View, SafeAreaView, Text, TouchableWithoutFeedback, Image, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { Input, Button, Icon } from 'react-native-elements';
import {Contexto} from '../../Context/Context';
import { updatePassword } from '../../utils/fetching';
const ChangePass = ({setChangePass}) => {
  const {User,setUser} = useContext(Contexto)
  const [pass, setPass] = useState("")
  const [confirmPass, setConfirmPass] = useState("")
  const [lockPass, setLockPass] = useState(false)
  const [lockConfirmPass, setLockConfirmPass] = useState(false)
  const submit = ()  => {
    if(pass !== confirmPass) return alert("Las contraseñas no coinciden");
    if(pass.length <= 3 || confirmPass.length <= 3 ) return alert("Ingrese una contraseña correcta");
    updatePassword.update(User.userId,{password: pass})
      .then(data => {
        User.password = data.data?.password
        setUser({ ...User })
        setChangePass(false)
        return
      })
      .catch(err => console.log(err))
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
      }}
    >
      <Text
        style={{ fontSize: 18, marginBottom: 10 }}
      >
        Cambia tu contraseña
      </Text>
      <KeyboardAvoidingView
        style={{
          flex: Platform.OS === "ios" ? 0.50 : 0.55,
          width: "90%",
          borderRadius: 10,
          backgroundColor: '#E3E4E5',
          alignItems: "center",
        }}
      >
        <ScrollView
          style={{ height: "100%", width: "100%" }}
        >
          <Input
            labelStyle={{
              fontSize: 12,
              alignSelf: "center",
              marginTop: 80,
              padding: 5,
            }}
            label="Nueva contraseña"
            placeholderTextColor="black"
            onChangeText={(text) => setPass(text)}
            value={pass}
            secureTextEntry={lockPass ? false : true}
            rightIcon={
              <Icon
                onPress={() => setLockPass(!lockPass)}
                style={{
                  marginTop: -2,
                  marginRight: 20,
                }}
                type='font-awesome'
                name={lockPass ? 'eye' : 'eye-slash'}
                color='white'
              />}
          />
          <Input
            labelStyle={{
              fontSize: 12,
              marginTop: 10,
              padding: 5,
              alignSelf: "center",
            }}
            secureTextEntry={lockConfirmPass ? false : true}
            rightIcon={
              <Icon
                onPress={() => setLockConfirmPass(!lockPass)}
                style={{
                  marginTop: -2,
                  marginRight: 20,
                }}
                type='font-awesome'
                name={lockConfirmPass ? 'eye' : 'eye-slash'}
                color='white'
              />}
            label="Confirmar contraseña"
            placeholderTextColor="black"
            onChangeText={(text) => setConfirmPass(text)}
            value={confirmPass}
          />
          <Button
          title="Listo"
          containerStyle={{
            marginTop:10,
            backgroundColor: "rgb(229,097,00)",
            width: "90%",
            alignSelf:"center"
          }}
          onPress={() => submit()}
          titleStyle={
            {
              color: "white",
              fontSize: 14,
              letterSpacing: 1,
            }
          }
          type="clear"/>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default ChangePass;