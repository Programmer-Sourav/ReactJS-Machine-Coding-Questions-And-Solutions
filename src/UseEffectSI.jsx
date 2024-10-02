import { useEffect, useState } from "react"

export default function UseEffectSI(){

  const [count, setCount] = useState(0)

    useEffect(()=>{
     
        const interval = setInterval(()=>{
            setCount((prevCount)=>prevCount+1)
        }, 1000)

        return ()=>clearInterval(interval)   
     },[])

    return(
        <div> 
         <h1>{count}</h1>
        </div>
    )
}