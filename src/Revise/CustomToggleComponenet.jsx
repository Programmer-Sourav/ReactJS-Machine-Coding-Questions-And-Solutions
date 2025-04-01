import { useEffect, useRef } from "react";
import useToggle from "./useToggle"

export default function CustomToggleComponent(){

   const { toggleState, toggleFunction } = useToggle();

   const toggleRef = useRef(null);

   useEffect(()=>{
    toggleRef.current.focus()
   }, [])

    return(
        <div> 
            <p ref={toggleRef}>{toggleState ? "On" : "OFF"} </p>
            <button onClick={toggleFunction}>Toggle State</button>
        </div>
    )
}