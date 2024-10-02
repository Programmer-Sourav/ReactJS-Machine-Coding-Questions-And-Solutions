import { useEffect, useState } from "react"
import DebounceRevise from "./DebounceRevise"

export default function Debounce(){

    const [text, setText] = useState("")

    const debouncedValue = DebounceRevise(text, 300)


    useEffect(()=>{
        if(debouncedValue){
            console.log('Debounced value:', debouncedValue);
        }
    }, [debouncedValue])

    return(
        <div> 
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
            <p>Debounced Text: {debouncedValue}</p>
        </div>
    )
}