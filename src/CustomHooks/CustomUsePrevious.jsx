import { useState } from "react"
import usePreviousRevise from "./usePreviousRevise"

export default function CustomUsePrevious(){

    const [count, setCount] = useState(0)


    const prevCount = usePreviousRevise(count)

    return(
        <div> 
          <p>Current Count : {count}</p>
          <p>Previous Count : {prevCount}</p>  
          <button onClick={()=>{setCount(count=>count+1)}}>Increment</button>
          <button onClick={()=>{setCount(count=>count-1)}}>Decrement</button>
        </div>
    )
}