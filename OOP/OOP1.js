function meal(animal) {
    animal.food = animal.food + 10;
}
var dog = {
    food: 10
};
meal(dog);
meal(dog);
console.log(dog.food);
// Describe this code step by step: 
// 1. Create a function called meal.
// 2. Create a variable called dog.
// 3. Create a property called food and assign it a value of 10.
// 4. Call the meal function and pass the dog variable as an argument.
// 5. Call the meal function again and pass the dog variable as an argument.
// 6. Log the value of the food property of the dog variable to the console.
// 7. What is the value of the food property of the dog variable?</code>
