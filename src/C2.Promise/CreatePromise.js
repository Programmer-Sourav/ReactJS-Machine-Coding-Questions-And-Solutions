//Producing Code
const myPromise = new Promise((resolve, reject)=>{
    const success = true; // simulate success/failure
    if (success) {
        resolve("Operation successful!");
      } else {
        reject("Operation failed!");
      }
})

//Consuming code

myPromise.then((res)=>resolve(res))   // Handles success
         .catch((error)=>console.log(error)) //Handles failure
         .finally(()=>console.log("Operation Completed!")) //Executes regardless of 
         //succes or failure

