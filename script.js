const starters = ['Garlic Bread',
    'Chicken Wings',
    'Mozzarella Sticks',
    'Vegetable Spring Rolls',
    'Nachos',
    'Potato Skins',
    'Shrimp Cocktail',
    'Bruschetta',
    'Caesar Salad',
    'Cheese Platter'];
const mains = ['Grilled Chicken with Lemon Herb Sauce',
    'Beef Burgers',
    'Pasta Carbonara',
    'Vegetarian Stir-Fry',
    'Baked Salmon with Dill Sauce',
    'Margherita Pizza',
    'Beef or Vegetable Tacos',
    'Chicken Alfredo Pasta',
    'Vegetable Curry',
    'Grilled Steak with Chimichurri Sauce'];
const desserts = [
'Chocolate Lava Cake',
'Tiramisu',
'Fruit Tart',
'Cheesecake',
'Apple Crisp',
'Lemon Bars',
'Panna Cotta',
'Key Lime Pie',
'Caramel Flan',
'Chocolate Mousse'
];

const createMeal= () => {

    let starterIndex = (Math.floor(Math.random() * starters.length));
    let mainIndex = (Math.floor(Math.random() * mains.length));
    let dessertIndex = (Math.floor(Math.random() * desserts.length));
    let starter = starters[starterIndex];
    let main = mains[mainIndex];
    let dessert = desserts[dessertIndex];
    document.getElementById("mainSec").innerHTML= "<h2> Here is your unique Meal:</h2> <br>Starter : " + starter +" <br> Main: "  + main + "<br> Dessert: " + dessert +"<br> <br><a><button class=\"button\" onclick=\"createMeal()\"> Another meal!</button></a>";
};

// createMeal();
