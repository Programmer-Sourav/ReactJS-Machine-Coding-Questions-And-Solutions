
const object = {
    name: "Alice", 
    getName: function(){
        return this.name;
    }
}
console.log(object.getName()) //Alice