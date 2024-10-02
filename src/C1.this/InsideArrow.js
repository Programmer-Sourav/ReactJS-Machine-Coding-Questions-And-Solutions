const object = {
    name: "Carol",
    getName: function (){
        const arrow = () =>this.name;
        return arrow();
    }
}

console.log(object.getName())