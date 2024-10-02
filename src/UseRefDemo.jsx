import { useEffect, useRef } from "react"

export default function UseRefDemo(){

     const ref = useRef(null)


     useEffect(()=>{
        //focus the input element on mount
        ref.current.focus()
     }, [])

    return(
        <div> 
          <input type="text" ref = {ref} placeholder="Focus on me"/>
        </div>
    )
}