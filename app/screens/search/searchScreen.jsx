import React, { useEffect,useContext} from 'react';
import { View,SafeAreaView ,Text, FlatList, Dimensions, Image,TouchableOpacity, KeyboardAvoidingView,Platform , Keyboard} from "react-native";
import SearchInput from "./inputSearch"
import Footer from "../footer/Footer"
import {Tiendas} from "../../utils/tiendas"
import { Contexto } from '../../Context/Context';
import { Input, Icon } from 'react-native-elements';

const { width } = Dimensions.get("window");


const Search = () => {
  const input = React.createRef()
  const {callKeyboard} = useContext(Contexto)

  useEffect(() => {
    setTimeout(() => {
      input.current?.focus()
    },40)
  },[callKeyboard])
  return ( 
    <KeyboardAvoidingView 
    style={{
      flex:1,
    }}
    enabled
    behavior={Platform.OS === "ios" ? 'padding' : 'height'}
    >
    <SafeAreaView 
    style={{
      flex:1,
    }}
    > 
        <TouchableOpacity
      style={{
        flex: 0.6,
        borderBottomWidth: 1,
        borderColor: "#DFDFE0",
        backgroundColor: "white",
        justifyContent: 'center',
      }}
    >
      <View
        style={{
          flex: 0,
          width: "90%"
        }}
      >
        <Input
          ref={input}
          inputContainerStyle={{ borderBottomWidth: 0 }}
          containerStyle={{
            backgroundColor: '#F5F5F5',
            height: 50,
            borderRadius: 40,
            left: 12,
            top: 5,
            paddingLeft: 20,
          }}
          placeholder="Buscar negocios..."
          rightIcon={
            <Icon
              style={{
                marginTop: -2,
                marginRight: 20,
              }}
              name='search'
              type='font-awesome'
              size={20}
              color='black'
            />
          }
        />
      </View>
    </TouchableOpacity>
      <View
      style={{
        flex:2.334,
        justifyContent:'center',
        alignItems:'center'
      }}
      >
        <FlatList
        style={{
          width,
        }}
        showsVerticalScrollIndicator={false}
        data={Tiendas}
        keyExtractor={item => `${item.id}`}
        renderItem={({item}) => {
          return(
            <View
            style={{
              paddingVertical:25,
              justifyContent:'center',
              flexDirection:'row',
              borderColor:'#DFDFE0',
              borderWidth:1.5,
            }}
            >
            <TouchableOpacity
            style={{
              alignItems:'center',
              right: 10,
            }}
            >
            <Image
              style={{
                width: 66,
                height: 66,
                borderRadius:40,
              }}
              source={item.foto}
              />
              <Text
              style={{
                marginTop:5,
              }}
              >
                Rural
              </Text>
            </TouchableOpacity>
              <View
              style={{
                alignItems:'center',
                position: "relative",
                right: -20,
                width: "60%",
                top: 8,
              }}
              >
              <Text
              >{item.nombre}
              </Text>
              <Text
              style={{
                textAlign:"center"
              }}
              >
                {item.descripcion} 
              </Text>
              </View>
            </View>
          )
        }}
        />
      </View>
      <Footer/> 
    </SafeAreaView>
    </KeyboardAvoidingView>

  );
}

export default Search;