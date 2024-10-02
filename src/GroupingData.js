const input = [
    { key: "Sample1", data: "Data1" },
    { key: "Sample1", data: "Data1" },
    { key: "Sample2", data: "Data2" },
    { key: "Sample1", data: "Data1" },
    { key: "Sample3", data: "Data1" },
    { key: "Sample4", data: "Data1" },
    { key: "Sample3", data: "Data2" },
    { key: "Sample3", data: "Data3" },
    { key: "Sample4", data: "Data4" }
];

// let filteredArrays = [];
// let resultantObj = {}; // Initialize outside the loop
// let obj1 = {};

// function groupData(input) {
//     console.log(444, input);
//     let filteredData = [];

//     for (const key of input) {
//         console.log(222, key, key.key);
//         filteredData = input.filter(
//             (eachItem) => eachItem.key.toLowerCase() === key.key.toLowerCase()
//         );
//         console.log(333, filteredData);
//         const keyInObject = key.key;
//         console.log(777, keyInObject);

//         // Creating an object dynamically with the key as keyInObject
//         obj1 = { [keyInObject]: filteredData };
//         filteredArrays = [...filteredArrays, obj1];
//         console.log(4444, filteredArrays);
//     }

//     // Reduce function to group the arrays based on the key
//     resultantObj = filteredArrays.reduce((acc, curItem) => {
//         Object.keys(curItem).forEach((key) => {
//             console.log(888, acc[key]);
//             if (!acc[key]) {
//                 // If key does not exist, initialize with the current key's array
//                 acc[key] = curItem[key];
//             } 
//             // else {
//             //     // If key exists, concatenate current array to the existing one
//             //     acc[key] = acc[key].concat(curItem[key]);
//             // }
//         });
//         return acc; // Don't forget to return the accumulator!
//     }, {}); // Initialize with an empty object

//     console.log(123456, resultantObj);
// }

// groupData(input);


function groupdata(input){
    // Using reduce to iterate through the array and group by 'key'
    const groupedResult = input.reduce((acc, currentItem)=>{
         // If the key does not exist in the accumulator, create an array for it
         if(!acc[currentItem.key]){
            acc[currentItem.key] = []
         }
         // Push the current item to the respective key's array
         acc[currentItem.key].push(currentItem);
        return acc;  // Return the updated accumulator
    }, {}) //Initialize the accumulator with an empty object

    return groupedResult;
}

const result = groupdata(input);
console.log(1234, result)


const output = {}

input.forEach((curItem)=>{
    if(output[curItem.key]){
        //key is available
        output[curItem.key].push(curItem)
    }
    else{
        output[curItem.key] = [curItem]
    }
})
console.log(output)



// memoize parametre values, a, b

// added value, ? 
// I can check, if(parameters are same in memoized StorageEvent, if parameters are same, fetch result
//     else call add() again 
// )

const memoizedArgs =[]

let memizedValue = {}; // Cache for storing memoized results

const add = (a, b) => { 
    console.log("Executed ", a, b);
    const result = a + b;
    // Store the result in the memoizedValue object with the key as functionName + arguments
    const key = add.name + `${a},${b}`;
    memizedValue = { ...memizedValue, [key]: result };
    console.log(111, memizedValue);
    return result;
}; 

function memoizedFn(type, a, b) {
    // Construct the key using the function name and arguments
    const key = type + `${a},${b}`;
    console.log(1111, memizedValue[key], type);
    
    // Check if the result for the given key is already memoized
    if (memizedValue[key]) {
      console.log("Cached Value", memizedValue[key]);
      return memizedValue[key]; // Return the cached value
    } else {
        // If not cached, call the add function and memoize the result
        return add(a, b);
    }
}

console.log(memoizedFn("add", 2, 3));  // Executes and caches
console.log(memoizedFn("add", 2, 3));  // Returns cached result
console.log(memoizedFn("add", 4, 5));  // Executes and caches
console.log(memoizedFn("add", 2, 3));  // Returns cached result
