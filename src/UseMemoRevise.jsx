import { useMemo, useState } from "react"

export default function UseMemoRevise(){

   const [count, setCount] = useState(0)

   
    const calculateExpensiveCalculation = (num) =>{
       for(let i = 0; i< 1000000000; i++){
        num = num + i;
       }
       return num;
    }

    const computedValue = useMemo(()=>{return calculateExpensiveCalculation(count)}, [count])

    return(
        <div>
        <h1>Value: {computedValue}</h1>
        <button onClick={()=>{setCount(count+1)}}>Increment Count</button>
        </div>
    )
}