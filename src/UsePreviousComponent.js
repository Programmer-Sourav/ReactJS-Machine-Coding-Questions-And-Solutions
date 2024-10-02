import { useState } from "react"
import usePrevious from "./usePrevious"

export default function UsePreviousComponent(){
   const [count, setCount] = useState(0)
   const prevCount = usePrevious(count)

    return(
        <div>
            <p>Current Count: {count}</p>
            <p>Prev Count : {prevCount} </p>
            <button onClick={()=>{setCount(count+1)}}>Increment</button>
        </div>
    )
}