import React,{useContext} from 'react';
import DefaultSearch from "../search/DefaultSearch"
import { Contexto } from '../../Context/Context';
import { SafeAreaView,Text,View} from 'react-native';
const RestaurantesFavoritos = () => {
  const {User} = useContext(Contexto)
  return ( 
    <SafeAreaView
    style={{
      flex: 1,
    }}
    >
      {
        User?.tiendas?.length > 0 ?
        <DefaultSearch
        user = {User}
        isFavorite = {true}
        >
        </DefaultSearch>
        :
        <View
        style={{
          justifyContent:'center',
          alignItems:'center',
          width: "100%",
          height: "100%"
        }}
        >
          <Text>
            No tenes restaurantes favoritos
          </Text>
          <Text>
            Agregalos
          </Text>
        </View>
      }
    </SafeAreaView>
    );
}

export default RestaurantesFavoritos;