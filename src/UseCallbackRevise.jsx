import React, { useCallback, useState } from "react"

export default function UseCallbackRevise(){

   const [count, setCount] = useState(0)

   const increment = useCallback(()=>{setCount(pCount=>pCount+1)}, [count])

   const Child = React.memo(({onClick})=>{
    console.log(`Child component rendered`)
    return <button onClick={onClick}>Click Me</button>
   })

    return(
        <div> 
            <h1>Count: {count}</h1>
            <Child onClick={increment}/>
            <button onClick={()=>setCount(count+1)}>Increment Parent</button>
        </div>
    )

}