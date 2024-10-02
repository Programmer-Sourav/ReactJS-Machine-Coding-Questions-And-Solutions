import { useEffect, useState } from "react"
import useDebounce from "./useDebounce"

export default function DebounceComponent(){
   const [text, setText] = useState("")
   const debouncedValue = useDebounce(text, 300)


   useEffect(()=>{
    if(debouncedValue){
        console.log('Debounced value:', debouncedValue);
    }
   }, [debouncedValue])

    return(
        <div>
            <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}}/>
            <p>Debounced Text: {debouncedValue}</p>
        </div>
    )
}