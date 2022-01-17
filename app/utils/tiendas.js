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
    descripcion: '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
    barrio: "Retiro",
    comidas: [{
        title: "Hamburguesa Doble Cheddar",
        unit_price: 100,
        id: "laBirra1",
        imgPlato: images.burger_restaurant_1,
        descripcion: '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
      },
      {
        title: "Hamburguesa Panceta y huevo",
        unit_price: 100,
        id:"laBirra2",
        imgPlato: images.burger_restaurant_1,
        descripcion: '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
      },
      {
        title: "Hamburguesa Vegana",
        unit_price: 100,
        id:"laBirra3",
        imgPlato: images.burger_restaurant_1,
        descripcion: '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
      },
      {
        title: "Hamburguesa Con Guacamole",
        unit_price: 100,
        id:"laBirra4",
        imgPlato: images.burger_restaurant_1,
        descripcion: '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
      },
      {
        title: "Hamburguesa Con Guacamole",
        unit_price: 100,
        id:"laBirra5",
        imgPlato: images.burger_restaurant_1,
        descripcion: '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
      }
      ,
      {
        title: "Hamburguesa Con Guacamole",
        unit_price: 100,
        id:"laBirra6",
        imgPlato: images.burger_restaurant_1,
        descripcion: '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
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
    descripcion: '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
    barrio: "Retiro",
    comidas: [{
        title: "Pizza Jamon y queso",
        unit_price: 100,
        id: "elNapoles1",
        imgPlato: images.pizza_restaurant,
        descripcion: '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
      },
      {
        title: "Pizza Rucula",
        unit_price: 100,
        id: "elNapoles2",
        imgPlato: images.pizza_restaurant,
        descripcion: '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
      },
      {
        title: "Pizza Fugazzeta",
        unit_price: 100,
        id: "elNapoles3",
        imgPlato: images.pizza_restaurant,
        descripcion: '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
      },
      {
        title: "Pizza Fugazeta Rellena",
        unit_price: 100,
        id: "elNapoles4",
        imgPlato: images.pizza_restaurant,
        descripcion: '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
      }
    ]
  },
  {
    id: 3,
    nombreProductos: "Hotdogs",
    rating: 4.8,
    categorias: "panchos",
    foto: images.hot_dog_restaurant,
    nombre: "El panchometro",
    descripcion: '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
    barrio: "Palermo",
    comidas: [{
        title: "Pancho con cheddar",
        unit_price: 100,
        id:"panchometro1",
        imgPlato: images.hot_dog_restaurant,
        descripcion: '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
      },
      {
        title: "Pancho clasico",
        unit_price: 100,
        id:"panchometro2",
        imgPlato: images.hot_dog_restaurant,
        descripcion: '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
      },
      {
        title: "Pancho con lluvia de papas",
        unit_price: 100,
        id:"panchometro3",
        imgPlato: images.hot_dog_restaurant,
        descripcion: '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
      },
      {
        title: "Pancho Gourmet",
        unit_price: 100,
        id:"panchometro4",
        imgPlato: images.hot_dog_restaurant,
        descripcion: '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
      }
    ]
  },
  {
    id: 4,
    nombreProductos: "Sushi",
    rating: 4.8,
    categorias: "sushi",
    foto: images.japanese_restaurant,
    nombre: "El Ponja",
    descripcion: '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
    barrio: "Puerto Madero",
    comidas: [{
        title: "Sushi Uramaki",
        unit_price: 100,
        id:"elPonja1",
        imgPlato: images.japanese_restaurant,
        descripcion: '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
      },
      {
        title: "Sushi Temaki",
        unit_price: 100,
        id:"elPonja2",
        imgPlato: images.japanese_restaurant,
        descripcion: '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
      },
      {
        title: "Sushi Inari",
        unit_price: 100,
        id:"elPonja3",
        imgPlato: images.japanese_restaurant,
        descripcion: '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
      },
      {
        title: "Sushi Maki",
        unit_price: 100,
        id:"elPonja4",
        imgPlato: images.japanese_restaurant,
        descripcion: '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
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
    descripcion: '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
    barrio: "Chino",
    comidas: [{
        title: "Ravioles",
        unit_price: 100,
        id:"elItaliano1",
        imgPlato: images.noodle_shop,
        descripcion: '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
      },
      {
        title: "Spaghetti",
        unit_price: 100,
        id:"elItaliano2",
        imgPlato: images.noodle_shop,
        descripcion: '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
      },
      {
        title: "Macarrones",
        unit_price: 100,
        id:"elItaliano3",
        imgPlato: images.noodle_shop,
        descripcion: '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
      },
      {
        title: "Fusilli ",
        unit_price: 100,
        id:"elItaliano4",
        imgPlato: images.noodle_shop,
        descripcion: '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
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
    descripcion: '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
    barrio: "Belgrano",
    comidas: [{
        title: "Helado chocolate",
        unit_price: 100,
        id:"grido1",
        imgPlato: images.heladeria,
        descripcion: '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
      },
      {
        title: "Helado Vainilla",
        unit_price: 100,
        id:"grido2",
        imgPlato: images.heladeria,
        descripcion: '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
      },
      {
        title: "Helado Frutilla",
        unit_price: 100,
        id:"grido3",
        imgPlato: images.heladeria,
        descripcion: '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
      },
      {
        title: "Helado Crema Americana",
        unit_price: 100,
        id:"grido4",
        imgPlato: images.heladeria,
        descripcion: '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
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