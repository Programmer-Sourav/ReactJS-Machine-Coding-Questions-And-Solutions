const p1 = Promise.resolve(10);
const p2 = Promise.reject("Error");
const p3 = Promise.resolve(20);


Promise.allSettled([p1, p2, p3]).then((result)=>{
    result.forEach((resolvedResult, index)=>{
        if(resolvedResult.status==="fulfilled"){
            console.log(`Promise ${index} resolved with value:`, resolvedResult.value);
        }
        else{
            console.log(`Promise ${index} rejected with reason`, resolvedResult.reason);
        }
    });
});



const Pr1 = Promise.reject("Error");
const Pr2 = Promise.resolve(10);
const Pr3 = Promise.resolve(20);

Promise.any([Pr1, Pr2, Pr3]).then((value)=>{
    console.log(`First fulfilled Promise value`, value)
}).catch((error)=>{
    console.log(`All Promises Rejected `, error.errors)
})