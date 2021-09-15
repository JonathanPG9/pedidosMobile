import { icons, images,} from '../tools'


export const Categorias = [ 
  {
    id: 4,
    nombre: "Pancho",
    filtro: "panchos",
    icon: icons.hotdog,
  },
  {
    id:5,
    nombre: "Verduleria",
    filtro:"verduleria",
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
    filtro: "pizzerias",
    icon: icons.pizza,
  },
  {
    id: 8,
    nombre: "Mac",
    filtro:"macdonal",
    icon: icons.fries,
  },
  {
    id: 9,
    nombre: "Carniceria",
    filtro:"carniceria",
    icon: icons.carniceria,
  }
]

export const Tiendas = [
  {
    id: 1,
    nombreProductos: "La birra",
    rating: 4.8,
    categorias: "hamburguesas",
    foto: images.burger_restaurant_1,
    nombre: "Hola",
  },
  {
    id: 2,
    rating: 4.8,
    categorias: "pizzerias",
    foto: images.pizza_restaurant,
    nombre: "El Napoles",
    nombreProductos:"Pizzas",
  },
  {
    id: 3,
    nombreProductos: "Hotdogs",
    rating: 4.8,
    categorias: "panchos",
    foto: images.hot_dog_restaurant,
    nombre: "El paragua",
  },
  {
    id: 4,
    nombreProductos: "Sushi",
    rating: 4.8,
    categorias: "sushi",
    foto: images.japanese_restaurant,
    nombre: "Japones",
  },
  {
    id: 5,
    nombre: "El italiano",
    rating: 4.8,
    categorias: "fideos",
    foto: images.noodle_shop,
    nombreProductos: "Tallarines",
  },
  {
    id: 6,
    nombre: "Grido",
    rating: 4.9,
    categorias: 'heladeria',
    foto: images.heladeria,
    nombreProductos: "Helado de avellaneda",
  }
]

export const Settings = [ 
  {
    id: 1,
    redirect:"home",
    type: 'font-awesome',
    nombre: "Inicio",
    filtro: "home",
    size: 19,
  },
  {
    id: 2,
    redirect:"register",
    type: 'font-awesome',
    nombre: "Buscar",
    size: 17,
    filtro: "search",
  },
  {
    id: 3,
    redirect:"login",
    type: 'font-awesome',
    nombre: "Ayuda",
    filtro: "info",
    size: 19,
  },
  {
    id: 4,
    toggleTriger:true,
    type: 'font-awesome',
    nombre: "Perfil",
    filtro: "user",
    size: 19,
  }
]
