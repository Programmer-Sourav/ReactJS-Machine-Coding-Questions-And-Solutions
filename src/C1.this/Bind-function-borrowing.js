//const boundFunction = function.bind(thisArg, arg1, arg2, ...)

const car = {
    brand: "Tesla",
    getBrand : function(){
        return this.brand;
    }
}

console.log(123, car.getBrand)
const getCarBrand = car.getBrand.bind(car)
console.log(getCarBrand());

//In this example, car.getBrand.bind(car) returns a new function that has
// this set to car. When getCarBrand() is invoked later, it returns the correct 
//brand.