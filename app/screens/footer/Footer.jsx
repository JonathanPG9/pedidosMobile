import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import { Icon } from 'react-native-elements';
import { Settings } from "../../utils/tiendas"


export default Footer = () => {
  const navigation = useNavigation()
  return(
    <KeyboardAvoidingView
    style={{
      flex:0.31,
      alignItems:'center',
    }}
    enabled
    behavior={Platform.OS === "ios" ? 'padding' : 'height'}
    >
    <SafeAreaView
    style={{
      flex: 0.45,
    }}>
    <View
    style={{
      height: 50,
      borderWidth: 0.1,
      borderRadius: 25,
    }}
    >
      <FlatList
        data={Settings}
        keyboardShouldPersistTaps='handled'
        keyboardShouldPersistTaps={"always"}
        keyExtractor={item => `${item.id}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                justifyContent: 'center',
                width: 55,
                alignItems: "center",
                marginTop: -6,
                
              }}
            >
              <Icon
                containerStyle={{
                  justifyContent: 'center',
                  width: 30,
                  height: 30,
                  borderRadius: 30,
                }}
                name={item.filtro}
                type={item.type}
                size={item.size}
                color='black'
                onPress={() => item?.toggleTriger ? navigation.openDrawer()
                  :
                  navigation.navigate(`${item.redirect}`)
                }
              />
              <Text
                style={{
                  fontSize: 11,
                  marginTop: -4
                }}>
                {item.nombre}
              </Text>
            </View>
          )
        }}
      >
      </FlatList>
    </View>
  </SafeAreaView>
  </KeyboardAvoidingView>
  )
}