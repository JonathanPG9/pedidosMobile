import {
  icons,
  images,
} from '../tools'


export const Categorias = [
  {
    id: 4,
    nombre: "Pancho",
    filtro: "panchos",
    icon: icons.hotdog,
  },
  {
    id: 5,
    nombre: "Verduleria",
    filtro: "verduleria",
    icon: icons.salad,
  },
  {
    id: 6,
    nombre: "Burgers",
    filtro: "hamburguesas",
    icon: icons.hamburger,
  },
  {
    id: 7,
    nombre: "Pizza",
    filtro: "pizzeria",
    icon: icons.pizza,
  },
  {
    id: 8,
    nombre: "Mac",
    filtro: "macdonal",
    icon: icons.fries,
  },
  {
    id: 9,
    nombre: "Carniceria",
    filtro: "carniceria",
    icon: icons.carniceria,
  }
]

export const Tiendas = [{
    id: 1,
    nombreProductos: "hamburguesas",
    rating: 4.8,
    categorias: "hamburguesas",
    foto: images.burger_restaurant_1,
    nombre: "La Birra",
    descripcion:'"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
    barrio:"Retiro"
  },
  {
    id: 2,
    rating: 4.8,
    categorias: "pizzeria",
    foto: images.pizza_restaurant,
    nombreProductos: "Pizzas",
    nombre: "El Napoles",
    descripcion:'"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
    barrio:"Retiro"
  },
  {
    id: 3,
    nombreProductos: "Hotdogs",
    rating: 4.8,
    categorias: "panchos",
    foto: images.hot_dog_restaurant,
    nombre: "El paragua",
    descripcion:'"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
    barrio:"Palermo"
  },
  {
    id: 4,
    nombreProductos: "Sushi",
    rating: 4.8,
    categorias: "sushi",
    foto: images.japanese_restaurant,
    nombre: "Japones",
    descripcion:'"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
    barrio:"Puerto Madero"
  },
  {
    id: 5,
    nombre: "El italiano",
    rating: 4.8,
    categorias: "fideos",
    foto: images.noodle_shop,
    nombreProductos: "Tallarines",
    descripcion:'"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
    barrio:"Chino"
  },
  {
    id: 221,
    nombre: "Grido",
    rating: 4.9,
    categorias: 'pizzeria',
    foto: images.heladeria,
    nombreProductos: "Helado de avellaneda",
    descripcion:'"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
    barrio:"Belgrano"
  }, 
  {
    id: 9,
    nombre: "Grido",
    rating: 4.9,
    categorias: 'heladeria',
    foto: images.heladeria,
    nombreProductos: "Helado de avellaneda",
    descripcion:'"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
    barrio:"Belgrano"
  },
  {
    id: 8,
    nombre: "Grido",
    rating: 4.9,
    categorias: 'heladeria',
    foto: images.heladeria,
    nombreProductos: "Helado de avellaneda",
    descripcion:'"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
    barrio:"Belgrano"
  },
  {
    id: 232,
    nombre: "Grido",
    rating: 4.9,
    categorias: 'heladeria',
    foto: images.heladeria,
    nombreProductos: "Helado de avellaneda",
    descripcion:'"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
    barrio:"Belgrano"
  },
  {
    id: 42,
    nombre: "Grido",
    rating: 4.9,
    categorias: 'heladeria',
    foto: images.heladeria,
    nombreProductos: "Helado de avellaneda",
    descripcion:'"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
    barrio:"Belgrano"
  }
]

export const Settings = [{
    id: 1,
    redirect: "Home",
    type: 'font-awesome',
    nombre: "Inicio",
    filtro: "home",
    size: 19,
  },
  {
    id: 2,
    redirect: "search",
    type: 'font-awesome',
    nombre: "Buscar",
    size: 17,
    filtro: "search",
  },
  {
    id: 3,
    redirect: "login",
    type: 'font-awesome',
    nombre: "Ayuda",
    filtro: "info",
    size: 19,
  },
  {
    id: 4,
    toggleTriger: true,
    type: 'font-awesome',
    nombre: "Perfil",
    filtro: "user",
    size: 19,
  }
]