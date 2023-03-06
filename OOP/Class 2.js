class NoDefaultParams{
    constructor(num1, num2, num3, string1, string2){
        this.num1= num1
        this.num2= num2
        this.num3= num3
        this.string1= string1
        this.string2= string2
    }
    add(){
        return this.num1 + this.num2 + this.num3
    }
}