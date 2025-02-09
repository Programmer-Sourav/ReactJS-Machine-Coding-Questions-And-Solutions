import { useEffect, useRef, useState } from "react"

export default function UseFocus(){


    const [focused, setFocued] = useState(false)
    const ref = useRef(null)
    


    useEffect(()=>{
        const currentElement = ref.current;
        if(!currentElement) return;


        const onFocus = () =>{
            setFocued(true)
        }

        const onBlur = () =>{
            setFocued(false)
        }

        currentElement.addEventListener("focus", onFocus)
        currentElement.addEventListener("blur", onBlur)


        return () =>{
            currentElement.removeEventListener("focus", onFocus)
            currentElement.removeEventListener("blur", onBlur)
        }
    }, [ref])
    return(
        <div> 

        </div>
    )
}