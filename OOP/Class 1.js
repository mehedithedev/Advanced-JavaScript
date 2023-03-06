class Train{
    constructor(color, lightsOn){
        this.color= color;
        this.lightsOn= lightsOn;
    }
    toggleLights(){
        this.lightsOn= ! this.lightsOn
    }
    lightStatus(){
        console.log(`Lights on? ${this.lightsOn}`)
    }
    getSelf(){
        console.log(this)
    }
    getPrototype(){
        let prototype= Object.getPrototypeOf(this)
        console.log(prototype)
    }
}

let myFirstTrain = new Train('red', true)
console.log(myFirstTrain)
let mySecondTrain= new Train('Green', true)
console.log(mySecondTrain)
myFirstTrain.toggleLights()
myFirstTrain.getSelf()
console.log(myFirstTrain.lightStatus())
