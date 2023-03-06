// Factory Function: 
function createCircle(radius){
    return{
        radius,
        draw: function(){
            console.log('draw')
        }
    }
}
const circle= createCircle(1)
circle.draw()

// Constructor Function
function Circle(radius){
    console.log(`this, ${this}`)
    this.radius= radius;
    this.draw= function(){
        console.log('draw')
    }
}
const anotherCircle= new Circle(1)
// The new operator will do 4 things:
// 1. It will create a new empty object {}
// 2. It will set the value of this to be the new empty object
// 3. It will execute the function body
// 4. It will return this (which is the new empty object)
