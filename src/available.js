// unavailable ingredients have a dash in front of their name
// ingredients must also be present in Filter.js "ingredients" array !!!
export const availableIngredients = [
  "vodka",
  "tequila",
  "whiskey",
  //"rum",
  "white rum",
  "gin",
  //"lemon vodka",
  "triple sec",
  "blue curacao",
  "lime juice",
  //"cranberry juice",
  "orange juice",
  //"apple juice",
  "tomato juice",
  "lemon juice",
  //"orange liqueur",
  //"melon liqueur",
  //"banana liqueur",
  "almond liqueur",
  "coffee liqueur",
  "irish cream",
  "cola",
  "tonic",
  "ice",
  "salt",
  "sugar",
  "black pepper",
  "simple syrup",
  "grenadine syrup",
  "whipped cream",
  "ice cream",
  //"almond syrup",
  //"sweet and sour",
  "water",
  //"Hpnotiq",
  "Jagermeister",
  //"Oreos",
];

//

//

//

//

//

//

export const drinks = [
  // cocktails
  {
    name: "Margarita",
    type: "cocktails",
    ingredients: [
      "tequila",
      "triple sec",
      "lime juice",
      "simple syrup",
      "salt",
      "ice",
    ],
    origin: ["Mexico"],
    image: "image-margarita.jpg",
  },
  {
    name: "Mai Tai",
    type: "cocktails",
    ingredients: [
      "rum",
      "white rum",
      "orange liqueur",
      "lime juice",
      "almond syrup",
      "orange juice",
      "ice",
    ],
    origin: ["USA"],
    image: "image-mai-tai.jpg",
  },
  {
    name: "Daiquiri",
    type: "cocktails",
    ingredients: ["white rum", "lime juice", "sugar"],
    origin: ["USA", "Cuba"],
    image: "image-daiquiri.jpg",
  },
  {
    name: "Cosmopolitan",
    type: "cocktails",
    ingredients: [
      "lemon vodka",
      "triple sec",
      "cranberry juice",
      "lime juice",
      "ice",
    ],
    origin: ["USA"],
    image: "image-cosmopolitan.jpg",
  },
  {
    name: "Bloody Marry",
    type: "cocktails",
    ingredients: [
      "vodka",
      "tomato juice",
      "lemon juice",
      "salt",
      "black pepper",
      "ice",
    ],
    origin: ["USA", "France"],
    image: "image-bloody-mary.jpg",
  },

  // shots
  {
    name: "Kamikaze",
    type: "shots",
    ingredients: ["vodka", "triple sec", "lime juice"],
    origin: ["USA", "Japan"],
    image: "image-kamikaze.jpg",
  },
  {
    name: "Blowjob",
    type: "shots",
    ingredients: [
      "almond liqueur",
      "coffee liqueur",
      "irish cream",
      "whipped cream",
    ],
    origin: [""],
    image: "image-blowjob.png",
  },
  {
    name: "Deep Ocean",
    type: "shots",
    ingredients: ["blue curacao", "rum", "Hpnotiq"],
    origin: [""],
    image: "image-deep-ocean.jpg",
  },
  {
    name: "Monkey Brain Shot",
    type: "shots",
    ingredients: ["vodka", "lemon juice", "irish cream", "grenadine syrup"],
    origin: [""],
    image: "image-monkey-brain.jpg",
  },
  // long drinks
  {
    name: "Whiskey Cola",
    type: "long drinks",
    ingredients: ["whiskey", "cola"],
    origin: ["USA"],
    image: "image-whiskey-cola.jpg",
  },
  {
    name: "Gin Tonic",
    type: "long drinks",
    ingredients: ["gin", "tonic"],
    origin: ["UK", "India"],
    image: "image-gin-tonic.jpg",
  },
  // other
  {
    name: "Jagermeister Oreo Milkshake",
    type: "other",
    ingredients: ["Jagermeister", "Oreos", "ice cream"],
    origin: [],
    image: "image-Jager-Oreo-shake.jpg",
  },
];
