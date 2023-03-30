// Here we are going to create a function declaration which will be able to do two things: 
// 1. If the function is called with the argument true, it will output the names of the dishes and calculate their final price (including 20% tax) and output it to the console.
// 2. If the function is called with the argument false, it will output the names of the dishes and their prices without tax.
// The expected outcome is that all the dishes' names and prices will be shown in the console output.
// We  will start from here: 
// The text below shows the output that your code should produce:
// Prices with 20% tax:
// Dish: Italian pasta Price (incl.tax): $ 11.46
// Dish: Rice with veggies Price (incl.tax): $ 10.38
// Dish: Chicken with potatoes Price (incl.tax): $ 18.66
// Dish: Vegetarian Pizza Price (incl.tax): $ 7.74
// Prices without tax:
// Dish: Italian pasta Price (incl.tax): $ 9.55
// Dish: Rice with veggies Price (incl.tax): $ 8.65
// Dish: Chicken with potatoes Price (incl.tax): $ 15.55
// Dish: Vegetarian Pizza Price (incl.tax): $ 6.45

const menu = {
    pasta: 9.55,
    rice: 8.65,
    chicken: 15.55,
    pizza: 6.45
    }
    function showMenu(tax){
    if(tax === true){   
    console.log(`Prices with 20% tax:`)
    console.log(`Dish: Italian pasta Price (incl.tax): $ ${menu.pasta*1.2}`)
    console.log(`Dish: Rice with veggies Price (incl.tax): $ ${menu.rice*1.2}`)
    console.log(`Dish: Chicken with potatoes Price (incl.tax): $ ${menu.chicken*1.2}`)
    console.log(`Dish: Vegetarian Pizza Price (incl.tax): $ ${menu.pizza*1.2}`)
    }else{
    console.log(`Prices without tax:`)
    console.log(`Dish: Italian pasta Price (incl.tax): $ ${menu.pasta}`)
    console.log(`Dish: Rice with veggies Price (incl.tax): $ ${menu.rice}`)
    console.log(`Dish: Chicken with potatoes Price (incl.tax): $ ${menu.chicken}`)
    console.log(`Dish: Vegetarian Pizza Price (incl.tax): $ ${menu.pizza}`)
    }
    }
    showMenu(true)
    // showMenu(false)
0,88
homework: 70, 13, 78, 63, 38,45