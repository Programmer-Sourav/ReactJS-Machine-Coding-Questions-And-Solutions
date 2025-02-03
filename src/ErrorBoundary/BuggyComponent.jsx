import { useState } from "react"

export default function BuggyComponent(){

    const [counter, setCounter] = useState(0)


    if(counter===3){
        throw new Error("I crashed!");
    }

    return(
       <button onClick={()=>{setCounter((counter)=>counter+1)}} >Increment-{counter}</button>
    )
}