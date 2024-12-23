import { useEffect, useRef, useState } from "react";

export default function useFocusRevise(){

const [focused, setFocused] = useState(false)
const ref = useRef(null)


useEffect(()=>{
    const currentElement = ref.current;
    if(!currentElement) return;

    const onFocus = () =>setFocused(true);
    const onBlur = () =>setFocused(false);

    currentElement.addEventListener("focus", onFocus);
    currentElement.addEventListener("blur", onBlur);

    return ()=>{
    currentElement.removeEventListener("focus", onFocus);
    currentElement.removeEventListener("blur", onBlur);    
    }

}, [ref])

return { ref, focused}

}