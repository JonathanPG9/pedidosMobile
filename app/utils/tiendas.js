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
    barrio:"Retiro",
    comidas:[
      {
        nombreDePlato: "Hamburguesa Doble Cheddar",
        precio : 100,
        id:1,
        imgPlato:images.burger_restaurant_1
      },
      {
        nombreDePlato: "Hamburguesa Panceta y huevo",
        precio : 100,
        id:2,
        imgPlato:images.burger_restaurant_1
      },
      {
        nombreDePlato: "Hamburguesa Vegana",
        precio : 100,
        id:3,
        imgPlato:images.burger_restaurant_1
      },
      {
        nombreDePlato: "Hamburguesa Con Guacamole",
        precio : 100,
        id:4,
        imgPlato:images.burger_restaurant_1
      }
    ]
  },
  {
    id: 2,
    rating: 4.8,
    categorias: "pizzeria",
    foto: images.pizza_restaurant,
    nombreProductos: "Pizzas",
    nombre: "El Napoles",
    descripcion:'"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
    barrio:"Retiro",
    comidas:[
      {
        nombreDePlato: "Pizza Jamon y queso",
        precio : 100,
        id:1,
        imgPlato:images.pizza_restaurant
      },
      {
        nombreDePlato: "Pizza Rucula",
        precio : 100,
        id:2,
        imgPlato:images.pizza_restaurant
      },
      {
        nombreDePlato: "Pizza Fugazzeta",
        precio : 100,
        id:3,
        imgPlato:images.pizza_restaurant
      },
      {
        nombreDePlato: "Pizza Fugazeta Rellena",
        precio : 100,
        id:4,
        imgPlato:images.pizza_restaurant
      }
    ]
  },
  {
    id: 3,
    nombreProductos: "Hotdogs",
    rating: 4.8,
    categorias: "panchos",
    foto: images.hot_dog_restaurant,
    nombre: "El paragua",
    descripcion:'"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
    barrio:"Palermo",
    comidas:[
      {
        nombreDePlato: "Pancho con cheddar",
        precio : 100,
        id:1,
        imgPlato:images.hot_dog_restaurant
      },
      {
        nombreDePlato: "Pancho clasico",
        precio : 100,
        id:2,
        imgPlato:images.hot_dog_restaurant
      },
      {
        nombreDePlato: "Pancho con lluvia de papas",
        precio : 100,
        id:3,
        imgPlato:images.hot_dog_restaurant
      },
      {
        nombreDePlato: "Pancho Gourmet",
        precio : 100,
        id:4,
        imgPlato:images.hot_dog_restaurant
      }
    ]
  },
  {
    id: 4,
    nombreProductos: "Sushi",
    rating: 4.8,
    categorias: "sushi",
    foto: images.japanese_restaurant,
    nombre: "Japones",
    descripcion:'"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
    barrio:"Puerto Madero",
    comidas:[
      {
        nombreDePlato: "Sushi Uramaki",
        precio : 100,
        id:1,
        imgPlato:images.japanese_restaurant
      },
      {
        nombreDePlato: "Sushi Temaki",
        precio : 100,
        id:2,
        imgPlato:images.japanese_restaurant
      },
      {
        nombreDePlato: "Sushi Inari",
        precio : 100,
        id:3,
        imgPlato:images.japanese_restaurant
      },
      {
        nombreDePlato: "Sushi Maki",
        precio : 100,
        id:4,
        imgPlato:images.japanese_restaurant
      }
    ]
  },
  {
    id: 5,
    nombre: "El italiano",
    rating: 4.8,
    categorias: "fideos",
    foto: images.noodle_shop,
    nombreProductos: "Tallarines",
    descripcion:'"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
    barrio:"Chino",
    comidas:[
      {
        nombreDePlato: "Ravioles",
        precio : 100,
        id:1,
        imgPlato:images.noodle_shop
      },
      {
        nombreDePlato: "Spaghetti",
        precio : 100,
        id:2,
        imgPlato:images.noodle_shop
      },
      {
        nombreDePlato: "Macarrones",
        precio : 100,
        id:3,
        imgPlato:images.noodle_shop
      },
      {
        nombreDePlato: "Fusilli ",
        precio : 100,
        id:4,
        imgPlato:images.noodle_shop
      }
    ]
  },
  {
    id: 6,
    nombre: "Grido",
    rating: 4.9,
    categorias: 'helados',
    foto: images.heladeria,
    nombreProductos: "Helado de avellaneda",
    descripcion:'"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
    barrio:"Belgrano",
    comidas:[
      {
        nombreDePlato: "Helado chocolate",
        precio : 100,
        id:1,
        imgPlato:images.heladeria
      },
      {
        nombreDePlato: "Helado Vainilla",
        precio : 100,
        id:2,
        imgPlato:images.heladeria
      },
      {
        nombreDePlato: "Helado Frutilla",
        precio : 100,
        id:3,
        imgPlato:images.heladeria
      },
      {
        nombreDePlato: "Helado Crema Americana",
        precio : 100,
        id:4,
        imgPlato:images.heladeria
      }
    ]
  },
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