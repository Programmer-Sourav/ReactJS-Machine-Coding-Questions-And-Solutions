import { useEffect, useRef } from "react"

export default function UseRefRevise(){

    const useReference = useRef(null)


    useEffect(()=>{
        useReference.current.focus();
    }, [useRef])

    return(
        <input ref={useReference} placeholder="Focus on me!"/>
    )
}