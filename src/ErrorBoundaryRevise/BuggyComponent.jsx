import { useState } from "react"

export default function BuggyComponent(){

    const [counter, setCounter] = useState(0)


    const increment = () =>{
        setCounter(prevCounter=>prevCounter+1)
        if(counter>=3){
           throw new Error("Oops! Some Exception occured!");
            
        }
    }

    return(
        <>
         <h1>{counter}</h1>
         <button onClick={increment}>Increment</button>
         </>
    )
}