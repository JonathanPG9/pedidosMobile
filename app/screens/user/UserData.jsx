import React from 'react';
import { View,SafeAreaView ,Text, Dimensions, Image,ScrollView, KeyboardAvoidingView,Platform} from "react-native";
import { Input, Button } from 'react-native-elements';


export default UserData = () => {

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
            Ludmila Rodriguez
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
            flex:0.75,
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
            placeholderTextColor="black"
            />
            <Input
            labelStyle={{
              fontSize:12,
            }}
            label="Apellido"
            placeholderTextColor="black"
            />
            <Input 
            labelStyle={{
              fontSize:12,
            }}
            label="Telefono"
            placeholderTextColor="black"
            />
            </ScrollView>
          </KeyboardAvoidingView>
      </SafeAreaView>
  )

}