let recursion=()=>{
    console.log("Hello World")
    recursion()
}
function myDay() {
    console.log('Morning');
    console.log('Afternoon');
    console.log('Evening');
    myDay();
}
// These two function will run infinitely because of recursion.
// recursion()
// myDay()