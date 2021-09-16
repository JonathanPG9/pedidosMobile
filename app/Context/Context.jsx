import React, { createContext, useState } from 'react';
import { callApiUsers, logueando, register } from "../utils/fetching"

export const Contexto = createContext()

const Context = ({ children }) => {

  const [USUARIO, setUSUARIO] = useState([])
  const [isLogged, setIsLogged] = useState()
  const [callKeyboard, setCallKeyboard] = useState(false)

  const logeando = (name, pass, fn) => {
    logueando.post({
      nombre: name,
      password: pass
    }
    )
      .then(data => {
        setUSUARIO(data["data"])
        setIsLogged(true)
        fn("home")
      })
      .catch(err => {
        setIsLogged(false)
        console.log(err)
        alert("Datos erroneos")
      })
  }
  const registrando = (name, pass, email, numero) => {
    register.post({
      nombre: name,
      password: pass,
      email: email,
      numero: numero
    }
    )
      .then(data => {
        setUSUARIO(data["data"])
        setIsLogged(true)
      })
      .catch(err => {
        setIsLogged(false)
        console.log(err)
        alert("Datos erroneos")
      })
  }
  const context = {
    registrando: registrando,
    logeando: logeando,
    isLogged: isLogged,
    User: USUARIO,
    callKeyboard : callKeyboard,
    setCallKeyboard : setCallKeyboard
  }
  return (
    <Contexto.Provider value={context}>
      {children}
    </Contexto.Provider>
  );
}
export default Context;