import { useCallback, useState } from "react";

export default function Parent(){
    const [count, setCount] = useState(0)

    const increment = useCallback(()=>{setCount(count+1)}, [count])


    return(
        <div> 
            <h1> {count}</h1>
            <Child onClick = {increment}/>
            <button onClick={()=>setCount(count+1)}> Increment Parent</button>
        </div>
    )
}

const  Child = React.memo(({props}) =>{
 console.log("Child component Rendered")
 return <button onClick={props}>Click Me</button>
})