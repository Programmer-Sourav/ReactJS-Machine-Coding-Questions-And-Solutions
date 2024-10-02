function greeting(greeting){
    console.log(`${greeting}, my name is ${this.name}`)
}

const person = {name: "Sourav"}
greeting.call(person, "Hey Guys")
//function.call(thisArg, arg1, arg2, ...)

//here greeting.call(person, "Hey Guys") sets the this value of the 
//greeting function to the person object 