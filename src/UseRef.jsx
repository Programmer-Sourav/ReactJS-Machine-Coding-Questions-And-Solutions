import { useEffect, useRef } from "react"

export default function UseRef(){

const inputRef = useRef(null)

useEffect(()=>{
    inputRef .current.focus()
},[])

    return(
        <div> 
          <input ref={inputRef} placeholder="focus on me"/>
        </div>
    )
}