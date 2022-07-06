// unavailable ingredients have a dash in front of their name
// ingredients must also be present in Filter.js "ingredients" array !!!
export const availableIngredients = [
  "-vodka",
  "tequila",
  "-whiskey",
  "-rum",
  "gin",
  "lemon vodka",
  "triple sec",
  "blue curacao",
  "lime juice",
  "-cranberry juice",
  "orange juice",
  "-apple juice",
  "tomato juice",
  "-lemon juice",
  "-orange liqueur",
  "-melon liqueur",
  "-banana liqueur",
  "ice",
  "salt",
  "simple syrup",
  "-sweet and sour",
  "water",
];

//

//

//

//

//

//

export const drinks = [
  {
    name: "Margarita",
    type: "cocktail",
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
    name: "Cosmopolitan",
    type: "cocktail",
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
    type: "cocktail",
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
];
