//function.apply(thisArg, [argsArray])

function sum(a,b,c){
    return a+ b+ c;
}

const inputArgs = [1,2,3]

console.log(sum.apply(null, inputArgs))


function personDetails(){
    return `Person Details ${this.name} and ${this.age}`
}


const inputArray = ["Alice", 33];
const person = { name: inputArray[0], age: inputArray[1] };

console.log(personDetails.apply(person, inputArray))