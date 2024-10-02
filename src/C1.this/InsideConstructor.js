function Person(name, age){
   this.name = name;
   this.age = age;
}

const personInstance = new Person("ALice", 33)
console.log(personInstance.name) //Alice