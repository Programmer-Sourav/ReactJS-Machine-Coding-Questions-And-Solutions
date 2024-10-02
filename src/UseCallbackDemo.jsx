import { useCallback, useState } from "react";
import React from "react";

const Child = React.memo(({onClick}) => {
    console.log("Child Component Rendered")
    return <button onClick={onClick}>Click me</button>

});


export default function Parent(){
    const [count, setCount] = useState(0);

     // Without useCallback, the increment function would be recreated on every render.
    const handleIncrement = useCallback(() =>{
        setCount(pCount=>pCount + 1)
    }, [count])


    return(
        <div> 
         <p>Count: {count}</p>   
         <Child onClick = {handleIncrement}/>
         <button onClick={()=>setCount(count+1)}>Increment Parent</button>
        </div>
    )

}