import React, { createContext, useState } from 'react';
import { callApiUsers, logueando, register } from "../utils/fetching"
import { useNavigation } from '@react-navigation/native';

export const Contexto = createContext()

const Context = ({ children }) => {
  const [Usuario, setUsuario] = useState([])
  const [isLogged, setIsLogged] = useState()
  const [value, setValue] = useState(1)
  const [callKeyboard, setCallKeyboard] = useState(false)
  const [carrito,setCarrito] = useState([])
  const [total,setTotal] = useState(0)
  const navigation = useNavigation()
  const logeando = (email, pass, fn,setErrorText) => {
    logueando.post({
      email: email,
      password: pass
    })
    .then(data => {
      /* setUSUARIO(data["data"]) */
      setIsLogged(true)
      fn("home")
      setErrorText("")
      setUsuario(data.data)
    })
    .catch(err => {
      setIsLogged(false)
      setErrorText("Email y/o password invalidos")
    })
  }
  const registrando = (name, pass, email, telefono, edad, fn,setErrorText) => {
    register.post({
      nombre: name,
      password: pass,
      email: email,
      telefono: telefono,
      edad: edad 
    })
    .then(data => {
      fn("login")
      setErrorText("")
    })
    .catch(err => {
      setIsLogged(false)
      setErrorText(err?.response?.data)
    })
  }
  const context = {
    registrando: registrando,
    logeando: logeando,
    isLogged: isLogged,
    User: Usuario,
    setUser: setUsuario,
    callKeyboard: callKeyboard,
    setCallKeyboard: setCallKeyboard,
    setCarrito: setCarrito,
    carrito: carrito,
    value: value,
    setValue: setValue,
    navigation: navigation,
    total: total,
    setTotal: setTotal
  }
  console.log(carrito)

  return (
    <Contexto.Provider value={context}>
      {children}
    </Contexto.Provider>
  );
}
export default Context;