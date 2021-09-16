import React, {useContext} from 'react';
import { View,TouchableOpacity } from "react-native";
import { Input, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { Contexto } from "../../Context/Context";

export default inputSearch = () => {
  const navigation = useNavigation()
  const {setCallKeyboard,callKeyboard} = useContext(Contexto)
  return (
    <TouchableOpacity
      style={{
        flex: 0.6,
        borderBottomWidth: 1,
        borderColor: "#DFDFE0",
        backgroundColor: "white",
        justifyContent: 'center',
      }}
      onPress={() =>  {
        navigation.navigate("search")
        setCallKeyboard(!callKeyboard)
      }}
    >
      <View
        style={{
          flex: 0,
          width: "65%"
        }}
      >
        <Input
          inputContainerStyle={{ borderBottomWidth: 0 }}
          containerStyle={{
            backgroundColor: '#F5F5F5',
            height: 50,
            borderRadius: 40,
            left: 12,
            top: 5,
            paddingLeft: 20,
          }}
          disabled={true}
          placeholder="Buscar negocios..."
          autoFocus={false} 
/*           onTouchStart={() =>  {
            setTimeout(() => {
              navigation.navigate("search")
            },100)
          }  } */
          keyboardShouldPersistTaps="always"
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
  )
}