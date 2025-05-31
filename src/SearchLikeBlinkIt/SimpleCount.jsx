import { useEffect, useState } from "react"

export default function SimpleCount(){

const [count, setCount] = useState(0) 


useEffect(async()=>{
   const response = await fetch("/api/users")
   const data = await response.json();
   console.log(data)
}, [])



for(let i =0; i<5; i++){
setCount(count+1)
}

    return(
        <div><h1>{count}</h1>

        </div>
    )
}