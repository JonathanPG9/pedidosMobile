import FetchingData  from "./fetchData";

export const callApiUsers = new FetchingData("http://192.168.100.226:3000/","api/usuarios");
export const logueando = new FetchingData("http://192.168.100.226:3000/","api/login");
export const register = new FetchingData("http://192.168.100.226:3000/","api/register");
export const update = new FetchingData("http://192.168.100.226:3000/","api/usuarios");
export const updatePassword = new FetchingData("http://192.168.100.226:3000/","api/changePassword");