import FetchingData  from "./fetchData";

export const callApiUsers = new FetchingData("https://altoque-ambiente-dev.herokuapp.com/","api/usuarios")
export const logueando = new FetchingData("https://altoque-ambiente-dev.herokuapp.com/","api/login")
export const register = new FetchingData("https://altoque-ambiente-dev.herokuapp.com/","api/register")
export const update = new FetchingData("https://altoque-ambiente-dev.herokuapp.com/","api/usuarios")
export const updatePassword = new FetchingData("https://altoque-ambiente-dev.herokuapp.com/","api/changePassword")